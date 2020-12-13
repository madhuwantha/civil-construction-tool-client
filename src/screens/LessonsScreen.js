import React, {useState,useEffect} from "react";
import LessonImage from "../components/LessonImage";
import {Row} from "reactstrap";
import * as lesson from '../data/lesson/lesson'
import { useSelector } from 'react-redux';



const  LessonsScreen = (props) => {
  let [data,setData] = useState([]);
  const path = useSelector(state => state.lessonPage.currentLesson)


  useEffect(()=> {
    lesson[path]
      .then(d => {
        setData(d.default.images);
      }).catch((e) => {
      console.log(e);
    })
  },[path])

  return(
    <Row className="container-fluid">
      {data.map((image,idx)=>{
        return(
          <LessonImage {...props} key={idx} img={image}/>
        );
      })}
    </Row>
  );
};


export default LessonsScreen;


