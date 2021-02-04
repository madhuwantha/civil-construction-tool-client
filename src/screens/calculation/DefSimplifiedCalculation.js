import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {calcAllow, calcTrue} from "./CalculationDefSimplified"

const DefSimplifiedCalculation = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [allowable, setAnswer] = useState(0);
  const [actual, setActual] = useState(0);

  const onSubmit = async data => {
    let basicRation = [7, 20, 26, 5.6, 16, 20.8]
    let provBasicRation = basicRation[parseInt(data["no"]) -1 ]
    let allowable = await calcAllow(provBasicRation, parseFloat(data["M"]), parseFloat(data["b"]), parseFloat(data["d"]),
      parseFloat(data["asDash"]), parseFloat(data["fy"]), parseFloat(data["as"]), parseFloat(data["fcu"]), parseFloat(data["dDash"]))
    let actual = await calcTrue(parseFloat(data["L"]), parseFloat(data["d"]))
    setAnswer(parseFloat(allowable.toFixed(4)))
    setActual(parseFloat(actual.toFixed(4)))
    setIsSubmit(true)
  }

  return (
    <div className="container col-8 card">
      <p>Span/Depth Ratio to BS8110</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.no && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Select the type of the beam and enter the number</span>
              <div className="input-group-append col-md-2">
                <input name="no" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            <table align={"center"} className="table table-striped">
              <tbody>
              <tr>
                <td>Rectangular Cantilever Beam</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Rectangular Simply Supported Beam</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Rectangular Continuous Beam</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Flanged Cantilever Beam</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Flanged Simply Supported Beam</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Flanged Continuous Beam</td>
                <td>6</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Then move to the reinforcement area</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.M && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Bending moment (kNm)</span>
              <div className="input-group-append col-md-2">
                <input name="M" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.fcu && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Characteristic strength of concrete (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="fcu" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.b && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Effective width (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="b" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.fy && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10"
                    id="strength-concrete">Yield strength of reinforcement (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="fy" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.d && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Effective depth of the tension reinforcement (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="d" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.dDash && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Depth to the compression reinforcement (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="dDash" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.asDash && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Provided compression reinforcement area (mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="asDash" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.as && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Provided tension reinforcement area (mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="as" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.L && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Effective length (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="L" type="number" step="0.00001" className="form-control" aria-describedby="as"
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
          ? <div className="col-12 lesson-image-container">
            <p>Final Answer</p>
            <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
              <div className="input-group mb-3">
                <span className="input-group-text col-md-10" id="strength-concrete">Allowable (span/effective depth) Ratio</span>
                <div className="input-group-append col-md-2">
                  <input name="" value={allowable} type="number" step="0.00001" className="form-control"
                         aria-describedby="strength-concrete"
                         disabled={true}/>
                </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text col-md-10"
                      id="strength-concrete">Actual (span/effective depth) Ratio</span>
                <div className="input-group-append col-md-2">
                  <input name="" value={actual} type="number" step="0.00001" className="form-control"
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

export default DefSimplifiedCalculation;
