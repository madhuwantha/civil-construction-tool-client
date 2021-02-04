import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {calcShearCapacity, calcSpacing} from "./CalculationUltimateShear";

const UltimateShear = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer11, setAnswer11] = useState(0);
  const [answer12, setAnswer12] = useState(0);
  const [answer13, setAnswer13] = useState(0);
  const [answer21, setAnswer21] = useState(0);
  const [answer22, setAnswer22] = useState(0);
  const [answer23, setAnswer23] = useState(0);
  const onSubmit = async data => {
    let ans11 = await calcShearCapacity(parseFloat(data["v"]), parseFloat(data["b"]), parseFloat(data["d"]));
    let ans12 = await calcSpacing(parseFloat(data["fyv"]), parseFloat(data["b"]),
      parseFloat(data["sc"]), parseFloat(data["vc"]), parseFloat(data["fcu"]),parseFloat(data["d"]),parseFloat(data["v"]))
    let ans13 = 150;
    let ans21 = 0;
    let ans22 = 0;
    let ans23 = 0;
    setAnswer11(ans11)
    setAnswer12(ans12)
    setAnswer13(ans13)
    setAnswer21(ans21)
    setAnswer22(ans22)
    setAnswer23(ans23)
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
            {errors.d && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Effective Depth (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="d" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lesson-image-container">
          <p>Concrete</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
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
              <span className="input-group-text col-md-10" id="strength-concrete">Cubic Strength (MPa)</span>
              <div className="input-group-append col-md-2">
                <input name="fcu" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lesson-image-container">
          <p>Loading Details</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.v && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">D. Shear Force (kN)</span>
              <div className="input-group-append col-md-2">
                <input name="v" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.M && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Moment (kNm)</span>
              <div className="input-group-append col-md-2">
                <input name="M" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lesson-image-container">
          <p>Strength of r/f</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.fy && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">f <sub>y</sub> (MPa)</span>
              <div className="input-group-append col-md-2">
                <input name="fy" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.fyv && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">f <sub>yv</sub> (MPa)</span>
              <div className="input-group-append col-md-2">
                <input name="fyv" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lesson-image-container">
          <p>Reinforcement</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.As && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Tensile r/f (mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="As" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.Asv && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Shear r/f (mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="Asv" type="number" step="0.00001" className="form-control" aria-describedby="m"
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
          <table className="table table-bordered">
            <thead>
            <tr>
              <th scope="col" rowSpan={2}> </th>
              <th scope="col" rowSpan={2}>Shear Capacity (kN)</th>
              <th scope="col" colSpan={2}>Spacing of Shear r/f (mm)</th>
            </tr>
            <tr>
              <th scope="col">Spacing for design shear r/f</th>
              <th scope="col">Spacing for minimum shear r/f</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">BS</th>
              <td>{answer11}</td>
              <td>{answer12}</td>
              <td>{answer13}</td>
            </tr>
            <tr>
              <th scope="row">EC</th>
              <td>{answer21}</td>
              <td>{answer22}</td>
              <td>{answer23}</td>
            </tr>
            </tbody>
          </table>
          : <></>
        }
      </form>
    </div>
  );
}

export default UltimateShear;
