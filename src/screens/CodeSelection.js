import  React from 'react';
import MainImageButton from "../components/MainImageButton";
import {SERVICEABILITY_CONTENT_URL, ULTIMATE_URL} from "../urls";
import {Row} from "reactstrap";
import {useDispatch} from "react-redux";
import {setCurrentCode} from "../store/action/code";
import {BSI, EC} from "../constance/code";


function CodeSelect(props){
  const dispatch = useDispatch();
  return(
    <Row className="justify-content-center">
      <MainImageButton image={require('../assets/img/serviceability/code_selection/BS.jpg')}
                       click={() =>{
                         dispatch(setCurrentCode(BSI));
                         props.history.push(SERVICEABILITY_CONTENT_URL)
                       }}
                       class="col-md-4"/>
      <MainImageButton image={require('../assets/img/serviceability/code_selection/eurocode.jpg')}
                       click={() =>{
                         dispatch(setCurrentCode(EC));
                         props.history.push(ULTIMATE_URL)
                       }}
                       class="col-md-4"/>
    </Row>
  );
}

export default CodeSelect;
