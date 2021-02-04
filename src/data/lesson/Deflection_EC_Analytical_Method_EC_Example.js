export default {
  "pageTitle": "",
  "images": [
    {
      "title": "Work-Out Example",
      "imagePath": require("../../assets/img/lesson/Deflection_EC_Analytical_Method_EC_Example/images/EC2_crack_analy_workout1.jpg"),
      "buttons": []
    },
    {
      "title": "",
      "imagePath": require("../../assets/img/lesson/Deflection_EC_Analytical_Method_EC_Example/images/EC2_crack_analy_workout2.jpg"),
      "buttons": [
        {
          "name": "More Explanation",
          "imagePath": [require("../../assets/img/lesson/Deflection_EC_Analytical_Method_EC_Example/images/xx.jpg")],
          "title": ""
        }
      ],
      "inputs":[
        {
          "question":"(1/r)_uc",
          "answer":"0.00000286",
          "range":"0.0000028 0.0000029",
          "unit":"/mm"
        }
      ]
    },
    {
      "title": "",
      "imagePath": require("../../assets/img/lesson/Deflection_EC_Analytical_Method_EC_Example/images/EC2_crack_analy_workout3.jpg"),
      "buttons": [],
      "inputs":[
        {
          "question":"(1/r)_cr",
          "answer":"0.0000030767",
          "range":"0.0000029 0.0000031",
          "unit":"/mm"
        },
        {
          "question":"1/r",
          "answer":"0.000003064",
          "range":"0.000003 0.0000031",
          "unit":"/mm"
        },        {
          "question":"a",
          "answer":"28.759",
          "range":"28.75 28.76",
          "unit":"mm"
        }
      ]
    }
  ]
}
