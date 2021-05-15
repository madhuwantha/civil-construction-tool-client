import  React, {useEffect} from 'react';
import MainImageButton from "../components/MainImageButton";
import { LESSON_PAGE,} from "../urls";
import {Row} from "reactstrap";
import {useDispatch,useSelector} from "react-redux";
import {setCurrentCode} from "../store/action/code";
import { FLANGE, RECT} from "../constance/code";
import {setCurrentLesson} from "../store/action/lessonPage";
import {CALCULATION} from "../constance/method";
import {removeCalculation, setCurrentCalculation} from "../store/action/calculationPage";


function BeamSelection(props){
  const method = useSelector(state => state.method.currentMethod)
  const [redirect, redirectUrl] = useSelector(state => [state.calculationPage.redirect, state.calculationPage.redirectUrl])
  const dispatch = useDispatch();


  useEffect(() => {
    if (redirect){
      props.history.push(redirectUrl)
      dispatch(removeCalculation())
    }
  },[redirect,dispatch,props.history]);

  return(
    <Row className="justify-content-center">
      <MainImageButton image={require('../assets/img/ultimate/beam_selection/flange.png')}
                       click={() =>{
                         dispatch(setCurrentCode(FLANGE));
                         dispatch(setCurrentCalculation());
                       }}
                       class="col-md-4"/>
      <MainImageButton image={require('../assets/img/ultimate/beam_selection/rect.png')}
                       click={() =>{
                         dispatch(setCurrentCode(RECT));
                         dispatch(setCurrentCalculation());
                       }}
                       class="col-md-4"/>
    </Row>
  );
}

export default BeamSelection;
