import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const ServiceabilityDFEC = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [Ecm, setEcm] = useState(0);
  const onSubmit = async data => {
    let ans = await calcDef(parseFloat(data["Es"]), parseFloat(data["As"]), parseFloat(data["b"]), parseFloat(data["h"]), parseFloat(data["c"]), parseFloat(data["bar1"]), parseFloat(data["M"]), parseFloat(data["l"]), parseFloat(data["nBar1"]))
    setAnswer(ans)
    setIsSubmit(true)
    console.log(parseFloat(data["Es"])+'  '+parseFloat(data["As"])+'  '+parseFloat(data["b"])+'   '+parseFloat(data["h"])+'  '+ parseFloat(data["c"])+'   '+parseFloat(data["bar1"])+'   '+parseFloat(data["M"])+'  '+ parseFloat(data["l"])+'  '+parseFloat(data["nBar1"]))
    // console.log(' EcEff' + EcEff + 'alphaAs' + alphaAs + 'Iuc' + Iuc + 'Icr' + Icr + 'x' + x + 'd' + d + 'gammaUC' + gammaUC + 'gammaCR' + gammaCR + 'mcr' + mcr + 'sy' + sy + 'gamma' + gamma)
  }

  const calcEcm = (fck) => {
    setEcm(
      (7.6 * Math.pow(10, -10) * Math.pow(fck, 6)) -
      (2.1 * Math.pow(10, -6) * Math.pow(fck, 4)) -
      (0.00097 * Math.pow(fck, 3)) +
      (0.018 * Math.pow(fck, 2)) +
      0.26 * fck +
      23
    )
  }

  // fck, fy, Es, As, bar1, nBar1, b, h, c, l, M,
  const beta = 0.5
  const fctm = 2.6
  const k = 0.104
  const phi_inf = 2.8

  let EcEff = 0
  let alphaAs = 0
  let Iuc = 0
  let Icr = 0
  let x = 0
  let d = 0
  let gammaUC = 0
  let gammaCR = 0
  let mcr = 0
  let sy = 0
  let gamma = 0

  const calcEcEff = () => {
    EcEff = Ecm / (1 + phi_inf)
  }

  const calcAlphaAs = (Es, As) => {
    alphaAs = (Es * As) / EcEff
  }

  const calcIuc = (b, h) => {
    Iuc = (b * Math.pow(h, 3)) / 12
  }

  const calcD = (h, c, phi, nBar) => {
    if (nBar < 3 || nBar === 3) {
      d = h - c - phi / 2
    } else {
      d = h - (3 * c) / 2 - phi
    }
  }

  //step 1

  const calcGammaUC = (M) => {
    gammaUC = M / (EcEff * Iuc)
  }

  //step 2

  const calcX = (b) => {
    let sqr = Math.sqrt(Math.pow(alphaAs, 2) + 2 * b * alphaAs * d)
    x = (-alphaAs + sqr) / b
  }

  const calcIcr = (b) => {
    Icr = (b * Math.pow(x, 3)) / 3
  }

  const calcGammaCR = (M) => {
    gammaCR = M / (EcEff * Icr)
  }

  //step 3
  const calcMcr = (b, h) => {
    mcr = fctm * (b * Math.pow(h, 2) / 6)
  }

  const calcSy = (M) => {
    sy = 1 - beta * Math.pow((mcr / M), 2)
  }

  const calcGamma = () => {
    gamma = (sy * gammaCR) + (1 - sy) * gammaUC
  }

  //step 4
  const calcDef = (Es, As, b, h, c, phi, M, l, nBar) => {
    calcEcEff()
    calcAlphaAs(Es, As)
    calcIuc(b, h)
    calcD(h, c, phi, nBar)
    calcGammaUC(M)
    calcX(b)
    calcIcr(b)
    calcGammaCR(M)
    calcMcr(b, h)
    calcSy(M)
    calcGamma()
    return k * Math.pow(l, 2) * gamma * Math.pow(10, 6)
  }


  return (
    <div className="container col-9 card">
      <p>Deflection Calculation to Euro Code</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>

        <div className="col-12 lesson-image-container">
          <p>At first we can consider about the Material Properties</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.fck && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Strength of concrete (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="fck" type="number" step="0.0001" className="form-control" aria-describedby="fck"
                       ref={register({required: true})} onChange={(e) => calcEcm(e.target.value)}/>
              </div>
            </div>
            <p>Auto identify -> Short-term modulus of the concrete- E<sub>cm</sub>(kN/mm<sup>2</sup>)</p>
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
                <input name="fy" type="number" step="0.0001" className="form-control" aria-describedby="fy"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.Es && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Modulus of elasticity of the reinforcement (kN/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="Es" type="number" step="0.0001" className="form-control" aria-describedby="Es"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Then move to the reinforcement area</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.As && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Tensile reinforcement area of your beam (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="As" type="number" step="0.0001" className="form-control" aria-describedby="As"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Details of the tension reinforcement bar (mm)</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            <div className="row">
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">bar size-1 mm</span>
                <div className="input-group-append col-md-5">
                  <input name="bar1" type="number" step="0.0001" className="form-control" aria-describedby="bar1"
                         ref={register()}/>
                </div>
              </div>
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                <div className="input-group-append col-md-5">
                  <input name="nBar1" type="number" step="0.0001" className="form-control" aria-describedby="nBar1"
                         ref={register()}/>
                </div>
              </div>
            </div>
            {/*row*/}
            <div className="row">
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">bar size-2 mm</span>
                <div className="input-group-append col-md-5">
                  <input name="bar2" type="number" step="0.0001" className="form-control" aria-describedby="bar2"/>
                </div>
              </div>
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                <div className="input-group-append col-md-5">
                  <input name="nBar2" type="number" step="0.0001" className="form-control" aria-describedby="nBar2"/>
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
              <span className="input-group-text col-md-10" id="strength-concrete">Width of selection (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="b" type="number" step="0.0001" className="form-control" aria-describedby="b"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.h && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Depth of selection (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="h" type="number" step="0.0001" className="form-control" aria-describedby="h"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.c && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Cover of the reinforcement (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="c" type="number" step="0.0001" className="form-control" aria-describedby="c"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.l && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Length of the beam (mm)</span>
              <div className="input-group-append col-md-2">
                <input name="l" type="number" step="0.0001" className="form-control" aria-describedby="l"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Finally moment effect</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.M && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Moment of the section (kNm)</span>
              <div className="input-group-append col-md-2">
                <input name="M" type="number" step="0.0001" className="form-control" aria-describedby="M"
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
                  <input name="" value={answer} type="number" step="0.0001" className="form-control"
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

export default ServiceabilityDFEC
