import {DEFLECTION_SIMPLIFIED_CALCULATION} from "../../urls";

export default {
  "pageTitle": "",
  "images": [
    {
      "title": "Simplified Approach for Deflection",
      "imagePath":  require("../../assets/img/lesson/Deflection_BS_Simplified_Method/images/sdef3.jpg"),
      "buttons": []
    },
    {
      "title": "",
      "imagePath":  require("../../assets/img/lesson/Deflection_BS_Simplified_Method/images/sdef4.jpg"),
      "buttons": [
        {
          "name": "Modification factor 1",
          "imagePath": [ require("../../assets/img/lesson/Deflection_BS_Simplified_Method/images/sdef5.jpg")],
          "title": ""
        }
      ]
    },
    {
      "title": "",
      "imagePath":  require("../../assets/img/lesson/Deflection_BS_Simplified_Method/images/sdef6.jpg"),
      "buttons": []
    },
    {
      "title": "(Flow Chart for Simplified Method to Check Deflection",
      "imagePath":  require("../../assets/img/lesson/Deflection_BS_Simplified_Method/images/sdef7.jpg"),
      "buttons": [
        {
          "lessonpageId":"Calculation",
          "name": "Calculation",
          "imagePath": [],
          "isCalc": true,
          "url" : DEFLECTION_SIMPLIFIED_CALCULATION,
          "title": "Span/Depth Ratio to BS8110"
        }
      ]
    }

  ]
}

