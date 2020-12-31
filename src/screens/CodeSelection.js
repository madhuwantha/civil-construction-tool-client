import React, {useEffect} from 'react';
import MainImageButton from "../components/MainImageButton";
import {LESSON_PAGE,} from "../urls";
import {Row} from "reactstrap";
import {useDispatch,useSelector} from "react-redux";
import {setCurrentCode} from "../store/action/code";
import {BSI, EC} from "../constance/code";
import {setCurrentLesson} from "../store/action/lessonPage";
import {CALCULATION} from "../constance/method";
import {removeCalculation, setCurrentCalculation} from "../store/action/calculationPage";


function CodeSelect(props){
  const method = useSelector(state => state.method.currentMethod)
  const [redirect, redirectUrl] = useSelector(state => [state.calculationPage.redirect, state.calculationPage.redirectUrl])
  let currentLimitState  = useSelector(state => state.limitState.currentLimitState)
  const dispatch = useDispatch();


  useEffect(() => {
    if (redirect){
      props.history.push(redirectUrl)
      dispatch(removeCalculation())
    }
    console.log(redirect+"redirect")
  },[redirect]);


  return(
    <Row className="justify-content-center">
      <MainImageButton image={require('../assets/img/serviceability/code_selection/BS.jpeg')}
                       click={() =>{
                         dispatch(setCurrentCode(BSI));
                         if (method === CALCULATION){
                            dispatch(setCurrentCalculation());
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
                           dispatch(setCurrentCalculation());
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
