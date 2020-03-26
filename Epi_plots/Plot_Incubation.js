$(function(){
	$('#gINCU').highcharts(
{
  "title": {
    "text": "Incubation Period"
  },
  "yAxis": [
    {
      "id": 0,
      "title": {
        "text": "Density"
      },
      "min": 0,
      "max": 0.2,
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
      "min": 0,
      "max": 110.304,
      "minPadding": 0,
      "floor": 0,
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
      "text": "Days"
    },
    "min": 0,
    "max": 20
  },
  "series": [
    {
      "data": [
        {
          "x": 6.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#01<br><b>Confirm at:<\/b>2020-01-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 6.2,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#02<br><b>Confirm at:<\/b>2020-01-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#03<br><b>Confirm at:<\/b>2020-01-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 7.8,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#04<br><b>Confirm at:<\/b>2020-01-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 7.8,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#05<br><b>Confirm at:<\/b>2020-01-27<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 6.4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#06<br><b>Confirm at:<\/b>2020-01-28<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 6.6,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#07<br><b>Confirm at:<\/b>2020-01-28<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 4.2,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#08<br><b>Confirm at:<\/b>2020-01-28<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>52<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#05<br><b>Infected at/in:<\/b>house<br><hr>"
        },
        {
          "x": 6,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#09<br><b>Confirm at:<\/b>2020-01-30<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#10<br><b>Infected at/in:<\/b>house<br><hr>"
        },
        {
          "x": 11,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#10<br><b>Confirm at:<\/b>2020-01-31<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 6.2,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#12<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 13,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#13<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>China<br><hr>"
        },
        {
          "x": 3,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#14<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Italy,Hong Kong<br><hr>"
        },
        {
          "x": 4.2,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#15<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Italy,Hong Kong<br><hr>"
        },
        {
          "x": 9.2,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#16<br><b>Confirm at:<\/b>2020-02-06<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Macau<br><hr>"
        },
        {
          "x": 3.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#17<br><b>Confirm at:<\/b>2020-02-08<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Italy,Hong Kong<br><hr>"
        },
        {
          "x": 6,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#21<br><b>Confirm at:<\/b>2020-02-18<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>85<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#19<br><b>Infected at/in:<\/b>family<br><hr>"
        },
        {
          "x": 1,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#22<br><b>Confirm at:<\/b>2020-02-18<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#19<br><b>Infected at/in:<\/b>family<br><hr>"
        },
        {
          "x": 7,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#23<br><b>Confirm at:<\/b>2020-02-19<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#19<br><b>Infected at/in:<\/b>family<br><hr>"
        },
        {
          "x": 2.4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#27<br><b>Confirm at:<\/b>2020-02-23<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>85<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#28<br><b>Infected at/in:<\/b>house<br><hr>"
        },
        {
          "x": 6.2,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#28<br><b>Confirm at:<\/b>2020-02-23<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#29<br><b>Infected at/in:<\/b>family<br><hr>"
        },
        {
          "x": 3,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#30<br><b>Confirm at:<\/b>2020-02-24<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#28<br><b>Infected at/in:<\/b>house<br><hr>"
        },
        {
          "x": 9.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#32<br><b>Confirm at:<\/b>2020-02-26<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>NA<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#27<br><b>Infected at/in:<\/b>house<br><hr>"
        },
        {
          "x": 5.4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#33<br><b>Confirm at:<\/b>2020-02-28<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Japan<br><hr>"
        },
        {
          "x": 4.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#35<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>NA<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 4.6,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#36<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>NA<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 4.6,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#37<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>NA<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 4.6,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#38<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>NA<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 6.2,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#39<br><b>Confirm at:<\/b>2020-02-29<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 4.2,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#42<br><b>Confirm at:<\/b>2020-03-03<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34,#36<br><b>Infected at/in:<\/b>hospital<br><hr>"
        },
        {
          "x": 7.4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#43<br><b>Confirm at:<\/b>2020-03-05<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#39<br><b>Infected at/in:<\/b>community<br><hr>"
        },
        {
          "x": 3,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#44<br><b>Confirm at:<\/b>2020-03-05<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Philippine<br><hr>"
        },
        {
          "x": 10.2,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#46<br><b>Confirm at:<\/b>2020-03-10<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#34,#41<br><b>Infected at/in:<\/b>NA<br><hr>"
        },
        {
          "x": 5.4,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#47<br><b>Confirm at:<\/b>2020-03-10<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherland<br><hr>"
        },
        {
          "x": 5.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#48<br><b>Confirm at:<\/b>2020-03-11<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#49<br><b>Confirm at:<\/b>2020-03-12<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Ireland,Belgium,Turkey<br><hr>"
        },
        {
          "x": 5.8,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#50<br><b>Confirm at:<\/b>2020-03-13<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>50<br><b>Travelled to:<\/b><br><hr>"
        },
        {
          "x": 6.2,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#51<br><b>Confirm at:<\/b>2020-03-14<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherland,Austria<br><hr>"
        },
        {
          "x": 7,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#52<br><b>Confirm at:<\/b>2020-03-14<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Switzerland,Turkey,France<br><hr>"
        },
        {
          "x": 7.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#53<br><b>Confirm at:<\/b>2020-03-14<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Germany<br><hr>"
        },
        {
          "x": 6.4,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#54<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Thailand,Japan<br><hr>"
        },
        {
          "x": 5.4,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#55<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 4.6,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#56<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 5.4,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#57<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 6.4,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#58<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 9.4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#59<br><b>Confirm at:<\/b>2020-03-15<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>Greece<br><hr>"
        },
        {
          "x": 6.6,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#60<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Italy,Greece,Germany<br><hr>"
        },
        {
          "x": 5.2,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#61<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Austria,Czech Republic<br><hr>"
        },
        {
          "x": 3.6,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#62<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Philippine<br><hr>"
        },
        {
          "x": 5.6,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#63<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 6.2,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#64<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>20<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 5.6,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#65<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 5.8,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#66<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 5.6,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#67<br><b>Confirm at:<\/b>2020-03-16<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 5.2,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#68<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>NA<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 5.2,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#69<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>NA<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 5.2,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#70<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>NA<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 5.6,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#71<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 5.6,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#72<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>Austria,Czech Republic<br><hr>"
        },
        {
          "x": 5.2,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#73<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>NA<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 7,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#74<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Iceland<br><hr>"
        },
        {
          "x": 5.8,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#75<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Germany<br><hr>"
        },
        {
          "x": 5.8,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#76<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.2,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#77<br><b>Confirm at:<\/b>2020-03-17<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Czech Republic,Dubai,US<br><hr>"
        },
        {
          "x": 5.2,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#78<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Germany<br><hr>"
        },
        {
          "x": 3.6,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#79<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 7,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#80<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 4.6,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#82<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 7,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#84<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 5.4,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#85<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#86<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#87<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK,Italy,France<br><hr>"
        },
        {
          "x": 6.2,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#88<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 6,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#89<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#90<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 5.6,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#91<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France,Spain,UK<br><hr>"
        },
        {
          "x": 3.6,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#93<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Qatar<br><hr>"
        },
        {
          "x": 5.8,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#94<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 3,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#95<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Indonesia<br><hr>"
        },
        {
          "x": 6.2,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#96<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#97<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Switzerland<br><hr>"
        },
        {
          "x": 6,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#98<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.2,
          "y": 13,
          "labels": "<b>Case ID:<\/b>#99<br><b>Confirm at:<\/b>2020-03-18<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Philippine<br><hr>"
        },
        {
          "x": 7.6,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#101<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 7.6,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#102<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5.6,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#103<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#59<br><b>Infected at/in:<\/b>NA<br><hr>"
        },
        {
          "x": 5.8,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#104<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Austria,Czech Republic<br><hr>"
        },
        {
          "x": 6.2,
          "y": 14,
          "labels": "<b>Case ID:<\/b>#105<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.2,
          "y": 15,
          "labels": "<b>Case ID:<\/b>#106<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 6.4,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#107<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.2,
          "y": 16,
          "labels": "<b>Case ID:<\/b>#108<br><b>Confirm at:<\/b>2020-03-19<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Austria,Czech Republic<br><hr>"
        },
        {
          "x": 5.8,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#109<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>85<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 6.2,
          "y": 17,
          "labels": "<b>Case ID:<\/b>#110<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France,UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 18,
          "labels": "<b>Case ID:<\/b>#111<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 5.8,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#112<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 12.8,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#113<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US,Mexico<br><hr>"
        },
        {
          "x": 6.2,
          "y": 19,
          "labels": "<b>Case ID:<\/b>#114<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>Spain,Germany,UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 20,
          "labels": "<b>Case ID:<\/b>#115<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Poland<br><hr>"
        },
        {
          "x": 6,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#116<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 7.2,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#117<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Portugal,Spain<br><hr>"
        },
        {
          "x": 6.2,
          "y": 21,
          "labels": "<b>Case ID:<\/b>#119<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#120<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#121<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 7.6,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#122<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Turkey,Dubai<br><hr>"
        },
        {
          "x": 5.6,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#123<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Singapore,US,Japan<br><hr>"
        },
        {
          "x": 5.6,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#125<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Netherland,Austria<br><hr>"
        },
        {
          "x": 6,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#126<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Canada<br><hr>"
        },
        {
          "x": 6,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#127<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 5,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#128<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France,luxembourg,Belgium,Germany<br><hr>"
        },
        {
          "x": 3.6,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#129<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.8,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#130<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Locally acquired<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b><br><hr><b>Infected by:<\/b>#59<br><b>Infected at/in:<\/b>NA<br><hr>"
        },
        {
          "x": 7.8,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#131<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Portugal,Spain<br><hr>"
        },
        {
          "x": 6,
          "y": 13,
          "labels": "<b>Case ID:<\/b>#132<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Philippine<br><hr>"
        },
        {
          "x": 7,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#133<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 7.6,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#135<br><b>Confirm at:<\/b>2020-03-20<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5.6,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#136<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Turkey<br><hr>"
        },
        {
          "x": 5.4,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#137<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.4,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#138<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.6,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#139<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 8.4,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#140<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 6.2,
          "y": 22,
          "labels": "<b>Case ID:<\/b>#141<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 14,
          "labels": "<b>Case ID:<\/b>#142<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 15,
          "labels": "<b>Case ID:<\/b>#143<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Czech Republic,US<br><hr>"
        },
        {
          "x": 4.6,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#144<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Czech Republic,US<br><hr>"
        },
        {
          "x": 5.8,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#145<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5.2,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#146<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>South Africa<br><hr>"
        },
        {
          "x": 2.6,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#147<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Indonesia<br><hr>"
        },
        {
          "x": 6,
          "y": 16,
          "labels": "<b>Case ID:<\/b>#148<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 4.2,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#149<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 7.6,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#150<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 5.8,
          "y": 10,
          "labels": "<b>Case ID:<\/b>#151<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherland<br><hr>"
        },
        {
          "x": 6,
          "y": 17,
          "labels": "<b>Case ID:<\/b>#152<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 7.2,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#153<br><b>Confirm at:<\/b>2020-03-21<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 5.8,
          "y": 11,
          "labels": "<b>Case ID:<\/b>#154<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 7.8,
          "y": 4,
          "labels": "<b>Case ID:<\/b>#155<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>Denmark<br><hr>"
        },
        {
          "x": 7,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#157<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>New Zealand<br><hr>"
        },
        {
          "x": 6,
          "y": 18,
          "labels": "<b>Case ID:<\/b>#158<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5.6,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#159<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.8,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#160<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 10,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#161<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 10,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#162<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 6.2,
          "y": 23,
          "labels": "<b>Case ID:<\/b>#163<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.2,
          "y": 24,
          "labels": "<b>Case ID:<\/b>#164<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Philippines<br><hr>"
        },
        {
          "x": 6.4,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#165<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Italy<br><hr>"
        },
        {
          "x": 6.2,
          "y": 25,
          "labels": "<b>Case ID:<\/b>#166<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Germany<br><hr>"
        },
        {
          "x": 6.2,
          "y": 26,
          "labels": "<b>Case ID:<\/b>#167<br><b>Confirm at:<\/b>2020-03-22<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>UK<br><hr>"
        }
      ],
      "type": "scatter",
      "id": "dat0",
      "name": "Case (3 days ago)",
      "yAxis": 1,
      "zIndex": 0,
      "marker": {
        "radius": 3.12,
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
        [0.01, 2.0856e-009],
        [0.1105, 9.3037e-006],
        [0.2109, 0.0001],
        [0.3114, 0.0003],
        [0.4118, 0.0008],
        [0.5123, 0.0015],
        [0.6127, 0.0026],
        [0.7132, 0.0041],
        [0.8136, 0.0061],
        [0.9141, 0.0085],
        [1.0145, 0.0114],
        [1.115, 0.0148],
        [1.2154, 0.0187],
        [1.3159, 0.0228],
        [1.4163, 0.0271],
        [1.5168, 0.0318],
        [1.6172, 0.037],
        [1.7177, 0.0426],
        [1.8181, 0.0483],
        [1.9186, 0.0545],
        [2.019, 0.0605],
        [2.1195, 0.0661],
        [2.2199, 0.072],
        [2.3204, 0.0777],
        [2.4209, 0.0836],
        [2.5213, 0.0899],
        [2.6218, 0.0957],
        [2.7222, 0.1014],
        [2.8227, 0.1069],
        [2.9231, 0.1122],
        [3.0236, 0.1167],
        [3.124, 0.1208],
        [3.2245, 0.1248],
        [3.3249, 0.1283],
        [3.4254, 0.1317],
        [3.5258, 0.135],
        [3.6263, 0.1381],
        [3.7267, 0.141],
        [3.8272, 0.1436],
        [3.9276, 0.146],
        [4.0281, 0.1481],
        [4.1285, 0.1498],
        [4.229, 0.1511],
        [4.3294, 0.1521],
        [4.4299, 0.153],
        [4.5304, 0.1534],
        [4.6308, 0.1539],
        [4.7313, 0.154],
        [4.8317, 0.154],
        [4.9322, 0.1536],
        [5.0326, 0.1528],
        [5.1331, 0.152],
        [5.2335, 0.151],
        [5.334, 0.1497],
        [5.4344, 0.1482],
        [5.5349, 0.1467],
        [5.6353, 0.145],
        [5.7358, 0.1431],
        [5.8362, 0.1412],
        [5.9367, 0.1391],
        [6.0371, 0.1369],
        [6.1376, 0.1345],
        [6.238, 0.132],
        [6.3385, 0.1295],
        [6.4389, 0.1267],
        [6.5394, 0.124],
        [6.6398, 0.1213],
        [6.7403, 0.1186],
        [6.8408, 0.116],
        [6.9412, 0.1131],
        [7.0417, 0.1101],
        [7.1421, 0.1073],
        [7.2426, 0.1045],
        [7.343, 0.1018],
        [7.4435, 0.0988],
        [7.5439, 0.0961],
        [7.6444, 0.0931],
        [7.7448, 0.0904],
        [7.8453, 0.0876],
        [7.9457, 0.0848],
        [8.0462, 0.0822],
        [8.1466, 0.0796],
        [8.2471, 0.0769],
        [8.3475, 0.0745],
        [8.448, 0.0721],
        [8.5484, 0.0698],
        [8.6489, 0.0675],
        [8.7493, 0.0653],
        [8.8498, 0.0631],
        [8.9503, 0.061],
        [9.0507, 0.0588],
        [9.1512, 0.0567],
        [9.2516, 0.0546],
        [9.3521, 0.0527],
        [9.4525, 0.0507],
        [9.553, 0.0488],
        [9.6534, 0.047],
        [9.7539, 0.0453],
        [9.8543, 0.0436],
        [9.9548, 0.0419],
        [10.0552, 0.0403],
        [10.1557, 0.0387],
        [10.2561, 0.0373],
        [10.3566, 0.0358],
        [10.457, 0.0344],
        [10.5575, 0.0331],
        [10.6579, 0.0318],
        [10.7584, 0.0304],
        [10.8588, 0.0292],
        [10.9593, 0.0279],
        [11.0597, 0.0267],
        [11.1602, 0.0255],
        [11.2607, 0.0244],
        [11.3611, 0.0233],
        [11.4616, 0.0222],
        [11.562, 0.0212],
        [11.6625, 0.0203],
        [11.7629, 0.0194],
        [11.8634, 0.0185],
        [11.9638, 0.0177],
        [12.0643, 0.0168],
        [12.1647, 0.0161],
        [12.2652, 0.0154],
        [12.3656, 0.0147],
        [12.4661, 0.0141],
        [12.5665, 0.0134],
        [12.667, 0.0128],
        [12.7674, 0.0122],
        [12.8679, 0.0117],
        [12.9683, 0.0111],
        [13.0688, 0.0106],
        [13.1692, 0.0101],
        [13.2697, 0.0096],
        [13.3702, 0.0092],
        [13.4706, 0.0087],
        [13.5711, 0.0083],
        [13.6715, 0.0079],
        [13.772, 0.0076],
        [13.8724, 0.0072],
        [13.9729, 0.0068],
        [14.0733, 0.0065],
        [14.1738, 0.0062],
        [14.2742, 0.0059],
        [14.3747, 0.0056],
        [14.4751, 0.0054],
        [14.5756, 0.0051],
        [14.676, 0.0048],
        [14.7765, 0.0046],
        [14.8769, 0.0044],
        [14.9774, 0.0042],
        [15.0778, 0.004],
        [15.1783, 0.0038],
        [15.2787, 0.0036],
        [15.3792, 0.0034],
        [15.4796, 0.0032],
        [15.5801, 0.003],
        [15.6806, 0.0029],
        [15.781, 0.0027],
        [15.8815, 0.0026],
        [15.9819, 0.0025],
        [16.0824, 0.0023],
        [16.1828, 0.0022],
        [16.2833, 0.0021],
        [16.3837, 0.002],
        [16.4842, 0.0019],
        [16.5846, 0.0018],
        [16.6851, 0.0017],
        [16.7855, 0.0016],
        [16.886, 0.0015],
        [16.9864, 0.0014],
        [17.0869, 0.0014],
        [17.1873, 0.0013],
        [17.2878, 0.0012],
        [17.3882, 0.0011],
        [17.4887, 0.0011],
        [17.5891, 0.001],
        [17.6896, 0.001],
        [17.7901, 0.0009],
        [17.8905, 0.0009],
        [17.991, 0.0008],
        [18.0914, 0.0008],
        [18.1919, 0.0007],
        [18.2923, 0.0007],
        [18.3928, 0.0007],
        [18.4932, 0.0006],
        [18.5937, 0.0006],
        [18.6941, 0.0006],
        [18.7946, 0.0005],
        [18.895, 0.0005],
        [18.9955, 0.0005],
        [19.0959, 0.0004],
        [19.1964, 0.0004],
        [19.2968, 0.0004],
        [19.3973, 0.0004],
        [19.4977, 0.0004],
        [19.5982, 0.0003],
        [19.6986, 0.0003],
        [19.7991, 0.0003],
        [19.8995, 0.0003],
        [20, 0.0003]
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
        "pointFormat": "\n    Mean = 6.03 (5.38,6.74)<br>\n    S.D = 2.86 (2.3,3.59)<br>\n    gamma shape = 4.6 (2.95,6.67)<br>\n    gamma scale = 1.37 (0.91,2.07)<br>"
      },
      "showInLegend": true,
      "enableMouseTracking": true
    },
    {
      "data": [
        [0.01, 2.2086e-014, 8.5109e-006],
        [0.1105, 1.6722e-008, 0.0009],
        [0.2109, 6.126e-007, 0.003],
        [0.3114, 4.7082e-006, 0.0061],
        [0.4118, 0, 0.0098],
        [0.5123, 0.0001, 0.014],
        [0.6127, 0.0001, 0.0187],
        [0.7132, 0.0003, 0.0244],
        [0.8136, 0.0006, 0.03],
        [0.9141, 0.001, 0.0364],
        [1.0145, 0.0015, 0.0425],
        [1.115, 0.0023, 0.0482],
        [1.2154, 0.0033, 0.054],
        [1.3159, 0.0046, 0.0604],
        [1.4163, 0.0062, 0.066],
        [1.5168, 0.0082, 0.0715],
        [1.6172, 0.0106, 0.0776],
        [1.7177, 0.0133, 0.0842],
        [1.8181, 0.0165, 0.0907],
        [1.9186, 0.0199, 0.0959],
        [2.019, 0.0237, 0.1008],
        [2.1195, 0.0276, 0.1062],
        [2.2199, 0.0321, 0.1106],
        [2.3204, 0.037, 0.1156],
        [2.4209, 0.0419, 0.1209],
        [2.5213, 0.0474, 0.1257],
        [2.6218, 0.0527, 0.1303],
        [2.7222, 0.0574, 0.135],
        [2.8227, 0.0629, 0.1401],
        [2.9231, 0.0684, 0.1437],
        [3.0236, 0.0741, 0.1473],
        [3.124, 0.0797, 0.1511],
        [3.2245, 0.0852, 0.155],
        [3.3249, 0.0907, 0.1586],
        [3.4254, 0.0959, 0.1621],
        [3.5258, 0.1007, 0.1646],
        [3.6263, 0.1057, 0.1676],
        [3.7267, 0.1105, 0.1708],
        [3.8272, 0.1146, 0.1726],
        [3.9276, 0.1194, 0.1753],
        [4.0281, 0.1227, 0.1784],
        [4.1285, 0.125, 0.1811],
        [4.229, 0.1257, 0.1824],
        [4.3294, 0.1268, 0.1833],
        [4.4299, 0.128, 0.184],
        [4.5304, 0.1284, 0.184],
        [4.6308, 0.1283, 0.1838],
        [4.7313, 0.128, 0.1839],
        [4.8317, 0.127, 0.1838],
        [4.9322, 0.1264, 0.1836],
        [5.0326, 0.1251, 0.1842],
        [5.1331, 0.1238, 0.1833],
        [5.2335, 0.1229, 0.1821],
        [5.334, 0.1216, 0.1812],
        [5.4344, 0.1201, 0.1791],
        [5.5349, 0.1186, 0.177],
        [5.6353, 0.1169, 0.1751],
        [5.7358, 0.1152, 0.174],
        [5.8362, 0.1135, 0.1717],
        [5.9367, 0.1118, 0.1692],
        [6.0371, 0.1098, 0.1665],
        [6.1376, 0.1075, 0.164],
        [6.238, 0.1051, 0.1608],
        [6.3385, 0.1035, 0.1581],
        [6.4389, 0.1017, 0.1556],
        [6.5394, 0.0997, 0.1526],
        [6.6398, 0.0977, 0.1493],
        [6.7403, 0.0954, 0.1462],
        [6.8408, 0.0934, 0.1428],
        [6.9412, 0.0911, 0.1398],
        [7.0417, 0.0886, 0.1369],
        [7.1421, 0.0865, 0.1336],
        [7.2426, 0.0846, 0.1306],
        [7.343, 0.0821, 0.1275],
        [7.4435, 0.0802, 0.1241],
        [7.5439, 0.0782, 0.1206],
        [7.6444, 0.0763, 0.1178],
        [7.7448, 0.0738, 0.1147],
        [7.8453, 0.0713, 0.112],
        [7.9457, 0.0685, 0.1091],
        [8.0462, 0.066, 0.1056],
        [8.1466, 0.0638, 0.103],
        [8.2471, 0.0615, 0.0996],
        [8.3475, 0.0591, 0.0968],
        [8.448, 0.0568, 0.0943],
        [8.5484, 0.0544, 0.0915],
        [8.6489, 0.0521, 0.0886],
        [8.7493, 0.0501, 0.0855],
        [8.8498, 0.048, 0.0826],
        [8.9503, 0.0459, 0.08],
        [9.0507, 0.044, 0.0773],
        [9.1512, 0.0421, 0.0744],
        [9.2516, 0.0401, 0.0718],
        [9.3521, 0.0382, 0.0696],
        [9.4525, 0.0363, 0.0672],
        [9.553, 0.0346, 0.0647],
        [9.6534, 0.0328, 0.0624],
        [9.7539, 0.0313, 0.0604],
        [9.8543, 0.0298, 0.0584],
        [9.9548, 0.0281, 0.0563],
        [10.0552, 0.0266, 0.0545],
        [10.1557, 0.025, 0.0528],
        [10.2561, 0.0237, 0.0509],
        [10.3566, 0.0224, 0.0492],
        [10.457, 0.0212, 0.0474],
        [10.5575, 0.0199, 0.0457],
        [10.6579, 0.0188, 0.0441],
        [10.7584, 0.0177, 0.0426],
        [10.8588, 0.0167, 0.0412],
        [10.9593, 0.0159, 0.0398],
        [11.0597, 0.0148, 0.0385],
        [11.1602, 0.0138, 0.0374],
        [11.2607, 0.0129, 0.0362],
        [11.3611, 0.0122, 0.035],
        [11.4616, 0.0115, 0.0339],
        [11.562, 0.0109, 0.0328],
        [11.6625, 0.0103, 0.0318],
        [11.7629, 0.0096, 0.0307],
        [11.8634, 0.009, 0.0297],
        [11.9638, 0.0085, 0.0288],
        [12.0643, 0.008, 0.0278],
        [12.1647, 0.0075, 0.0269],
        [12.2652, 0.0071, 0.0259],
        [12.3656, 0.0067, 0.0249],
        [12.4661, 0.0063, 0.024],
        [12.5665, 0.0059, 0.0232],
        [12.667, 0.0055, 0.0224],
        [12.7674, 0.0052, 0.0215],
        [12.8679, 0.0048, 0.0207],
        [12.9683, 0.0045, 0.0201],
        [13.0688, 0.0042, 0.0195],
        [13.1692, 0.0039, 0.0187],
        [13.2697, 0.0037, 0.0181],
        [13.3702, 0.0034, 0.0175],
        [13.4706, 0.0032, 0.017],
        [13.5711, 0.003, 0.0164],
        [13.6715, 0.0027, 0.0158],
        [13.772, 0.0025, 0.0152],
        [13.8724, 0.0024, 0.0147],
        [13.9729, 0.0022, 0.0142],
        [14.0733, 0.002, 0.0137],
        [14.1738, 0.0019, 0.0132],
        [14.2742, 0.0018, 0.0127],
        [14.3747, 0.0016, 0.0123],
        [14.4751, 0.0015, 0.0118],
        [14.5756, 0.0014, 0.0114],
        [14.676, 0.0013, 0.011],
        [14.7765, 0.0012, 0.0106],
        [14.8769, 0.0012, 0.0103],
        [14.9774, 0.0011, 0.0099],
        [15.0778, 0.001, 0.0096],
        [15.1783, 0.0009, 0.0093],
        [15.2787, 0.0009, 0.009],
        [15.3792, 0.0008, 0.0086],
        [15.4796, 0.0008, 0.0083],
        [15.5801, 0.0007, 0.008],
        [15.6806, 0.0007, 0.0077],
        [15.781, 0.0006, 0.0074],
        [15.8815, 0.0006, 0.0072],
        [15.9819, 0.0005, 0.0069],
        [16.0824, 0.0005, 0.0066],
        [16.1828, 0.0005, 0.0064],
        [16.2833, 0.0004, 0.0061],
        [16.3837, 0.0004, 0.0059],
        [16.4842, 0.0004, 0.0057],
        [16.5846, 0.0003, 0.0055],
        [16.6851, 0.0003, 0.0053],
        [16.7855, 0.0003, 0.0051],
        [16.886, 0.0003, 0.0049],
        [16.9864, 0.0003, 0.0047],
        [17.0869, 0.0002, 0.0045],
        [17.1873, 0.0002, 0.0044],
        [17.2878, 0.0002, 0.0042],
        [17.3882, 0.0002, 0.004],
        [17.4887, 0.0002, 0.0039],
        [17.5891, 0.0002, 0.0037],
        [17.6896, 0.0001, 0.0036],
        [17.7901, 0.0001, 0.0035],
        [17.8905, 0.0001, 0.0034],
        [17.991, 0.0001, 0.0032],
        [18.0914, 0.0001, 0.0031],
        [18.1919, 0.0001, 0.003],
        [18.2923, 0.0001, 0.0029],
        [18.3928, 0.0001, 0.0028],
        [18.4932, 0.0001, 0.0027],
        [18.5937, 0.0001, 0.0026],
        [18.6941, 0.0001, 0.0025],
        [18.7946, 0.0001, 0.0023],
        [18.895, 0.0001, 0.0022],
        [18.9955, 0.0001, 0.0021],
        [19.0959, 0, 0.002],
        [19.1964, 0, 0.002],
        [19.2968, 0, 0.0019],
        [19.3973, 0, 0.0018],
        [19.4977, 0, 0.0017],
        [19.5982, 0, 0.0017],
        [19.6986, 0, 0.0016],
        [19.7991, 0, 0.0015],
        [19.8995, 0, 0.0015],
        [20, 0, 0.0014]
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
          "x": 5,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#170<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 6.2,
          "y": 27,
          "labels": "<b>Case ID:<\/b>#171<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 6.2,
          "y": 28,
          "labels": "<b>Case ID:<\/b>#172<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.2,
          "y": 29,
          "labels": "<b>Case ID:<\/b>#173<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 5.8,
          "y": 12,
          "labels": "<b>Case ID:<\/b>#174<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 6.2,
          "y": 30,
          "labels": "<b>Case ID:<\/b>#175<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>5<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 6.8,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#176<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Swizerland<br><hr>"
        },
        {
          "x": 5,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#177<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 31,
          "labels": "<b>Case ID:<\/b>#178<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 6.6,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#179<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 32,
          "labels": "<b>Case ID:<\/b>#180<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Czech Republic<br><hr>"
        },
        {
          "x": 4.6,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#181<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US,Japan<br><hr>"
        },
        {
          "x": 6,
          "y": 19,
          "labels": "<b>Case ID:<\/b>#182<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.4,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#183<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>75<br><b>Travelled to:<\/b>France,Brazil,Chile,Peru<br><hr>"
        },
        {
          "x": 4.2,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#184<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 33,
          "labels": "<b>Case ID:<\/b>#185<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 34,
          "labels": "<b>Case ID:<\/b>#187<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 35,
          "labels": "<b>Case ID:<\/b>#188<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 5.4,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#189<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 6.2,
          "y": 36,
          "labels": "<b>Case ID:<\/b>#190<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6,
          "y": 20,
          "labels": "<b>Case ID:<\/b>#191<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 37,
          "labels": "<b>Case ID:<\/b>#192<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5.8,
          "y": 13,
          "labels": "<b>Case ID:<\/b>#193<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 21,
          "labels": "<b>Case ID:<\/b>#194<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 38,
          "labels": "<b>Case ID:<\/b>#195<br><b>Confirm at:<\/b>2020-03-23<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6,
          "y": 22,
          "labels": "<b>Case ID:<\/b>#196<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>Thailand, Germany, Bulgaria,US<br><hr>"
        },
        {
          "x": 5.8,
          "y": 14,
          "labels": "<b>Case ID:<\/b>#197<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 39,
          "labels": "<b>Case ID:<\/b>#198<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Ireland<br><hr>"
        },
        {
          "x": 6.2,
          "y": 40,
          "labels": "<b>Case ID:<\/b>#199<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Italy, Germany, Belgium, UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 41,
          "labels": "<b>Case ID:<\/b>#200<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 42,
          "labels": "<b>Case ID:<\/b>#201<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Ireland<br><hr>"
        },
        {
          "x": 5.8,
          "y": 15,
          "labels": "<b>Case ID:<\/b>#202<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 43,
          "labels": "<b>Case ID:<\/b>#203<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.2,
          "y": 44,
          "labels": "<b>Case ID:<\/b>#204<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 5.6,
          "y": 13,
          "labels": "<b>Case ID:<\/b>#205<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>2.5<br><b>Travelled to:<\/b>Turkey<br><hr>"
        },
        {
          "x": 6.2,
          "y": 45,
          "labels": "<b>Case ID:<\/b>#206<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 5.6,
          "y": 14,
          "labels": "<b>Case ID:<\/b>#207<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 46,
          "labels": "<b>Case ID:<\/b>#208<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 47,
          "labels": "<b>Case ID:<\/b>#209<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 48,
          "labels": "<b>Case ID:<\/b>#210<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 49,
          "labels": "<b>Case ID:<\/b>#211<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>Indonesia<br><hr>"
        },
        {
          "x": 6.2,
          "y": 50,
          "labels": "<b>Case ID:<\/b>#212<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 51,
          "labels": "<b>Case ID:<\/b>#213<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Spain<br><hr>"
        },
        {
          "x": 6.2,
          "y": 52,
          "labels": "<b>Case ID:<\/b>#214<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 53,
          "labels": "<b>Case ID:<\/b>#215<br><b>Confirm at:<\/b>2020-03-24<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 7.8,
          "y": 5,
          "labels": "<b>Case ID:<\/b>#217<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 54,
          "labels": "<b>Case ID:<\/b>#218<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 7,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#219<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 55,
          "labels": "<b>Case ID:<\/b>#220<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 23,
          "labels": "<b>Case ID:<\/b>#221<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 56,
          "labels": "<b>Case ID:<\/b>#222<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 57,
          "labels": "<b>Case ID:<\/b>#223<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 58,
          "labels": "<b>Case ID:<\/b>#224<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 59,
          "labels": "<b>Case ID:<\/b>#225<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 11,
          "y": 2,
          "labels": "<b>Case ID:<\/b>#226<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Egypt<br><hr>"
        },
        {
          "x": 6.2,
          "y": 60,
          "labels": "<b>Case ID:<\/b>#227<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 7,
          "y": 9,
          "labels": "<b>Case ID:<\/b>#228<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Netherlands<br><hr>"
        },
        {
          "x": 6.2,
          "y": 61,
          "labels": "<b>Case ID:<\/b>#229<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 62,
          "labels": "<b>Case ID:<\/b>#230<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.6,
          "y": 6,
          "labels": "<b>Case ID:<\/b>#231<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>15<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 9,
          "y": 1,
          "labels": "<b>Case ID:<\/b>#232<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US, Indonesia<br><hr>"
        },
        {
          "x": 6.2,
          "y": 63,
          "labels": "<b>Case ID:<\/b>#233<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 64,
          "labels": "<b>Case ID:<\/b>#234<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>France<br><hr>"
        },
        {
          "x": 6.6,
          "y": 7,
          "labels": "<b>Case ID:<\/b>#235<br><b>Confirm at:<\/b>2020-03-25<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Belgium, Turkey, Thailand<br><hr>"
        },
        {
          "x": 7.2,
          "y": 3,
          "labels": "<b>Case ID:<\/b>#236<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>Czech Republic<br><hr>"
        },
        {
          "x": 6.4,
          "y": 8,
          "labels": "<b>Case ID:<\/b>#237<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>55<br><b>Travelled to:<\/b>US, San Diego, Chile,<c2><a0> Antarctica,<c2><a0> Argentina,<c2><a0> Kada, Thailand<br><hr>"
        },
        {
          "x": 6.2,
          "y": 65,
          "labels": "<b>Case ID:<\/b>#238<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 66,
          "labels": "<b>Case ID:<\/b>#239<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 67,
          "labels": "<b>Case ID:<\/b>#240<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 6.2,
          "y": 68,
          "labels": "<b>Case ID:<\/b>#241<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>45<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 69,
          "labels": "<b>Case ID:<\/b>#242<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6.2,
          "y": 70,
          "labels": "<b>Case ID:<\/b>#243<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>US<br><hr>"
        },
        {
          "x": 5.6,
          "y": 15,
          "labels": "<b>Case ID:<\/b>#244<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>New Zealand<br><hr>"
        },
        {
          "x": 6.2,
          "y": 71,
          "labels": "<b>Case ID:<\/b>#245<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        },
        {
          "x": 6,
          "y": 24,
          "labels": "<b>Case ID:<\/b>#249<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Malaysia, Philippine<br><hr>"
        },
        {
          "x": 5.6,
          "y": 16,
          "labels": "<b>Case ID:<\/b>#250<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>F<br><b>Age group:<\/b>35<br><b>Travelled to:<\/b>Monaco<br><hr>"
        },
        {
          "x": 6.2,
          "y": 72,
          "labels": "<b>Case ID:<\/b>#251<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>65<br><b>Travelled to:<\/b>Australia, Mexico<br><hr>"
        },
        {
          "x": 6,
          "y": 25,
          "labels": "<b>Case ID:<\/b>#252<br><b>Confirm at:<\/b>2020-03-26<br><b>Type:<\/b>Imported<br><b>Sex:<\/b>M<br><b>Age group:<\/b>25<br><b>Travelled to:<\/b>UK<br><hr>"
        }
      ],
      "type": "scatter",
      "id": "dat0",
      "name": "Case ",
      "yAxis": 1,
      "zIndex": 0,
      "marker": {
        "radius": 3.12,
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
        [0.01, 7.6135e-011],
        [0.1105, 1.4652e-006],
        [0.2109, 0],
        [0.3114, 0.0001],
        [0.4118, 0.0003],
        [0.5123, 0.0006],
        [0.6127, 0.0011],
        [0.7132, 0.0019],
        [0.8136, 0.003],
        [0.9141, 0.0045],
        [1.0145, 0.0063],
        [1.115, 0.0086],
        [1.2154, 0.0113],
        [1.3159, 0.0144],
        [1.4163, 0.0179],
        [1.5168, 0.022],
        [1.6172, 0.0263],
        [1.7177, 0.0309],
        [1.8181, 0.0358],
        [1.9186, 0.0411],
        [2.019, 0.0467],
        [2.1195, 0.0522],
        [2.2199, 0.0581],
        [2.3204, 0.064],
        [2.4209, 0.0699],
        [2.5213, 0.076],
        [2.6218, 0.0823],
        [2.7222, 0.0882],
        [2.8227, 0.094],
        [2.9231, 0.0998],
        [3.0236, 0.1051],
        [3.124, 0.1101],
        [3.2245, 0.1155],
        [3.3249, 0.1205],
        [3.4254, 0.125],
        [3.5258, 0.1298],
        [3.6263, 0.134],
        [3.7267, 0.1374],
        [3.8272, 0.1409],
        [3.9276, 0.1441],
        [4.0281, 0.1472],
        [4.1285, 0.1497],
        [4.229, 0.152],
        [4.3294, 0.154],
        [4.4299, 0.1555],
        [4.5304, 0.157],
        [4.6308, 0.1581],
        [4.7313, 0.1588],
        [4.8317, 0.159],
        [4.9322, 0.1591],
        [5.0326, 0.1589],
        [5.1331, 0.1588],
        [5.2335, 0.158],
        [5.334, 0.1571],
        [5.4344, 0.156],
        [5.5349, 0.155],
        [5.6353, 0.1536],
        [5.7358, 0.1519],
        [5.8362, 0.1499],
        [5.9367, 0.1477],
        [6.0371, 0.1454],
        [6.1376, 0.1432],
        [6.238, 0.1411],
        [6.3385, 0.1383],
        [6.4389, 0.1356],
        [6.5394, 0.1331],
        [6.6398, 0.1305],
        [6.7403, 0.1274],
        [6.8408, 0.1244],
        [6.9412, 0.1215],
        [7.0417, 0.1185],
        [7.1421, 0.1154],
        [7.2426, 0.1125],
        [7.343, 0.1095],
        [7.4435, 0.1065],
        [7.5439, 0.1033],
        [7.6444, 0.1003],
        [7.7448, 0.0973],
        [7.8453, 0.0943],
        [7.9457, 0.0914],
        [8.0462, 0.0884],
        [8.1466, 0.0857],
        [8.2471, 0.0829],
        [8.3475, 0.0802],
        [8.448, 0.0776],
        [8.5484, 0.0749],
        [8.6489, 0.0723],
        [8.7493, 0.0698],
        [8.8498, 0.0672],
        [8.9503, 0.0646],
        [9.0507, 0.0622],
        [9.1512, 0.0599],
        [9.2516, 0.0578],
        [9.3521, 0.0555],
        [9.4525, 0.0533],
        [9.553, 0.0513],
        [9.6534, 0.0492],
        [9.7539, 0.0473],
        [9.8543, 0.0453],
        [9.9548, 0.0435],
        [10.0552, 0.0417],
        [10.1557, 0.0398],
        [10.2561, 0.0381],
        [10.3566, 0.0366],
        [10.457, 0.0349],
        [10.5575, 0.0334],
        [10.6579, 0.0319],
        [10.7584, 0.0305],
        [10.8588, 0.0291],
        [10.9593, 0.0278],
        [11.0597, 0.0266],
        [11.1602, 0.0254],
        [11.2607, 0.0243],
        [11.3611, 0.0232],
        [11.4616, 0.0221],
        [11.562, 0.0211],
        [11.6625, 0.0201],
        [11.7629, 0.0191],
        [11.8634, 0.0183],
        [11.9638, 0.0174],
        [12.0643, 0.0165],
        [12.1647, 0.0158],
        [12.2652, 0.015],
        [12.3656, 0.0143],
        [12.4661, 0.0136],
        [12.5665, 0.0129],
        [12.667, 0.0123],
        [12.7674, 0.0116],
        [12.8679, 0.0111],
        [12.9683, 0.0105],
        [13.0688, 0.01],
        [13.1692, 0.0095],
        [13.2697, 0.009],
        [13.3702, 0.0085],
        [13.4706, 0.0081],
        [13.5711, 0.0077],
        [13.6715, 0.0073],
        [13.772, 0.0069],
        [13.8724, 0.0065],
        [13.9729, 0.0062],
        [14.0733, 0.0059],
        [14.1738, 0.0055],
        [14.2742, 0.0052],
        [14.3747, 0.005],
        [14.4751, 0.0047],
        [14.5756, 0.0044],
        [14.676, 0.0042],
        [14.7765, 0.004],
        [14.8769, 0.0037],
        [14.9774, 0.0035],
        [15.0778, 0.0033],
        [15.1783, 0.0031],
        [15.2787, 0.003],
        [15.3792, 0.0028],
        [15.4796, 0.0027],
        [15.5801, 0.0025],
        [15.6806, 0.0024],
        [15.781, 0.0022],
        [15.8815, 0.0021],
        [15.9819, 0.002],
        [16.0824, 0.0019],
        [16.1828, 0.0018],
        [16.2833, 0.0017],
        [16.3837, 0.0016],
        [16.4842, 0.0015],
        [16.5846, 0.0014],
        [16.6851, 0.0013],
        [16.7855, 0.0013],
        [16.886, 0.0012],
        [16.9864, 0.0011],
        [17.0869, 0.0011],
        [17.1873, 0.001],
        [17.2878, 0.0009],
        [17.3882, 0.0009],
        [17.4887, 0.0008],
        [17.5891, 0.0008],
        [17.6896, 0.0007],
        [17.7901, 0.0007],
        [17.8905, 0.0007],
        [17.991, 0.0006],
        [18.0914, 0.0006],
        [18.1919, 0.0005],
        [18.2923, 0.0005],
        [18.3928, 0.0005],
        [18.4932, 0.0005],
        [18.5937, 0.0004],
        [18.6941, 0.0004],
        [18.7946, 0.0004],
        [18.895, 0.0004],
        [18.9955, 0.0003],
        [19.0959, 0.0003],
        [19.1964, 0.0003],
        [19.2968, 0.0003],
        [19.3973, 0.0003],
        [19.4977, 0.0002],
        [19.5982, 0.0002],
        [19.6986, 0.0002],
        [19.7991, 0.0002],
        [19.8995, 0.0002],
        [20, 0.0002]
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
        "pointFormat": "\n    Mean = 6.14 (5.48,6.83)<br>\n    S.D = 2.73 (2.21,3.35)<br>\n    gamma shape = 5.18 (3.58,7.27)<br>\n    gamma scale = 1.23 (0.84,1.73)<br>"
      },
      "showInLegend": true,
      "enableMouseTracking": true
    },
    {
      "data": [
        [0.01, 7.5997e-016, 3.1757e-007],
        [0.1105, 2.2233e-009, 0.0001],
        [0.2109, 1.1157e-007, 0.0007],
        [0.3114, 1.1005e-006, 0.0019],
        [0.4118, 5.8308e-006, 0.0037],
        [0.5123, 0, 0.0061],
        [0.6127, 0.0001, 0.009],
        [0.7132, 0.0001, 0.0126],
        [0.8136, 0.0003, 0.0168],
        [0.9141, 0.0005, 0.0212],
        [1.0145, 0.0008, 0.0257],
        [1.115, 0.0013, 0.0314],
        [1.2154, 0.002, 0.0365],
        [1.3159, 0.0029, 0.0423],
        [1.4163, 0.0041, 0.0483],
        [1.5168, 0.0056, 0.0543],
        [1.6172, 0.0075, 0.061],
        [1.7177, 0.0097, 0.0672],
        [1.8181, 0.0124, 0.0741],
        [1.9186, 0.0154, 0.0805],
        [2.019, 0.0188, 0.0867],
        [2.1195, 0.0228, 0.0923],
        [2.2199, 0.027, 0.0984],
        [2.3204, 0.0316, 0.1034],
        [2.4209, 0.0366, 0.1095],
        [2.5213, 0.0416, 0.1147],
        [2.6218, 0.0467, 0.12],
        [2.7222, 0.0523, 0.1251],
        [2.8227, 0.0578, 0.1305],
        [2.9231, 0.0636, 0.1357],
        [3.0236, 0.0703, 0.1409],
        [3.124, 0.0751, 0.1455],
        [3.2245, 0.0813, 0.1497],
        [3.3249, 0.087, 0.1529],
        [3.4254, 0.0926, 0.1568],
        [3.5258, 0.0978, 0.1603],
        [3.6263, 0.1025, 0.1633],
        [3.7267, 0.1078, 0.1672],
        [3.8272, 0.112, 0.1712],
        [3.9276, 0.1157, 0.1743],
        [4.0281, 0.1199, 0.1771],
        [4.1285, 0.1235, 0.1799],
        [4.229, 0.1258, 0.1827],
        [4.3294, 0.1281, 0.1848],
        [4.4299, 0.1301, 0.1861],
        [4.5304, 0.1317, 0.1872],
        [4.6308, 0.1328, 0.1889],
        [4.7313, 0.1327, 0.1895],
        [4.8317, 0.1333, 0.1909],
        [4.9322, 0.1333, 0.1906],
        [5.0326, 0.1332, 0.1901],
        [5.1331, 0.1329, 0.1896],
        [5.2335, 0.1324, 0.1895],
        [5.334, 0.1317, 0.1879],
        [5.4344, 0.1308, 0.1862],
        [5.5349, 0.1292, 0.1851],
        [5.6353, 0.1276, 0.1835],
        [5.7358, 0.1265, 0.1819],
        [5.8362, 0.1252, 0.1793],
        [5.9367, 0.1233, 0.177],
        [6.0371, 0.1212, 0.1746],
        [6.1376, 0.1191, 0.1714],
        [6.238, 0.1165, 0.1688],
        [6.3385, 0.1143, 0.1665],
        [6.4389, 0.112, 0.1638],
        [6.5394, 0.1096, 0.1603],
        [6.6398, 0.1071, 0.1565],
        [6.7403, 0.1049, 0.1526],
        [6.8408, 0.1025, 0.1495],
        [6.9412, 0.0999, 0.1467],
        [7.0417, 0.0974, 0.1428],
        [7.1421, 0.0947, 0.1391],
        [7.2426, 0.092, 0.1351],
        [7.343, 0.0893, 0.1319],
        [7.4435, 0.0865, 0.1284],
        [7.5439, 0.084, 0.125],
        [7.6444, 0.0815, 0.1215],
        [7.7448, 0.0788, 0.1184],
        [7.8453, 0.0758, 0.1152],
        [7.9457, 0.073, 0.1118],
        [8.0462, 0.07, 0.1085],
        [8.1466, 0.0672, 0.1053],
        [8.2471, 0.0644, 0.1021],
        [8.3475, 0.0621, 0.0987],
        [8.448, 0.0596, 0.096],
        [8.5484, 0.0569, 0.0934],
        [8.6489, 0.0546, 0.0903],
        [8.7493, 0.0525, 0.0877],
        [8.8498, 0.0507, 0.085],
        [8.9503, 0.0483, 0.0824],
        [9.0507, 0.0458, 0.0796],
        [9.1512, 0.0437, 0.0769],
        [9.2516, 0.0414, 0.0745],
        [9.3521, 0.0393, 0.072],
        [9.4525, 0.0375, 0.0697],
        [9.553, 0.0351, 0.0674],
        [9.6534, 0.0334, 0.065],
        [9.7539, 0.0317, 0.0628],
        [9.8543, 0.0301, 0.0606],
        [9.9548, 0.0286, 0.0588],
        [10.0552, 0.027, 0.0568],
        [10.1557, 0.0255, 0.0548],
        [10.2561, 0.024, 0.053],
        [10.3566, 0.0227, 0.0512],
        [10.457, 0.0213, 0.0493],
        [10.5575, 0.02, 0.0476],
        [10.6579, 0.0189, 0.0459],
        [10.7584, 0.0178, 0.0443],
        [10.8588, 0.0167, 0.0428],
        [10.9593, 0.0157, 0.0413],
        [11.0597, 0.0147, 0.0399],
        [11.1602, 0.0138, 0.0384],
        [11.2607, 0.0128, 0.037],
        [11.3611, 0.012, 0.0356],
        [11.4616, 0.0113, 0.0343],
        [11.562, 0.0105, 0.033],
        [11.6625, 0.0099, 0.0317],
        [11.7629, 0.0092, 0.0305],
        [11.8634, 0.0086, 0.0294],
        [11.9638, 0.0081, 0.0284],
        [12.0643, 0.0076, 0.0273],
        [12.1647, 0.0071, 0.0263],
        [12.2652, 0.0066, 0.0254],
        [12.3656, 0.0062, 0.0245],
        [12.4661, 0.0057, 0.0236],
        [12.5665, 0.0054, 0.0226],
        [12.667, 0.005, 0.0218],
        [12.7674, 0.0046, 0.021],
        [12.8679, 0.0043, 0.0201],
        [12.9683, 0.004, 0.0194],
        [13.0688, 0.0037, 0.0188],
        [13.1692, 0.0035, 0.018],
        [13.2697, 0.0032, 0.0174],
        [13.3702, 0.003, 0.0168],
        [13.4706, 0.0028, 0.0162],
        [13.5711, 0.0026, 0.0155],
        [13.6715, 0.0024, 0.0149],
        [13.772, 0.0022, 0.0143],
        [13.8724, 0.0021, 0.0138],
        [13.9729, 0.0019, 0.0133],
        [14.0733, 0.0018, 0.0128],
        [14.1738, 0.0017, 0.0123],
        [14.2742, 0.0015, 0.0118],
        [14.3747, 0.0014, 0.0113],
        [14.4751, 0.0013, 0.0108],
        [14.5756, 0.0012, 0.0104],
        [14.676, 0.0011, 0.01],
        [14.7765, 0.001, 0.0096],
        [14.8769, 0.001, 0.0092],
        [14.9774, 0.0009, 0.0088],
        [15.0778, 0.0008, 0.0084],
        [15.1783, 0.0008, 0.0081],
        [15.2787, 0.0007, 0.0078],
        [15.3792, 0.0006, 0.0075],
        [15.4796, 0.0006, 0.0072],
        [15.5801, 0.0006, 0.0069],
        [15.6806, 0.0005, 0.0066],
        [15.781, 0.0005, 0.0064],
        [15.8815, 0.0004, 0.0061],
        [15.9819, 0.0004, 0.0058],
        [16.0824, 0.0004, 0.0056],
        [16.1828, 0.0003, 0.0054],
        [16.2833, 0.0003, 0.0052],
        [16.3837, 0.0003, 0.0049],
        [16.4842, 0.0003, 0.0047],
        [16.5846, 0.0002, 0.0046],
        [16.6851, 0.0002, 0.0044],
        [16.7855, 0.0002, 0.0042],
        [16.886, 0.0002, 0.004],
        [16.9864, 0.0002, 0.0039],
        [17.0869, 0.0002, 0.0037],
        [17.1873, 0.0001, 0.0035],
        [17.2878, 0.0001, 0.0034],
        [17.3882, 0.0001, 0.0033],
        [17.4887, 0.0001, 0.0031],
        [17.5891, 0.0001, 0.003],
        [17.6896, 0.0001, 0.0029],
        [17.7901, 0.0001, 0.0027],
        [17.8905, 0.0001, 0.0026],
        [17.991, 0.0001, 0.0025],
        [18.0914, 0.0001, 0.0024],
        [18.1919, 0.0001, 0.0023],
        [18.2923, 0.0001, 0.0022],
        [18.3928, 0.0001, 0.0021],
        [18.4932, 0, 0.002],
        [18.5937, 0, 0.0019],
        [18.6941, 0, 0.0018],
        [18.7946, 0, 0.0017],
        [18.895, 0, 0.0016],
        [18.9955, 0, 0.0016],
        [19.0959, 0, 0.0015],
        [19.1964, 0, 0.0014],
        [19.2968, 0, 0.0014],
        [19.3973, 0, 0.0013],
        [19.4977, 0, 0.0013],
        [19.5982, 0, 0.0012],
        [19.6986, 0, 0.0011],
        [19.7991, 0, 0.0011],
        [19.8995, 0, 0.001],
        [20, 0, 0.001]
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
    "align": "left",
    "verticalAlign": "top",
    "layout": "horizontal",
    "x": 50,
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
