import {CRACK_WIDTH_ANALYTICAL_METHOD_EC, CRACK_WIDTH_SIMPLIFIED_METHOD_EC} from "../../constance/dataFiles";

export default {
  "pageTitle": "",
  "images": [
    {
      "title": "Maximum Allowable Crack Width According to EURO CODE",
      "imagePath":  require("../../assets/img/lesson/Learn_How_to_Calulate_Crack_Width_EC/images/EC2_crack_genaral1.jpg"),
      "buttons": []
    },
    {
      "title": "",
      "imagePath":  require("../../assets/img/lesson/Learn_How_to_Calulate_Crack_Width_EC/images/EC2_crack_genaral2.jpg"),
      "buttons": [
        {
          "name": "Exposure Classes",
          "imagePath": [ require("../../assets/img/lesson/Learn_How_to_Calulate_Crack_Width_EC/images/EC2_crack_genaral4.jpg")],
          "title": ""
        }
      ]
    },
    {
      "title": "",
      "imagePath": "",
      "buttons": [
        {
          "lessonpageId":CRACK_WIDTH_ANALYTICAL_METHOD_EC,
          "name": "Analytical Method",
          "imagePath": [],
          "title": ""
        },
        {
          "lessonpageId":CRACK_WIDTH_SIMPLIFIED_METHOD_EC,
          "name": "Simplified Method",
          "imagePath": [],
          "title": ""
        }
      ]
    }
  ]
}
