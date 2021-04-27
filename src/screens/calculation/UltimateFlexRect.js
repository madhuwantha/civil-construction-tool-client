import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const UltimateFlexRect = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer11, setAnswer11] = useState(0);
  const [answer12, setAnswer12] = useState(0);
  const [answer21, setAnswer21] = useState(0);
  const [answer22, setAnswer22] = useState(0);
  const onSubmit = async data => {
    let ans11 = 0;
    let ans12 = 0;
    let ans21 = 0;
    let ans22 = 0;
    setAnswer11(parseFloat(ans11.toFixed(4)))
    setAnswer12(parseFloat(ans12.toFixed(4)))
    setAnswer21(parseFloat(ans21?.toFixed(4)))
    setAnswer22(ans22)
    setIsSubmit(true)
  }

  return(
    <div className="container col-8 card">
      <p>Rectangular Beam</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <p>Input Panel</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.f && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Ultimate load moment (kNm)</span>
              <div className="input-group-append col-md-2">
                <input name="f" type="number" step="0.00001" className="form-control" aria-describedby="m"
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
            {errors.d && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Depth (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="d" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.dDash && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">d-dash (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="dDash" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.fck && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Cylindrical Strength (Mpa)</span>
              <div className="input-group-append col-md-2">
                <input name="fck" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.fcu && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Cubic Strength (Mpa)</span>
              <div className="input-group-append col-md-2">
                <input name="fcu" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.c && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">c (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="c" type="number" step="0.00001" className="form-control" aria-describedby="m"
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
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th scope="col" > </th>
                  <th scope="col" >Tension</th>
                  <th scope="col" >Compression</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">EC2</th>
                  <td>{answer11}</td>
                  <td>{answer12}</td>
                </tr>
                <tr>
                  <th scope="row">BS</th>
                  <td>{answer21}</td>
                  <td>{answer22}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          : <></>
        }
      </form>
    </div>
  );
}

export default UltimateFlexRect;
