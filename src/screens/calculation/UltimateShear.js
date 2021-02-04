import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const UltimateShear = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const onSubmit = async data => {
    let ans = 0;
    setAnswer(ans)
    setIsSubmit(true)
  }

  return(
    <div className="container col-8 card">
      <p>Shear Capacity and Shear Reinforcement Calculator</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <p>Beam Dimensions</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.b && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Breadth (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="b" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.b && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Breadth (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="b" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        {isSubmit
          ? <div className="col-12 lesson-image-container">
            <p>Final Answer</p>
            <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
              <div className="input-group mb-3">
                <span className="input-group-text col-md-10" id="strength-concrete">Allowable (span/effective depth) Ratio</span>
                <div className="input-group-append col-md-2">
                  <input name="" value={answer} type="number" step="0.00001" className="form-control"
                         aria-describedby="strength-concrete"
                         disabled={true}/>
                </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text col-md-10"
                      id="strength-concrete">Actual (span/effective depth) Ratio</span>
                <div className="input-group-append col-md-2">
                  <input name="" value={answer} type="number" step="0.00001" className="form-control"
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

export default UltimateShear;
