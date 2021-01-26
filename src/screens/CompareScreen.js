import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {calcEcmEC, calcDef, calcWk} from "./calculation/CalculationsEC";
import {calcEcmBSI, calcA, calcWMax} from "./calculation/CalculationsBSI";

const ServiceabilityCWEC = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [EcmBSI, setEcmBSI] = useState(0);
  const [EcmEC, setEcmEC] = useState(0);
  const [ansCBSI, setAnsCBSI] = useState(0);
  const [ansDBSI, setAnsDBSI] = useState(0);
  const [ansCEC, setAnsCEC] = useState(0);
  const [ansDEC, setAnsDEC] = useState(0);

  const onSubmit = async data => {
    let ansCBSI = calcWMax(parseFloat(data["c"]), parseFloat(data["Es"]), parseFloat(data["AsT"]),
      parseFloat(data["h"]), parseFloat(data["b"]), parseFloat(data["M"]), parseFloat(data['bar1T']))
    let ansDBSI = calcA( parseFloat(data["h"]), parseFloat(data["c"]), parseFloat(data["bar1C"]), parseFloat(data["nBar1C"]),
      parseFloat(data["Es"]), parseFloat(data["AsC"]), parseFloat(data["b"]), parseFloat(data["M"]), parseFloat(data["l"]))
    let ansCEC = calcWk(parseFloat(data["fck"]), parseFloat(data["Es"]), parseFloat(data["h"]),
      parseFloat(data["bar1T"]),  parseFloat(data["AsT"]),parseFloat(data["b"]),   parseFloat(data["M"]), parseFloat(data["nBar1T"]),parseFloat(data["c"]) )
    let ansDEC = calcDef(parseFloat(data["fck"]), parseFloat(data["Es"]), parseFloat(data["AsC"]), parseFloat(data["b"]), parseFloat(data["h"]),
      parseFloat(data["c"]), parseFloat(data["bar1C"]), parseFloat(data["M"]), parseFloat(data["l"]), [parseFloat(data["nBar1C"])])
    setAnsCBSI(ansCBSI);
    setAnsDBSI(ansDBSI);
    setAnsCEC(ansCEC);
    setAnsDEC(ansDEC);
    setIsSubmit(true)
  }

  const onChange = (val) => {
    setEcmBSI(calcEcmBSI(val))
    setEcmEC(calcEcmEC(val))
  }

  return (
    <div className="container col-9 card">
      <p>Compare Crack Width & Deflection </p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <p>Material Properties</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.fck && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Strength of concrete (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="fck" type="number" step="0.00001" className="form-control" aria-describedby="fck"
                       ref={register({required: true})} onChange={(e) =>onChange(e.target.value)}/>
              </div>
            </div>

            {errors.fy && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Tensile strength of reinforcement (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="fy" type="number" step="0.00001" className="form-control" aria-describedby="fy"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.Es && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Modulus of elasticity of the reinforcement (kN/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="Es" type="number" step="0.00001" className="form-control" aria-describedby="Es"
                       ref={register({required: true})} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Reinforcement Details </p>
          <div className="row">
            <div style={{"border": "1px solid black"}} className="col-6 lesson-image-container">
              <p>Details of Tension</p>
              <div className="row">
                <div className="input-group mb-3 col">
                  <span className="input-group-text col-md-7" id="strength-concrete">bar size-1 mm</span>
                  <div className="input-group-append col-md-5">
                    <input name="bar1T" type="number" step="0.00001" className="form-control" aria-describedby="bar1T"
                           ref={register()}/>
                  </div>
                </div>
                <div className="input-group mb-3 col">
                  <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                  <div className="input-group-append col-md-5">
                    <input name="nBar1T" type="number" step="0.00001" className="form-control" aria-describedby="nBar1T"
                           ref={register()}/>
                  </div>
                </div>
              </div>
              {/*row*/}
              <div className="row">
                <div className="input-group mb-3 col">
                  <span className="input-group-text col-md-7" id="strength-concrete">bar size-2 mm</span>
                  <div className="input-group-append col-md-5">
                    <input name="bar2T" type="number" step="0.00001" className="form-control" aria-describedby="bar2T"/>
                  </div>
                </div>
                <div className="input-group mb-3 col">
                  <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                  <div className="input-group-append col-md-5">
                    <input name="nBar2T" type="number" step="0.00001" className="form-control" aria-describedby="nBar2T"/>
                  </div>
                </div>
              </div>
              {/*row*/}
              {errors.AsT && <span>This field is required</span>}
              <div className="input-group mb-3">
                <span className="input-group-text col-md-9" id="strength-concrete">Tensile reinforcement area of your beam (N/mm<sup>2</sup>)</span>
                <div className="input-group-append col-md-3">
                  <input name="AsT" type="number" step="0.00001" className="form-control" aria-describedby="AsT"
                         ref={register({required: true})}/>
                </div>
              </div>
            </div>
            <div style={{"border": "1px solid black"}} className="col-6 lesson-image-container">
              <p>Details of Compression</p>
              <div className="row">
                <div className="input-group mb-3 col">
                  <span className="input-group-text col-md-7" id="strength-concrete">bar size-1 mm</span>
                  <div className="input-group-append col-md-5">
                    <input name="bar1C" type="number" step="0.00001" className="form-control" aria-describedby="bar1C"
                           ref={register()}/>
                  </div>
                </div>
                <div className="input-group mb-3 col">
                  <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                  <div className="input-group-append col-md-5">
                    <input name="nBar1C" type="number" step="0.00001" className="form-control" aria-describedby="nBar1C"
                           ref={register()}/>
                  </div>
                </div>
              </div>
              {/*row*/}
              <div className="row">
                <div className="input-group mb-3 col">
                  <span className="input-group-text col-md-7" id="strength-concrete">bar size-2 mm</span>
                  <div className="input-group-append col-md-5">
                    <input name="bar2C" type="number" step="0.00001" className="form-control" aria-describedby="bar2C"/>
                  </div>
                </div>
                <div className="input-group mb-3 col">
                  <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                  <div className="input-group-append col-md-5">
                    <input name="nBar2C" type="number" step="0.00001" className="form-control" aria-describedby="nBar2C"/>
                  </div>
                </div>
              </div>
              {/*row*/}
              {errors.AsC && <span>This field is required</span>}
              <div className="input-group mb-3">
                <span className="input-group-text col-md-9" id="strength-concrete">Compression reinforcement area of your beam (N/mm<sup>2</sup>)</span>
                <div className="input-group-append col-md-3">
                  <input name="AsC" type="number" step="0.00001" className="form-control" aria-describedby="AsC"
                         ref={register({required: true})}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Section Properties</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.b && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Width of selection (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="b" type="number" step="0.00001" className="form-control" aria-describedby="b"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.h && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Depth of selection (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="h" type="number" step="0.00001" className="form-control" aria-describedby="h"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.c && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Cover of the reinforcement (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="c" type="number" step="0.00001" className="form-control" aria-describedby="c"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.l && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Length of the beam (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="l" type="number" step="0.00001" className="form-control" aria-describedby="l"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Moment Effect</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.M && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Moment of the section (kNm)</span>
              <div className="input-group-append col-md-2">
                <input name="M" type="number" step="0.00001" className="form-control" aria-describedby="M"
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
          <table className={"table"}>
            <th> </th>
            <th>Crack Width (mm)</th>
            <th>Deflection (mm)</th>
            <tr>
              <th>BS8110</th>
              <td>{ansCBSI}</td>
              <td>{ansDBSI}</td>
            </tr>
            <tr>
              <th>EC2</th>
              <td>{ansCEC}</td>
              <td>{ansDEC}</td>
            </tr>
          </table>
          : <></>
        }
      </form>
    </div>
  );
}

export default ServiceabilityCWEC;

