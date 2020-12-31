import  React from 'react';
import MainImageButton from "../components/MainImageButton";
import {LESSON_PAGE,} from "../urls";
import {Row} from "reactstrap";
import {useDispatch,useSelector} from "react-redux";
import {setCurrentCode} from "../store/action/code";
import {BSI, EC} from "../constance/code";
import {setCurrentLesson} from "../store/action/lessonPage";
import {CALCULATION} from "../constance/method";


function CodeSelect(props){
  const method = useSelector(state => state.method.currentMethod)
  const dispatch = useDispatch();
  return(
    <Row className="justify-content-center">
      <MainImageButton image={require('../assets/img/serviceability/code_selection/BS.jpeg')}
                       click={() =>{
                         dispatch(setCurrentCode(BSI));
                         if (method === CALCULATION){

                         }else {
                           dispatch(setCurrentLesson());
                           props.history.push(LESSON_PAGE)
                         }
                       }}
                       class="col-md-4"/>
      <MainImageButton image={require('../assets/img/serviceability/code_selection/eurocode.jpg')}
                       click={() =>{
                         dispatch(setCurrentCode(EC));
                         if (method === CALCULATION){

                         }else {
                           dispatch(setCurrentLesson());
                           props.history.push(LESSON_PAGE)
                         }
                       }}
                       class="col-md-4"/>
    </Row>
  );
}

export default CodeSelect;
