import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const ServiceabilityCWBSI = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [Ecm, setEcm] = useState(0);
  const onSubmit = async data => {
    // console.log(data);
    let ans = await calcWMax(parseFloat(data["corner"]), parseFloat(data["es"]), parseFloat(data["as"]), parseFloat(data["h"]), parseFloat(data["b"]), parseFloat(data["m"]), parseFloat(data["corner"]), parseFloat(data["phi"]))
    setAnswer(ans)
    setIsSubmit(true)
  }

  // Initializations
  // const Ec = 31;
  let Acr = 0;
  let alphaAs = 0;
  let x = 0;
  let Fs = 0;
  let ephsOne = 0;
  let d = 0;
  let ephsM = 0;

  const calcEcm = (fck) => {
    setEcm(
      (Math.pow(10, -8) * Math.pow(fck, 5)) -
      (3.2 * Math.pow(10, -6) * Math.pow(fck, 4)) +
      (0.00038 * Math.pow(fck, 3)) -
      (0.022 * Math.pow(fck, 2)) +
      (0.82 * fck) +
      19
    )
  }

  const calcAcr = (corner, radius) => {
    Acr = Math.sqrt(2) * (corner + radius) - radius;
    console.log(Acr)
  }
  const calcD = (h, corner, phi) => {
    d = h - corner - (phi / 2);
  }

  const calcAlphaAs = (Es, As) => {
    alphaAs = (Es * As) / Ecm;
  }

  // step 1
  const calcX = (h, corner, b) => {
    let sqr = Math.sqrt(Math.pow(alphaAs, 2) + (2 * b * alphaAs * d))
    let xPlus = (-alphaAs + sqr) / b
    let xMin = (-alphaAs - sqr) / b
    if (xPlus > 0 || xPlus === 0) {
      x = xPlus
    } else if (xMin > 0 || xMin === 0) {
      x = xMin
    } else x = 0;
  }

  // step 2
  const calcFs = (M, h, corner, b, Es, As) => {
    Fs = M * Math.pow(10, 6) / ((d - x / 3) * As);
  }

  // step 3
  const calcEphsOne = (h, corner, Es) => {
    ephsOne = ((h - x) * Fs) / ((d - x) * Es);
  }

  // step 4
  const calcEphM = (b, h, Es, As) => {
    ephsM = ephsOne - ((b * Math.pow((h - x), 2)) / (3 * Es * As * (d - x)));
  }

  // step 5
  const calcWMax = (corner, Es, As, h, b, M, cMin, phi) => {
    calcAcr(corner, phi / 2)
    calcD(h, corner, phi)
    calcAlphaAs(Es, As)
    calcX(h, corner, b)
    calcFs(M, h, corner, b, Es, As)
    calcEphsOne(h, corner, Es)
    calcEphM(b, h, Es, As)

    console.log("Ecm = " + Ecm + "Acr = " + Acr + " alphaAs = " + alphaAs + " x = " + x + " Fs = " + Fs + " ephsOne = " + ephsOne + " d = " + d + " ephsM = " + ephsM)

    return (3 * Acr * ephsM * Math.pow(10, -3)) / (1 + 2 * ((Acr - cMin) / (h - x)));
  }

  return (
    <div className="container col-8 card">
      <p>Crack Width Calculation to BS8110</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <p>At first we can consider about the Material Properties</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.fcn && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Strength of concrete (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="fcn" type="number" step="0.00001" className="form-control" aria-describedby="fcn"
                       ref={register({required: true})} onChange={(e) => calcEcm(e.target.value)}/>
              </div>
            </div>
            <p> Short-term modulus of the concrete- E<sub>cm</sub>(kN/mm<sup>2</sup>)</p>
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Short-term modulus of the concrete (kN/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="ecm" value={Ecm} type="number" step="0.0001" className="form-control"
                       aria-describedby="ecm" disabled={true}/>
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
            {errors.es && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Modulus of elasticity of the reinforcement (kN/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="es" type="number" step="0.00001" className="form-control" aria-describedby="es"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Then move to the reinforcement area</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.as && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Tensile reinforcement area of your beam (mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="as" type="number" step="0.00001" className="form-control" aria-describedby="as"
                       ref={register({required: true})}/>
              </div>
            </div>
            {/*{errors.ast && <span>This field is required</span>}*/}
            {/*<div className="input-group mb-3">*/}
            {/*<span className="input-group-text col-md-10" id="strength-concrete">Compression reinforcement area of your beam (mm<sup>2</sup>)</span>*/}
            {/*<div className="input-group-append col-md-2">*/}
            {/*<input name="ast" type="number" step="0.00001" className="form-control" aria-describedby="ast"*/}
            {/*ref={register({required: true})}/>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*{errors.phi && <span>This field is required</span>}*/}
            {/*<div className="input-group mb-3">*/}
            {/*<span className="input-group-text col-md-10" id="strength-concrete">Diameter of the tension reinforcement bar (mm)</span>*/}
            {/*<div className="input-group-append col-md-2">*/}
            {/*<input name="phi" type="number" step="0.00001" className="form-control" aria-describedby="phi"*/}
            {/*ref={register({required: true})}/>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Details of the tension reinforcement bar (mm)</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            <div className="row">
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">bar size-1 mm</span>
                <div className="input-group-append col-md-5">
                  <input name="phi" type="number" step="0.00001" className="form-control" aria-describedby="bar1"
                         ref={register()}/>
                </div>
              </div>
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                <div className="input-group-append col-md-5">
                  <input name="nBar1" type="number" step="0.00001" className="form-control" aria-describedby="nBar1"
                         ref={register()}/>
                </div>
              </div>
            </div>
            {/*row*/}
            <div className="row">
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">bar size-2 mm</span>
                <div className="input-group-append col-md-5">
                  <input name="bar2" type="number" step="0.00001" className="form-control" aria-describedby="bar2"/>
                </div>
              </div>
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                <div className="input-group-append col-md-5">
                  <input name="nBar2" type="number" step="0.00001" className="form-control" aria-describedby="nBar2"/>
                </div>
              </div>
            </div>
            {/*row*/}
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Now details of the section</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.b && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Width of section (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="b" type="number" step="0.00001" className="form-control" aria-describedby="b"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.h && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Depth of section (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="h" type="number" step="0.00001" className="form-control" aria-describedby="h"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.corner && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10"
                    id="strength-concrete">Cover to the reinforcement (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="corner" type="number" step="0.00001" className="form-control" aria-describedby="corner"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Finally moment effect</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.m && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Moment at which crack width is stored (kNm)</span>
              <div className="input-group-append col-md-2">
                <input name="m" type="number" step="0.00001" className="form-control" aria-describedby="m"
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
                <span className="input-group-text col-md-10" id="strength-concrete">Answer</span>
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
  )
}

export default ServiceabilityCWBSI;
