import React, {useState,useEffect} from "react";
import LessonImage from "../components/LessonImage";
import {Row} from "reactstrap";
import * as lesson from '../data/lesson/lesson'
import { useSelector } from 'react-redux';



const  LessonsScreen = (props) => {
  let [data,setData] = useState([]);

  /**
   * The  variable name for getting correct
   * JSON object for a lesson from the "../data/lesson/lesson"
   *
   * All the variable names are defined in the "src/constance/dataFiles.js"
   */
  const path = useSelector(state => state.lessonPage.currentLesson)

  useEffect(() => {
    console.log(data);
    console.log(path);

  },[data,path])

  useEffect(()=> {
    if (path !== null && path !== ""){

      /**
       * Getting the correct JSON object for a lesson
       */

      let currentLesson = lesson[path];
      if (currentLesson){
        currentLesson
          .then(d => {
            console.log(d.default.images);
            setData(d.default.images);
          }).catch((e) => {
          console.log(e);
        })
      }
    }
  },[path])

  return(
    <Row className="container-fluid">
      {data !== null
        ?data.map((image,idx)=>{
        return(
          <LessonImage {...props} key={idx} img={image}/>
        );
      })
        :<div>Loading</div>
      }
    </Row>
  );
};


export default LessonsScreen;


