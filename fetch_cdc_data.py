import pandas as pd
import json


age_sex = pd.read_csv("https://data.cdc.gov.tw/download?resourceid=3c1e263d-16ec-4d70-b56c-21c9e2171fc7&dataurl=https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.csv")
test = pd.read_csv("https://data.cdc.gov.tw/download?resourceid=7ee40c7d-a14c-47b3-bf27-a5de4c278782&dataurl=https://od.cdc.gov.tw/eic/covid19/covid19_tw_specimen.csv")
cases = pd.read_csv("https://data.cdc.gov.tw/download?resourceid=52eb9a7d-813d-48b1-b462-384a7c84a746&dataurl=https://od.cdc.gov.tw/eic/covid19/covid19_tw_stats.csv")


def fill(date):
    d = date.split("/")
    d[1] = d[1].zfill(2)
    d[2] = d[2].zfill(2)
    return "/".join(d)

age_sex = age_sex.rename(columns = {'個案研判日': 'Date', '縣市': 'County', 
                                    '性別': 'Sex', '是否為境外移入': 'Imported', 
                                    '年齡層': 'AgeGrp', '確定病例數': 'Cases'})


test = test.rename(columns = { '通報日': 'Date' })
test.Date = [fill(date) for date in test.Date]
cases_ts = age_sex.groupby("Date").Cases.sum().reset_index()
imported_ts = age_sex.loc[age_sex.Imported == '是', ].groupby("Date").Cases.sum().reset_index().rename(columns = {'Cases': 'Imported'})

test = test.merge(cases_ts).merge(imported_ts)

key_indices = { 
    'Deaths': int(cases.loc[0, "死亡"]),
    'Test': int(test.Total.sum()),
    'TestBi': int(test.Total.tail(14).sum()),
    'Cases': int(cases.loc[0, "確診"]),
    'CasesBi': int(test.Cases.tail(14).sum()),
    'Imported': int(test.Imported.sum()),
    'ImportedBi': int(test.Imported.tail(14).sum())
}


with open('CDC/key.json', 'w') as f:
    json.dump(key_indices, f)
