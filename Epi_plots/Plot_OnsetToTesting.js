$(function(){
	$('#gOTT').highcharts(
{
  "title": {
    "text": ""
  },
  "yAxis": [
    {
      "id": 0,
      "title": {
        "text": "Density"
      },
      "min": 0,
      "max": 0.239,
      "minPadding": 0,
      "floor": 0,
      "height": "100%",
      "top": "0%"
    },
    {
      "id": 1,
      "title": {
        "enabled": false
      },
      "labels": {
        "enabled": false
      },
      "min": 1,
      "max": 79.0892,
      "minPadding": 0,
      "floor": 1,
      "height": "100%",
      "top": "0%",
      "opposite": true
    }
  ],
  "credits": {
    "enabled": false
  },
  "exporting": {
    "enabled": true
  },
  "plotOptions": {
    "series": {
      "label": {
        "enabled": false
      },
      "turboThreshold": 0
    },
    "treemap": {
      "layoutAlgorithm": "squarified"
    }
  },
  "xAxis": {
    "title": {
      "text": "Delay from symptom onset to testing (days)"
    },
    "min": 0,
    "max": 20
  },
  "series": [
    {
      "data": [
        {
          "x": 4.4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#01<br><b>Confirm at:<\/b>2020-01-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 3,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#03<br><b>Confirm at:<\/b>2020-01-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 3,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#04<br><b>Confirm at:<\/b>2020-01-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 1,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#09<br><b>Confirm at:<\/b>2020-01-30<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#10<br><b>Infected at/in:<\/b>house<br><hr>"
        },
        {
          "x": 9,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#10<br><b>Confirm at:<\/b>2020-01-31<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 1,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#12<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 3,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#13<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 9,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#14<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Italy,Hong Kong<br><hr>"
        },
        {
          "x": 7,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#15<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Italy,Hong Kong<br><hr>"
        },
        {
          "x": 4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#16<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Macau<br><hr>"
        },
        {
          "x": 11,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#17<br><b>Confirm at:<\/b>2020-02-08<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Italy,Hong Kong<br><hr>"
        },
        {
          "x": 7,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#19<br><b>Confirm at:<\/b>2020-02-15<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b><br><hr>"
        },
        {
          "x": 10,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#21<br><b>Confirm at:<\/b>2020-02-18<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>85<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#19<br><b>Infected at/in:<\/b>family<br><hr>"
        },
        {
          "x": 19,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#22<br><b>Confirm at:<\/b>2020-02-18<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#19<br><b>Infected at/in:<\/b>family<br><hr>"
        },
        {
          "x": 13,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#23<br><b>Confirm at:<\/b>2020-02-19<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#19<br><b>Infected at/in:<\/b>family<br><hr>"
        },
        {
          "x": 26,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#24<br><b>Confirm at:<\/b>2020-02-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Taiwan<br><hr>"
        },
        {
          "x": 22,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#25<br><b>Confirm at:<\/b>2020-02-21<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b><br><hr>"
        },
        {
          "x": 16,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#27<br><b>Confirm at:<\/b>2020-02-23<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>85<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#28<br><b>Infected at/in:<\/b>house<br><hr>"
        },
        {
          "x": 21,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#28<br><b>Confirm at:<\/b>2020-02-23<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#29<br><b>Infected at/in:<\/b>family<br><hr>"
        },
        {
          "x": 25,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#29<br><b>Confirm at:<\/b>2020-02-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 16,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#30<br><b>Confirm at:<\/b>2020-02-24<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#28<br><b>Infected at/in:<\/b>house<br><hr>"
        },
        {
          "x": 2,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#33<br><b>Confirm at:<\/b>2020-02-28<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Japan<br><hr>"
        },
        {
          "x": 5,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#34<br><b>Confirm at:<\/b>2020-02-28<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr>"
        },
        {
          "x": 5.8,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#35<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>NA<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 5.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#36<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>NA<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 5.6,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#37<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>NA<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 5.8,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#38<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>NA<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 1,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#39<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 7,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#42<br><b>Confirm at:<\/b>2020-03-03<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34,#36<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 1,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#43<br><b>Confirm at:<\/b>2020-03-05<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#39<br><b>Infected at/in:<\/b>community<br><hr>"
        },
        {
          "x": 1,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#44<br><b>Confirm at:<\/b>2020-03-05<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Philippine<br><hr>"
        },
        {
          "x": 1,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#46<br><b>Confirm at:<\/b>2020-03-10<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34,#41<br><b>Infected at/in:<\/b>NA<br><hr>"
        },
        {
          "x": 1,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#48<br><b>Confirm at:<\/b>2020-03-11<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 2,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#49<br><b>Confirm at:<\/b>2020-03-12<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Ireland,Belgium,Turkey<br><hr>"
        },
        {
          "x": 8.4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#50<br><b>Confirm at:<\/b>2020-03-13<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>50<br><b>Travelled to:<\/b><br><hr>"
        },
        {
          "x": 0.8,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#51<br><b>Confirm at:<\/b>2020-03-14<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherland,Austria<br><hr>"
        },
        {
          "x": 0.2,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#53<br><b>Confirm at:<\/b>2020-03-14<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Germany<br><hr>"
        },
        {
          "x": 1,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#54<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Thailand,Japan<br><hr>"
        },
        {
          "x": 2.8,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#56<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 1,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#58<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 1,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#59<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>Greece<br><hr>"
        },
        {
          "x": 2,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#62<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Philippine<br><hr>"
        },
        {
          "x": 0.2,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#63<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 1,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#64<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>20<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 0.8,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#65<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 0.8,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#66<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 0.8,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#67<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 2,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#71<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 1,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#74<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Iceland<br><hr>"
        },
        {
          "x": 5,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#75<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Germany<br><hr>"
        },
        {
          "x": 4,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#76<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 1,
          "y": 13,
          "labels": "<b>Case ID:<\/b>#78<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Germany<br><hr>"
        },
        {
          "x": 2,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#79<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 1,
          "y": 14,
          "labels": "<b>Case ID:<\/b>#80<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 3,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#82<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 2,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#85<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 4,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#86<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#87<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK,Italy,France<br><hr>"
        },
        {
          "x": 10,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#88<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 2,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#89<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 10,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#90<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 8,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#91<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France,Spain,UK<br><hr>"
        },
        {
          "x": 3,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#93<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Qatar<br><hr>"
        },
        {
          "x": 6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#95<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Indonesia<br><hr>"
        },
        {
          "x": 9,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#96<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 2,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#97<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Switzerland<br><hr>"
        },
        {
          "x": 3,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#98<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 8,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#99<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Philippine<br><hr>"
        },
        {
          "x": 1,
          "y": 15,
          "labels": "<b>Case ID:<\/b>#103<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#59<br><b>Infected at/in:<\/b>NA<br><hr>"
        },
        {
          "x": 5,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#106<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 0.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#107<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 10,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#109<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>85<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 3,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#111<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 4,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#112<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 1,
          "y": 16,
          "labels": "<b>Case ID:<\/b>#113<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US,Mexico<br><hr>"
        },
        {
          "x": 1,
          "y": 17,
          "labels": "<b>Case ID:<\/b>#114<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>Spain,Germany,UK<br><hr>"
        },
        {
          "x": 1,
          "y": 18,
          "labels": "<b>Case ID:<\/b>#115<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Poland<br><hr>"
        },
        {
          "x": 6,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#116<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 3,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#117<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Portugal,Spain<br><hr>"
        },
        {
          "x": 5,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#119<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 4,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#120<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 1,
          "y": 19,
          "labels": "<b>Case ID:<\/b>#122<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 1,
          "y": 20,
          "labels": "<b>Case ID:<\/b>#123<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Singapore,US,Japan<br><hr>"
        },
        {
          "x": 1,
          "y": 21,
          "labels": "<b>Case ID:<\/b>#124<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#160<br><b>Infected at/in:<\/b>work<br><hr>"
        },
        {
          "x": 12,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#125<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Netherland,Austria<br><hr>"
        },
        {
          "x": 2,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#126<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Canada<br><hr>"
        },
        {
          "x": 6,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#127<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 14,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#128<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France,luxembourg,Belgium,Germany<br><hr>"
        },
        {
          "x": 2,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#129<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 22,
          "labels": "<b>Case ID:<\/b>#130<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#59<br><b>Infected at/in:<\/b>NA<br><hr>"
        },
        {
          "x": 2,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#131<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Portugal,Spain<br><hr>"
        },
        {
          "x": 6,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#132<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Philippine<br><hr>"
        },
        {
          "x": 1,
          "y": 23,
          "labels": "<b>Case ID:<\/b>#133<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 10,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#136<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Turkey<br><hr>"
        },
        {
          "x": 5,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#137<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 24,
          "labels": "<b>Case ID:<\/b>#138<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 3,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#139<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 3,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#141<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#142<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 5,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#143<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Czech Republic,US<br><hr>"
        },
        {
          "x": 13,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#144<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Czech Republic,US<br><hr>"
        },
        {
          "x": 3,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#145<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 25,
          "labels": "<b>Case ID:<\/b>#146<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>South Africa<br><hr>"
        },
        {
          "x": 2,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#147<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Indonesia<br><hr>"
        },
        {
          "x": 3,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#148<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 4,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#149<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 1,
          "y": 26,
          "labels": "<b>Case ID:<\/b>#150<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 1,
          "y": 27,
          "labels": "<b>Case ID:<\/b>#151<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherland<br><hr>"
        },
        {
          "x": 4,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#152<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 1,
          "y": 28,
          "labels": "<b>Case ID:<\/b>#153<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 1,
          "y": 29,
          "labels": "<b>Case ID:<\/b>#154<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 9,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#156<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b><br><hr>"
        },
        {
          "x": 2,
          "y": 13,
          "labels": "<b>Case ID:<\/b>#157<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>New Zealand<br><hr>"
        },
        {
          "x": 2,
          "y": 14,
          "labels": "<b>Case ID:<\/b>#158<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 30,
          "labels": "<b>Case ID:<\/b>#159<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#160<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 3,
          "y": 13,
          "labels": "<b>Case ID:<\/b>#163<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 8,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#164<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Philippines<br><hr>"
        },
        {
          "x": 12,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#165<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Italy<br><hr>"
        },
        {
          "x": 3,
          "y": 14,
          "labels": "<b>Case ID:<\/b>#166<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Germany<br><hr>"
        },
        {
          "x": 1,
          "y": 31,
          "labels": "<b>Case ID:<\/b>#167<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 3,
          "y": 15,
          "labels": "<b>Case ID:<\/b>#168<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#160<br><b>Infected at/in:<\/b>work<br><hr>"
        },
        {
          "x": 3,
          "y": 16,
          "labels": "<b>Case ID:<\/b>#169<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#160<br><b>Infected at/in:<\/b>work<br><hr>"
        }
      ],
      "type": "scatter",
      "id": "dat0",
      "name": "Case (3 days ago)",
      "yAxis": 1,
      "zIndex": 0,
      "marker": {
        "radius": 5.18,
        "symbol": "circle"
      },
      "color": "#961d1d",
      "tooltip": {
        "headerFormat": "",
        "pointFormat": "{point.labels}"
      },
      "showInLegend": true
    },
    {
      "data": [
        [0.01, 0.1697],
        [0.1105, 0.1819],
        [0.2109, 0.1839],
        [0.3114, 0.1822],
        [0.4118, 0.1803],
        [0.5123, 0.1777],
        [0.6127, 0.1749],
        [0.7132, 0.1719],
        [0.8136, 0.1695],
        [0.9141, 0.1664],
        [1.0145, 0.1635],
        [1.115, 0.1605],
        [1.2154, 0.158],
        [1.3159, 0.1551],
        [1.4163, 0.1522],
        [1.5168, 0.1495],
        [1.6172, 0.1467],
        [1.7177, 0.144],
        [1.8181, 0.1412],
        [1.9186, 0.1388],
        [2.019, 0.1361],
        [2.1195, 0.1336],
        [2.2199, 0.1309],
        [2.3204, 0.1284],
        [2.4209, 0.1259],
        [2.5213, 0.1235],
        [2.6218, 0.121],
        [2.7222, 0.1187],
        [2.8227, 0.1164],
        [2.9231, 0.1141],
        [3.0236, 0.1117],
        [3.124, 0.1096],
        [3.2245, 0.1074],
        [3.3249, 0.1052],
        [3.4254, 0.1031],
        [3.5258, 0.101],
        [3.6263, 0.099],
        [3.7267, 0.0971],
        [3.8272, 0.0951],
        [3.9276, 0.0932],
        [4.0281, 0.0913],
        [4.1285, 0.0896],
        [4.229, 0.0878],
        [4.3294, 0.0859],
        [4.4299, 0.0841],
        [4.5304, 0.0824],
        [4.6308, 0.0808],
        [4.7313, 0.0791],
        [4.8317, 0.0775],
        [4.9322, 0.0759],
        [5.0326, 0.0743],
        [5.1331, 0.0728],
        [5.2335, 0.0712],
        [5.334, 0.0698],
        [5.4344, 0.0684],
        [5.5349, 0.067],
        [5.6353, 0.0656],
        [5.7358, 0.0642],
        [5.8362, 0.063],
        [5.9367, 0.0617],
        [6.0371, 0.0604],
        [6.1376, 0.0592],
        [6.238, 0.0579],
        [6.3385, 0.0568],
        [6.4389, 0.0556],
        [6.5394, 0.0545],
        [6.6398, 0.0534],
        [6.7403, 0.0523],
        [6.8408, 0.0512],
        [6.9412, 0.0502],
        [7.0417, 0.0492],
        [7.1421, 0.0482],
        [7.2426, 0.0472],
        [7.343, 0.0462],
        [7.4435, 0.0453],
        [7.5439, 0.0443],
        [7.6444, 0.0434],
        [7.7448, 0.0425],
        [7.8453, 0.0416],
        [7.9457, 0.0408],
        [8.0462, 0.04],
        [8.1466, 0.0392],
        [8.2471, 0.0384],
        [8.3475, 0.0376],
        [8.448, 0.0368],
        [8.5484, 0.0361],
        [8.6489, 0.0353],
        [8.7493, 0.0346],
        [8.8498, 0.0339],
        [8.9503, 0.0332],
        [9.0507, 0.0325],
        [9.1512, 0.0318],
        [9.2516, 0.0312],
        [9.3521, 0.0305],
        [9.4525, 0.0299],
        [9.553, 0.0293],
        [9.6534, 0.0287],
        [9.7539, 0.0282],
        [9.8543, 0.0276],
        [9.9548, 0.027],
        [10.0552, 0.0265],
        [10.1557, 0.0259],
        [10.2561, 0.0254],
        [10.3566, 0.0248],
        [10.457, 0.0243],
        [10.5575, 0.0238],
        [10.6579, 0.0233],
        [10.7584, 0.0229],
        [10.8588, 0.0224],
        [10.9593, 0.0219],
        [11.0597, 0.0214],
        [11.1602, 0.021],
        [11.2607, 0.0206],
        [11.3611, 0.0202],
        [11.4616, 0.0197],
        [11.562, 0.0193],
        [11.6625, 0.0189],
        [11.7629, 0.0185],
        [11.8634, 0.0181],
        [11.9638, 0.0178],
        [12.0643, 0.0174],
        [12.1647, 0.017],
        [12.2652, 0.0167],
        [12.3656, 0.0164],
        [12.4661, 0.016],
        [12.5665, 0.0157],
        [12.667, 0.0153],
        [12.7674, 0.015],
        [12.8679, 0.0147],
        [12.9683, 0.0144],
        [13.0688, 0.0141],
        [13.1692, 0.0138],
        [13.2697, 0.0135],
        [13.3702, 0.0133],
        [13.4706, 0.013],
        [13.5711, 0.0127],
        [13.6715, 0.0124],
        [13.772, 0.0122],
        [13.8724, 0.0119],
        [13.9729, 0.0117],
        [14.0733, 0.0114],
        [14.1738, 0.0112],
        [14.2742, 0.0109],
        [14.3747, 0.0107],
        [14.4751, 0.0105],
        [14.5756, 0.0103],
        [14.676, 0.01],
        [14.7765, 0.0098],
        [14.8769, 0.0096],
        [14.9774, 0.0094],
        [15.0778, 0.0092],
        [15.1783, 0.009],
        [15.2787, 0.0089],
        [15.3792, 0.0087],
        [15.4796, 0.0085],
        [15.5801, 0.0083],
        [15.6806, 0.0081],
        [15.781, 0.008],
        [15.8815, 0.0078],
        [15.9819, 0.0076],
        [16.0824, 0.0075],
        [16.1828, 0.0073],
        [16.2833, 0.0072],
        [16.3837, 0.007],
        [16.4842, 0.0069],
        [16.5846, 0.0067],
        [16.6851, 0.0066],
        [16.7855, 0.0065],
        [16.886, 0.0063],
        [16.9864, 0.0062],
        [17.0869, 0.0061],
        [17.1873, 0.0059],
        [17.2878, 0.0058],
        [17.3882, 0.0057],
        [17.4887, 0.0056],
        [17.5891, 0.0054],
        [17.6896, 0.0053],
        [17.7901, 0.0052],
        [17.8905, 0.0051],
        [17.991, 0.005],
        [18.0914, 0.0049],
        [18.1919, 0.0048],
        [18.2923, 0.0047],
        [18.3928, 0.0046],
        [18.4932, 0.0045],
        [18.5937, 0.0044],
        [18.6941, 0.0043],
        [18.7946, 0.0042],
        [18.895, 0.0041],
        [18.9955, 0.004],
        [19.0959, 0.004],
        [19.1964, 0.0039],
        [19.2968, 0.0038],
        [19.3973, 0.0037],
        [19.4977, 0.0036],
        [19.5982, 0.0036],
        [19.6986, 0.0035],
        [19.7991, 0.0034],
        [19.8995, 0.0033],
        [20, 0.0033]
      ],
      "id": "f0",
      "type": "line",
      "name": "Fitted distribution (3 days ago)",
      "yAxis": 0,
      "zIndex": 1,
      "keys": ["x", "y"],
      "color": "#961d1d",
      "marker": {
        "enabled": false
      },
      "tooltip": {
        "useHTML": true,
        "headerFormat": "<b>Estimates and 95% CrI's :<\/b><br>",
        "pointFormat": "\n                 Mean = 4.94 (4.13,6.01)<br>\n                 S.D = 4.86 (3.95,6.07)<br>\n                 gamma shape = 1.04 (0.83,1.3)<br>\n                 gamma scale = 4.8 (3.58,6.38)<br>"
      },
      "showInLegend": true,
      "enableMouseTracking": true
    },
    {
      "data": [
        [0.01, 0.0534, 0.4415],
        [0.1105, 0.1006, 0.2979],
        [0.2109, 0.116, 0.2675],
        [0.3114, 0.1246, 0.2472],
        [0.4118, 0.1306, 0.234],
        [0.5123, 0.1342, 0.2234],
        [0.6127, 0.1363, 0.2138],
        [0.7132, 0.1375, 0.2052],
        [0.8136, 0.1378, 0.1994],
        [0.9141, 0.1376, 0.1936],
        [1.0145, 0.1373, 0.1892],
        [1.115, 0.1362, 0.1837],
        [1.2154, 0.1349, 0.1794],
        [1.3159, 0.1334, 0.1755],
        [1.4163, 0.1317, 0.1722],
        [1.5168, 0.1293, 0.1688],
        [1.6172, 0.1269, 0.1655],
        [1.7177, 0.1246, 0.1622],
        [1.8181, 0.1222, 0.1593],
        [1.9186, 0.1199, 0.1562],
        [2.019, 0.1178, 0.1531],
        [2.1195, 0.116, 0.15],
        [2.2199, 0.1142, 0.1473],
        [2.3204, 0.1124, 0.1449],
        [2.4209, 0.1099, 0.1418],
        [2.5213, 0.1079, 0.1397],
        [2.6218, 0.1057, 0.1373],
        [2.7222, 0.1037, 0.1344],
        [2.8227, 0.1016, 0.1315],
        [2.9231, 0.0996, 0.1286],
        [3.0236, 0.0976, 0.1263],
        [3.124, 0.0956, 0.1238],
        [3.2245, 0.0937, 0.1212],
        [3.3249, 0.0919, 0.1186],
        [3.4254, 0.0902, 0.1161],
        [3.5258, 0.0883, 0.114],
        [3.6263, 0.0864, 0.1118],
        [3.7267, 0.0848, 0.1095],
        [3.8272, 0.0831, 0.1075],
        [3.9276, 0.0816, 0.1054],
        [4.0281, 0.0798, 0.1034],
        [4.1285, 0.0783, 0.1014],
        [4.229, 0.0768, 0.0992],
        [4.3294, 0.0754, 0.0972],
        [4.4299, 0.0738, 0.0951],
        [4.5304, 0.0723, 0.0931],
        [4.6308, 0.0709, 0.0914],
        [4.7313, 0.0694, 0.0896],
        [4.8317, 0.0681, 0.0879],
        [4.9322, 0.0668, 0.0861],
        [5.0326, 0.0654, 0.0842],
        [5.1331, 0.064, 0.0825],
        [5.2335, 0.0627, 0.0806],
        [5.334, 0.0615, 0.0789],
        [5.4344, 0.0601, 0.0773],
        [5.5349, 0.0588, 0.0756],
        [5.6353, 0.0577, 0.074],
        [5.7358, 0.0564, 0.0726],
        [5.8362, 0.0552, 0.0712],
        [5.9367, 0.0541, 0.0699],
        [6.0371, 0.0529, 0.0685],
        [6.1376, 0.0518, 0.0672],
        [6.238, 0.0506, 0.0658],
        [6.3385, 0.0496, 0.0645],
        [6.4389, 0.0484, 0.0632],
        [6.5394, 0.0474, 0.0618],
        [6.6398, 0.0462, 0.0605],
        [6.7403, 0.0453, 0.0593],
        [6.8408, 0.0443, 0.0582],
        [6.9412, 0.0434, 0.057],
        [7.0417, 0.0423, 0.0559],
        [7.1421, 0.0414, 0.0549],
        [7.2426, 0.0404, 0.0539],
        [7.343, 0.0395, 0.0529],
        [7.4435, 0.0386, 0.0518],
        [7.5439, 0.0378, 0.0508],
        [7.6444, 0.0369, 0.0498],
        [7.7448, 0.0361, 0.049],
        [7.8453, 0.0353, 0.048],
        [7.9457, 0.0346, 0.0471],
        [8.0462, 0.0338, 0.0462],
        [8.1466, 0.033, 0.0453],
        [8.2471, 0.0323, 0.0444],
        [8.3475, 0.0316, 0.0436],
        [8.448, 0.0309, 0.0428],
        [8.5484, 0.0301, 0.042],
        [8.6489, 0.0295, 0.0412],
        [8.7493, 0.0288, 0.0404],
        [8.8498, 0.0281, 0.0397],
        [8.9503, 0.0273, 0.0389],
        [9.0507, 0.0267, 0.0382],
        [9.1512, 0.0261, 0.0374],
        [9.2516, 0.0255, 0.0367],
        [9.3521, 0.0249, 0.036],
        [9.4525, 0.0243, 0.0354],
        [9.553, 0.0237, 0.0347],
        [9.6534, 0.0231, 0.0341],
        [9.7539, 0.0226, 0.0335],
        [9.8543, 0.0221, 0.0329],
        [9.9548, 0.0216, 0.0323],
        [10.0552, 0.0211, 0.0317],
        [10.1557, 0.0206, 0.0312],
        [10.2561, 0.0201, 0.0306],
        [10.3566, 0.0196, 0.0301],
        [10.457, 0.0192, 0.0296],
        [10.5575, 0.0188, 0.0291],
        [10.6579, 0.0183, 0.0285],
        [10.7584, 0.0179, 0.028],
        [10.8588, 0.0175, 0.0274],
        [10.9593, 0.017, 0.027],
        [11.0597, 0.0166, 0.0265],
        [11.1602, 0.0161, 0.026],
        [11.2607, 0.0157, 0.0256],
        [11.3611, 0.0154, 0.0251],
        [11.4616, 0.015, 0.0246],
        [11.562, 0.0147, 0.0242],
        [11.6625, 0.0143, 0.0237],
        [11.7629, 0.014, 0.0233],
        [11.8634, 0.0136, 0.0229],
        [11.9638, 0.0133, 0.0225],
        [12.0643, 0.013, 0.0221],
        [12.1647, 0.0126, 0.0217],
        [12.2652, 0.0123, 0.0213],
        [12.3656, 0.012, 0.021],
        [12.4661, 0.0117, 0.0206],
        [12.5665, 0.0114, 0.0203],
        [12.667, 0.0111, 0.02],
        [12.7674, 0.0109, 0.0196],
        [12.8679, 0.0106, 0.0193],
        [12.9683, 0.0103, 0.019],
        [13.0688, 0.01, 0.0187],
        [13.1692, 0.0098, 0.0184],
        [13.2697, 0.0096, 0.0181],
        [13.3702, 0.0093, 0.0178],
        [13.4706, 0.0091, 0.0175],
        [13.5711, 0.0089, 0.0172],
        [13.6715, 0.0086, 0.0169],
        [13.772, 0.0084, 0.0167],
        [13.8724, 0.0082, 0.0164],
        [13.9729, 0.008, 0.0162],
        [14.0733, 0.0077, 0.0159],
        [14.1738, 0.0075, 0.0156],
        [14.2742, 0.0074, 0.0154],
        [14.3747, 0.0072, 0.0152],
        [14.4751, 0.007, 0.0149],
        [14.5756, 0.0069, 0.0147],
        [14.676, 0.0067, 0.0144],
        [14.7765, 0.0065, 0.0142],
        [14.8769, 0.0064, 0.014],
        [14.9774, 0.0062, 0.0137],
        [15.0778, 0.006, 0.0135],
        [15.1783, 0.0059, 0.0133],
        [15.2787, 0.0057, 0.0131],
        [15.3792, 0.0056, 0.0129],
        [15.4796, 0.0054, 0.0126],
        [15.5801, 0.0053, 0.0124],
        [15.6806, 0.0052, 0.0122],
        [15.781, 0.005, 0.012],
        [15.8815, 0.0049, 0.0118],
        [15.9819, 0.0048, 0.0116],
        [16.0824, 0.0046, 0.0114],
        [16.1828, 0.0045, 0.0112],
        [16.2833, 0.0044, 0.0111],
        [16.3837, 0.0043, 0.0109],
        [16.4842, 0.0041, 0.0107],
        [16.5846, 0.004, 0.0105],
        [16.6851, 0.0039, 0.0103],
        [16.7855, 0.0038, 0.0102],
        [16.886, 0.0037, 0.01],
        [16.9864, 0.0036, 0.0098],
        [17.0869, 0.0035, 0.0096],
        [17.1873, 0.0035, 0.0095],
        [17.2878, 0.0034, 0.0093],
        [17.3882, 0.0033, 0.0091],
        [17.4887, 0.0032, 0.009],
        [17.5891, 0.0031, 0.0088],
        [17.6896, 0.003, 0.0087],
        [17.7901, 0.0029, 0.0086],
        [17.8905, 0.0029, 0.0084],
        [17.991, 0.0028, 0.0083],
        [18.0914, 0.0027, 0.0081],
        [18.1919, 0.0026, 0.008],
        [18.2923, 0.0026, 0.0079],
        [18.3928, 0.0025, 0.0078],
        [18.4932, 0.0024, 0.0076],
        [18.5937, 0.0024, 0.0075],
        [18.6941, 0.0023, 0.0074],
        [18.7946, 0.0023, 0.0073],
        [18.895, 0.0022, 0.0071],
        [18.9955, 0.0022, 0.007],
        [19.0959, 0.0021, 0.0069],
        [19.1964, 0.002, 0.0068],
        [19.2968, 0.002, 0.0067],
        [19.3973, 0.0019, 0.0066],
        [19.4977, 0.0019, 0.0065],
        [19.5982, 0.0018, 0.0064],
        [19.6986, 0.0018, 0.0063],
        [19.7991, 0.0017, 0.0062],
        [19.8995, 0.0017, 0.0061],
        [20, 0.0016, 0.006]
      ],
      "keys": ["x", "low", "high"],
      "type": "arearange",
      "linkedTo": "f0",
      "color": "#961d1d",
      "fillOpacity": 0.3,
      "lineWidth": 0,
      "zIndex": 0,
      "yAxis": 0,
      "name": "Fitted distribution",
      "marker": {
        "enabled": false
      },
      "showInLegend": false,
      "enableMouseTracking": false
    },
    {
      "data": [
        {
          "x": 1,
          "y": 32,
          "labels": "<b>Case ID:<\/b>#170<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 13,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#171<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 4,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#172<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 2,
          "y": 15,
          "labels": "<b>Case ID:<\/b>#173<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 13,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#174<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 10,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#175<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>5<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 2,
          "y": 16,
          "labels": "<b>Case ID:<\/b>#177<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 10,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#178<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 5,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#180<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Czech Republic<br><hr>"
        },
        {
          "x": 19,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#181<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US,Japan<br><hr>"
        },
        {
          "x": 1,
          "y": 33,
          "labels": "<b>Case ID:<\/b>#182<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 2,
          "y": 17,
          "labels": "<b>Case ID:<\/b>#183<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>France,Brazil,Chile,Peru<br><hr>"
        },
        {
          "x": 1,
          "y": 34,
          "labels": "<b>Case ID:<\/b>#184<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 7,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#185<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 3,
          "y": 17,
          "labels": "<b>Case ID:<\/b>#186<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b><br><hr>"
        },
        {
          "x": 7,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#188<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 2,
          "y": 18,
          "labels": "<b>Case ID:<\/b>#190<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 10,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#191<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 28,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#192<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#193<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 5,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#194<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 35,
          "labels": "<b>Case ID:<\/b>#195<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 36,
          "labels": "<b>Case ID:<\/b>#196<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Thailand, Germany, Bulgaria,US<br><hr>"
        },
        {
          "x": 2,
          "y": 19,
          "labels": "<b>Case ID:<\/b>#197<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 37,
          "labels": "<b>Case ID:<\/b>#198<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Ireland<br><hr>"
        },
        {
          "x": 1,
          "y": 38,
          "labels": "<b>Case ID:<\/b>#199<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Italy, Germany, Belgium, UK<br><hr>"
        },
        {
          "x": 1,
          "y": 39,
          "labels": "<b>Case ID:<\/b>#200<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 3,
          "y": 18,
          "labels": "<b>Case ID:<\/b>#201<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Ireland<br><hr>"
        },
        {
          "x": 2,
          "y": 20,
          "labels": "<b>Case ID:<\/b>#202<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#203<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#204<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 1,
          "y": 40,
          "labels": "<b>Case ID:<\/b>#205<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>2.5<br><b>Travelled to:<\/b>Turkey<br><hr>"
        },
        {
          "x": 6,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#206<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 4,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#207<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 11,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#208<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 4,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#212<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 2,
          "y": 21,
          "labels": "<b>Case ID:<\/b>#213<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 10,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#214<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 2,
          "y": 22,
          "labels": "<b>Case ID:<\/b>#217<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 4,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#218<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 41,
          "labels": "<b>Case ID:<\/b>#219<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 3,
          "y": 19,
          "labels": "<b>Case ID:<\/b>#220<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 5,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#221<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#222<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#223<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 4,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#224<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 8,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#225<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 1,
          "y": 42,
          "labels": "<b>Case ID:<\/b>#226<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 8,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#227<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 1,
          "y": 43,
          "labels": "<b>Case ID:<\/b>#228<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 2,
          "y": 23,
          "labels": "<b>Case ID:<\/b>#229<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 2,
          "y": 24,
          "labels": "<b>Case ID:<\/b>#230<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 2,
          "y": 25,
          "labels": "<b>Case ID:<\/b>#232<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US, Indonesia<br><hr>"
        },
        {
          "x": 6,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#234<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 1,
          "y": 44,
          "labels": "<b>Case ID:<\/b>#236<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Czech Republic<br><hr>"
        },
        {
          "x": 2,
          "y": 26,
          "labels": "<b>Case ID:<\/b>#237<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>US, San Diego, Chile,<c2><a0> Antarctica,<c2><a0> Argentina,<c2><a0> Kada, Thailand<br><hr>"
        },
        {
          "x": 12,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#238<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 12,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#239<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 10,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#240<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 1,
          "y": 45,
          "labels": "<b>Case ID:<\/b>#241<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 13,
          "labels": "<b>Case ID:<\/b>#242<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 8,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#243<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#244<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>New Zealand<br><hr>"
        },
        {
          "x": 6,
          "y": 14,
          "labels": "<b>Case ID:<\/b>#245<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 1,
          "y": 46,
          "labels": "<b>Case ID:<\/b>#247<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#228<br><b>Infected at/in:<\/b>NA<br><hr>"
        },
        {
          "x": 8,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#249<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Malaysia, Philippine<br><hr>"
        },
        {
          "x": 2,
          "y": 27,
          "labels": "<b>Case ID:<\/b>#250<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Monaco<br><hr>"
        },
        {
          "x": 1,
          "y": 47,
          "labels": "<b>Case ID:<\/b>#251<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Australia, Mexico<br><hr>"
        },
        {
          "x": 3,
          "y": 20,
          "labels": "<b>Case ID:<\/b>#252<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        }
      ],
      "type": "scatter",
      "id": "dat0",
      "name": "Case ",
      "yAxis": 1,
      "zIndex": 0,
      "marker": {
        "radius": 5.18,
        "symbol": "circle"
      },
      "color": "#FFA500",
      "tooltip": {
        "headerFormat": "",
        "pointFormat": "{point.labels}"
      },
      "showInLegend": true
    },
    {
      "data": [
        [0.01, 0.1002],
        [0.1105, 0.14],
        [0.2109, 0.1512],
        [0.3114, 0.1565],
        [0.4118, 0.1592],
        [0.5123, 0.1608],
        [0.6127, 0.1615],
        [0.7132, 0.1614],
        [0.8136, 0.1605],
        [0.9141, 0.1592],
        [1.0145, 0.158],
        [1.115, 0.1565],
        [1.2154, 0.1547],
        [1.3159, 0.153],
        [1.4163, 0.1511],
        [1.5168, 0.149],
        [1.6172, 0.1468],
        [1.7177, 0.1447],
        [1.8181, 0.1425],
        [1.9186, 0.1403],
        [2.019, 0.1381],
        [2.1195, 0.136],
        [2.2199, 0.1338],
        [2.3204, 0.1316],
        [2.4209, 0.1293],
        [2.5213, 0.1271],
        [2.6218, 0.1249],
        [2.7222, 0.1227],
        [2.8227, 0.1205],
        [2.9231, 0.1184],
        [3.0236, 0.1163],
        [3.124, 0.1143],
        [3.2245, 0.1122],
        [3.3249, 0.11],
        [3.4254, 0.108],
        [3.5258, 0.1059],
        [3.6263, 0.104],
        [3.7267, 0.102],
        [3.8272, 0.1],
        [3.9276, 0.0981],
        [4.0281, 0.0962],
        [4.1285, 0.0943],
        [4.229, 0.0924],
        [4.3294, 0.0906],
        [4.4299, 0.0888],
        [4.5304, 0.0871],
        [4.6308, 0.0854],
        [4.7313, 0.0836],
        [4.8317, 0.082],
        [4.9322, 0.0804],
        [5.0326, 0.0787],
        [5.1331, 0.0772],
        [5.2335, 0.0756],
        [5.334, 0.0741],
        [5.4344, 0.0726],
        [5.5349, 0.0711],
        [5.6353, 0.0697],
        [5.7358, 0.0683],
        [5.8362, 0.0669],
        [5.9367, 0.0656],
        [6.0371, 0.0642],
        [6.1376, 0.0629],
        [6.238, 0.0616],
        [6.3385, 0.0603],
        [6.4389, 0.059],
        [6.5394, 0.0577],
        [6.6398, 0.0565],
        [6.7403, 0.0554],
        [6.8408, 0.0542],
        [6.9412, 0.0531],
        [7.0417, 0.0519],
        [7.1421, 0.0508],
        [7.2426, 0.0498],
        [7.343, 0.0487],
        [7.4435, 0.0477],
        [7.5439, 0.0467],
        [7.6444, 0.0457],
        [7.7448, 0.0447],
        [7.8453, 0.0438],
        [7.9457, 0.0429],
        [8.0462, 0.042],
        [8.1466, 0.0411],
        [8.2471, 0.0403],
        [8.3475, 0.0394],
        [8.448, 0.0386],
        [8.5484, 0.0378],
        [8.6489, 0.037],
        [8.7493, 0.0362],
        [8.8498, 0.0354],
        [8.9503, 0.0347],
        [9.0507, 0.0339],
        [9.1512, 0.0332],
        [9.2516, 0.0325],
        [9.3521, 0.0318],
        [9.4525, 0.0311],
        [9.553, 0.0305],
        [9.6534, 0.0298],
        [9.7539, 0.0292],
        [9.8543, 0.0286],
        [9.9548, 0.0279],
        [10.0552, 0.0273],
        [10.1557, 0.0268],
        [10.2561, 0.0262],
        [10.3566, 0.0256],
        [10.457, 0.025],
        [10.5575, 0.0245],
        [10.6579, 0.024],
        [10.7584, 0.0234],
        [10.8588, 0.0229],
        [10.9593, 0.0225],
        [11.0597, 0.022],
        [11.1602, 0.0215],
        [11.2607, 0.021],
        [11.3611, 0.0206],
        [11.4616, 0.0201],
        [11.562, 0.0197],
        [11.6625, 0.0193],
        [11.7629, 0.0189],
        [11.8634, 0.0185],
        [11.9638, 0.0181],
        [12.0643, 0.0177],
        [12.1647, 0.0173],
        [12.2652, 0.0169],
        [12.3656, 0.0166],
        [12.4661, 0.0162],
        [12.5665, 0.0158],
        [12.667, 0.0155],
        [12.7674, 0.0152],
        [12.8679, 0.0148],
        [12.9683, 0.0145],
        [13.0688, 0.0142],
        [13.1692, 0.0139],
        [13.2697, 0.0136],
        [13.3702, 0.0133],
        [13.4706, 0.013],
        [13.5711, 0.0127],
        [13.6715, 0.0124],
        [13.772, 0.0122],
        [13.8724, 0.0119],
        [13.9729, 0.0116],
        [14.0733, 0.0114],
        [14.1738, 0.0111],
        [14.2742, 0.0109],
        [14.3747, 0.0107],
        [14.4751, 0.0104],
        [14.5756, 0.0102],
        [14.676, 0.01],
        [14.7765, 0.0097],
        [14.8769, 0.0095],
        [14.9774, 0.0093],
        [15.0778, 0.0091],
        [15.1783, 0.0089],
        [15.2787, 0.0087],
        [15.3792, 0.0086],
        [15.4796, 0.0084],
        [15.5801, 0.0082],
        [15.6806, 0.008],
        [15.781, 0.0078],
        [15.8815, 0.0077],
        [15.9819, 0.0075],
        [16.0824, 0.0073],
        [16.1828, 0.0072],
        [16.2833, 0.007],
        [16.3837, 0.0068],
        [16.4842, 0.0067],
        [16.5846, 0.0065],
        [16.6851, 0.0064],
        [16.7855, 0.0063],
        [16.886, 0.0061],
        [16.9864, 0.006],
        [17.0869, 0.0059],
        [17.1873, 0.0057],
        [17.2878, 0.0056],
        [17.3882, 0.0055],
        [17.4887, 0.0054],
        [17.5891, 0.0052],
        [17.6896, 0.0051],
        [17.7901, 0.005],
        [17.8905, 0.0049],
        [17.991, 0.0048],
        [18.0914, 0.0047],
        [18.1919, 0.0046],
        [18.2923, 0.0045],
        [18.3928, 0.0044],
        [18.4932, 0.0043],
        [18.5937, 0.0042],
        [18.6941, 0.0041],
        [18.7946, 0.004],
        [18.895, 0.0039],
        [18.9955, 0.0038],
        [19.0959, 0.0037],
        [19.1964, 0.0037],
        [19.2968, 0.0036],
        [19.3973, 0.0035],
        [19.4977, 0.0034],
        [19.5982, 0.0033],
        [19.6986, 0.0033],
        [19.7991, 0.0032],
        [19.8995, 0.0031],
        [20, 0.0031]
      ],
      "id": "f1",
      "type": "line",
      "name": "Fitted distribution ",
      "yAxis": 0,
      "zIndex": 2,
      "keys": ["x", "y"],
      "color": "#FFA500",
      "marker": {
        "enabled": false
      },
      "tooltip": {
        "useHTML": true,
        "headerFormat": "<b>Estimates and 95% CrI's :<\/b><br>",
        "pointFormat": "\n                 Mean = 4.98 (4.37,5.68)<br>\n                 S.D = 4.66 (3.96,5.46)<br>\n                 gamma shape = 1.15 (0.95,1.38)<br>\n                 gamma scale = 4.37 (3.5,5.43)<br>"
      },
      "showInLegend": true,
      "enableMouseTracking": true
    },
    {
      "data": [
        [0.01, 0.0326, 0.2561],
        [0.1105, 0.0788, 0.2238],
        [0.2109, 0.0976, 0.2136],
        [0.3114, 0.1102, 0.2058],
        [0.4118, 0.119, 0.2004],
        [0.5123, 0.1251, 0.1953],
        [0.6127, 0.1293, 0.1917],
        [0.7132, 0.1328, 0.1885],
        [0.8136, 0.1348, 0.1847],
        [0.9141, 0.1362, 0.181],
        [1.0145, 0.1364, 0.1777],
        [1.115, 0.1368, 0.1753],
        [1.2154, 0.1365, 0.1726],
        [1.3159, 0.1358, 0.1697],
        [1.4163, 0.1349, 0.1671],
        [1.5168, 0.1337, 0.1649],
        [1.6172, 0.1324, 0.163],
        [1.7177, 0.1306, 0.1605],
        [1.8181, 0.1288, 0.1581],
        [1.9186, 0.127, 0.1557],
        [2.019, 0.1252, 0.153],
        [2.1195, 0.1234, 0.1505],
        [2.2199, 0.1215, 0.1479],
        [2.3204, 0.1195, 0.1456],
        [2.4209, 0.1175, 0.143],
        [2.5213, 0.1155, 0.1401],
        [2.6218, 0.1133, 0.1376],
        [2.7222, 0.1112, 0.1348],
        [2.8227, 0.1092, 0.1324],
        [2.9231, 0.1071, 0.13],
        [3.0236, 0.1051, 0.1279],
        [3.124, 0.1033, 0.1257],
        [3.2245, 0.1013, 0.1234],
        [3.3249, 0.0992, 0.1212],
        [3.4254, 0.0973, 0.119],
        [3.5258, 0.0954, 0.117],
        [3.6263, 0.0936, 0.1149],
        [3.7267, 0.0919, 0.1129],
        [3.8272, 0.0902, 0.1109],
        [3.9276, 0.0887, 0.1088],
        [4.0281, 0.0869, 0.1068],
        [4.1285, 0.0853, 0.1048],
        [4.229, 0.0836, 0.1028],
        [4.3294, 0.0819, 0.1009],
        [4.4299, 0.0802, 0.0989],
        [4.5304, 0.0785, 0.097],
        [4.6308, 0.0769, 0.095],
        [4.7313, 0.0753, 0.0932],
        [4.8317, 0.0738, 0.0913],
        [4.9322, 0.0723, 0.0895],
        [5.0326, 0.0708, 0.0877],
        [5.1331, 0.0694, 0.0859],
        [5.2335, 0.068, 0.0841],
        [5.334, 0.0666, 0.0825],
        [5.4344, 0.0653, 0.0808],
        [5.5349, 0.064, 0.0791],
        [5.6353, 0.0627, 0.0776],
        [5.7358, 0.0614, 0.076],
        [5.8362, 0.0602, 0.0745],
        [5.9367, 0.0589, 0.073],
        [6.0371, 0.0577, 0.0714],
        [6.1376, 0.0566, 0.0699],
        [6.238, 0.0554, 0.0685],
        [6.3385, 0.0542, 0.0671],
        [6.4389, 0.0531, 0.0657],
        [6.5394, 0.0519, 0.0642],
        [6.6398, 0.0509, 0.0628],
        [6.7403, 0.0498, 0.0615],
        [6.8408, 0.0488, 0.0603],
        [6.9412, 0.0478, 0.059],
        [7.0417, 0.0465, 0.0578],
        [7.1421, 0.0454, 0.0566],
        [7.2426, 0.0444, 0.0554],
        [7.343, 0.0434, 0.0543],
        [7.4435, 0.0424, 0.0532],
        [7.5439, 0.0415, 0.0521],
        [7.6444, 0.0406, 0.0511],
        [7.7448, 0.0398, 0.05],
        [7.8453, 0.0389, 0.0489],
        [7.9457, 0.038, 0.048],
        [8.0462, 0.0372, 0.047],
        [8.1466, 0.0363, 0.046],
        [8.2471, 0.0355, 0.0451],
        [8.3475, 0.0347, 0.0442],
        [8.448, 0.034, 0.0434],
        [8.5484, 0.0332, 0.0425],
        [8.6489, 0.0324, 0.0417],
        [8.7493, 0.0316, 0.0409],
        [8.8498, 0.0309, 0.0401],
        [8.9503, 0.0301, 0.0394],
        [9.0507, 0.0294, 0.0385],
        [9.1512, 0.0288, 0.0378],
        [9.2516, 0.0282, 0.0371],
        [9.3521, 0.0275, 0.0363],
        [9.4525, 0.0268, 0.0356],
        [9.553, 0.0261, 0.0349],
        [9.6534, 0.0255, 0.0342],
        [9.7539, 0.0249, 0.0336],
        [9.8543, 0.0243, 0.0329],
        [9.9548, 0.0237, 0.0322],
        [10.0552, 0.0231, 0.0316],
        [10.1557, 0.0225, 0.031],
        [10.2561, 0.0219, 0.0304],
        [10.3566, 0.0214, 0.0298],
        [10.457, 0.0209, 0.0293],
        [10.5575, 0.0203, 0.0287],
        [10.6579, 0.0198, 0.0282],
        [10.7584, 0.0193, 0.0276],
        [10.8588, 0.0188, 0.0271],
        [10.9593, 0.0184, 0.0266],
        [11.0597, 0.0179, 0.0261],
        [11.1602, 0.0174, 0.0256],
        [11.2607, 0.017, 0.0251],
        [11.3611, 0.0165, 0.0246],
        [11.4616, 0.0162, 0.0241],
        [11.562, 0.0157, 0.0236],
        [11.6625, 0.0153, 0.0232],
        [11.7629, 0.0149, 0.0228],
        [11.8634, 0.0145, 0.0223],
        [11.9638, 0.0141, 0.0219],
        [12.0643, 0.0138, 0.0215],
        [12.1647, 0.0134, 0.0211],
        [12.2652, 0.0131, 0.0207],
        [12.3656, 0.0127, 0.0203],
        [12.4661, 0.0124, 0.0199],
        [12.5665, 0.0121, 0.0196],
        [12.667, 0.0118, 0.0192],
        [12.7674, 0.0115, 0.0188],
        [12.8679, 0.0112, 0.0184],
        [12.9683, 0.0109, 0.0181],
        [13.0688, 0.0106, 0.0178],
        [13.1692, 0.0103, 0.0174],
        [13.2697, 0.0101, 0.0171],
        [13.3702, 0.0098, 0.0168],
        [13.4706, 0.0096, 0.0165],
        [13.5711, 0.0093, 0.0162],
        [13.6715, 0.0091, 0.0159],
        [13.772, 0.0089, 0.0156],
        [13.8724, 0.0086, 0.0153],
        [13.9729, 0.0084, 0.015],
        [14.0733, 0.0082, 0.0147],
        [14.1738, 0.008, 0.0144],
        [14.2742, 0.0078, 0.0142],
        [14.3747, 0.0076, 0.0139],
        [14.4751, 0.0074, 0.0137],
        [14.5756, 0.0072, 0.0134],
        [14.676, 0.007, 0.0131],
        [14.7765, 0.0068, 0.0129],
        [14.8769, 0.0066, 0.0126],
        [14.9774, 0.0065, 0.0124],
        [15.0778, 0.0063, 0.0121],
        [15.1783, 0.0061, 0.0119],
        [15.2787, 0.006, 0.0117],
        [15.3792, 0.0058, 0.0115],
        [15.4796, 0.0057, 0.0113],
        [15.5801, 0.0055, 0.011],
        [15.6806, 0.0054, 0.0108],
        [15.781, 0.0052, 0.0106],
        [15.8815, 0.0051, 0.0104],
        [15.9819, 0.0049, 0.0102],
        [16.0824, 0.0048, 0.01],
        [16.1828, 0.0047, 0.0099],
        [16.2833, 0.0046, 0.0097],
        [16.3837, 0.0044, 0.0095],
        [16.4842, 0.0043, 0.0093],
        [16.5846, 0.0042, 0.0092],
        [16.6851, 0.0041, 0.009],
        [16.7855, 0.004, 0.0088],
        [16.886, 0.0039, 0.0087],
        [16.9864, 0.0038, 0.0085],
        [17.0869, 0.0037, 0.0084],
        [17.1873, 0.0036, 0.0082],
        [17.2878, 0.0035, 0.0081],
        [17.3882, 0.0034, 0.0079],
        [17.4887, 0.0033, 0.0078],
        [17.5891, 0.0032, 0.0076],
        [17.6896, 0.0031, 0.0075],
        [17.7901, 0.003, 0.0073],
        [17.8905, 0.003, 0.0072],
        [17.991, 0.0029, 0.0071],
        [18.0914, 0.0028, 0.0069],
        [18.1919, 0.0027, 0.0068],
        [18.2923, 0.0027, 0.0067],
        [18.3928, 0.0026, 0.0065],
        [18.4932, 0.0025, 0.0064],
        [18.5937, 0.0025, 0.0063],
        [18.6941, 0.0024, 0.0062],
        [18.7946, 0.0023, 0.0061],
        [18.895, 0.0023, 0.0059],
        [18.9955, 0.0022, 0.0058],
        [19.0959, 0.0021, 0.0057],
        [19.1964, 0.0021, 0.0056],
        [19.2968, 0.002, 0.0055],
        [19.3973, 0.002, 0.0054],
        [19.4977, 0.0019, 0.0053],
        [19.5982, 0.0019, 0.0052],
        [19.6986, 0.0018, 0.0051],
        [19.7991, 0.0018, 0.005],
        [19.8995, 0.0017, 0.005],
        [20, 0.0017, 0.0049]
      ],
      "keys": ["x", "low", "high"],
      "type": "arearange",
      "linkedTo": "f1",
      "color": "#FFA500",
      "fillOpacity": 0.3,
      "lineWidth": 0,
      "zIndex": 2,
      "yAxis": 0,
      "name": "Fitted distribution",
      "marker": {
        "enabled": false
      },
      "showInLegend": false,
      "enableMouseTracking": false
    }
  ],
  "legend": {
    "enabled": true,
    "floating": true,
    "backgroundColor": "white",
    "align": "right",
    "verticalAlign": "top",
    "layout": "vertical",
    "x": 0,
    "y": 30
  },
  "chart": {
    "style": {
      "fontSize": "1em"
    },
    "animation": true
  },
  "caption": {
    "text": "<i>Last updated 2020-03-26<\/i>",
    "useHTML": true,
    "align": "right",
    "verticalAlign": "bottom"
  }
}
);
});
