import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const UltimateFlexFlange = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer11, setAnswer11] = useState(0);
  const [answer21, setAnswer21] = useState(0);
  const onSubmit = async data => {
    let ans11 = 0;
    let ans21 = 0;
    setAnswer11(parseFloat(ans11.toFixed(4)))
    setAnswer21(parseFloat(ans21?.toFixed(4)))
    setIsSubmit(true)
  }

  return(
    <div className="container col-8 card">
      <p>Flange Beam</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <p>Input Panel</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.f && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Width of flange by relevant code</span>
              <div className="input-group-append col-md-2">
                <select className="form-control" aria-describedby="m">
                  <option>Select</option>
                  <option>BS</option>
                  <option>EC2</option>
                </select>
              </div>
            </div>
            {errors.b && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Ultimate load moment (kNm)</span>
              <div className="input-group-append col-md-2">
                <input name="b" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.bw && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Width of web (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="bw" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.hf && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Depth of flange (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="hf" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.l && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Span (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="l" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.fck && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Cylindrical Strength of Concrete (Mpa)</span>
              <div className="input-group-append col-md-2">
                <input name="fck" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.fcu && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Cubic strength of concrete (MPa)</span>
              <div className="input-group-append col-md-2">
                <input name="fcu" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.cDash && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">c-dash (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="cDash" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.fyk && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">fyk (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="fyk" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            <div className="col">
              <input name="" value="Calculate" className="btn btn-primary lesson-button" type="submit"/>
            </div>
          </div>
        </div>

        {isSubmit
          ?
          <div className="col-12 lesson-image-container">
            <p>Output Panel</p>
            <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
              <div className="input-group mb-3">
                <span className="input-group-text col-md-10" id="strength-concrete">EC2</span>
                <div className="input-group-append col-md-2">
                  <input name="" value={answer11} type="number" step="0.00001" className="form-control"
                         aria-describedby="strength-concrete"
                         disabled={true}/>
                </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text col-md-10"
                      id="strength-concrete">BS8110</span>
                <div className="input-group-append col-md-2">
                  <input name="" value={answer21} type="number" step="0.00001" className="form-control"
                         aria-describedby="strength-concrete"
                         disabled={true}/>
                </div>
              </div>

            </div>
          </div>
          : <></>
        }
      </form>
    </div>
  );
}

export default UltimateFlexFlange;
