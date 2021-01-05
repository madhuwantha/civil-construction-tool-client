import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const ServiceabilityCWEC = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const onSubmit = async data => {
    console.log(data);
    let ans = await calcWk(parseFloat(data["fck"]), parseFloat(data["Es"]), parseFloat(data["h"]), 930, 40, parseFloat(data["As"]), parseFloat(data["b"]), parseFloat(data["M"]));
    console.log(ans)
    setAnswer(ans)
    setIsSubmit(true)
  }
  const tableValue = {
    "12": "27", "16": "29", "20": "30", "25": "31", "30": "33", "35": "34", "40": "35", "45": "36", "50": "37",
    "55": "38", "60": "39", "70": "41", "80": "42", "90": "44"
  }

  const k1 = 0.8
  const k2 = 0.5
  const k3 = 3.4
  const k4 = 0.425
  const phiInf = 2.8

  let EcEff = 0
  let alphaE = 0
  let cover = 0
  let x = 0
  let z = 0
  let sigma = 0
  let ephSM = 0
  let hCEff = 0
  let ACEff = 0
  let rowPEff = 0
  let sRMax = 0
  let wk = 0

  const calcEcEff = (fck, phiInf) => {
    let Ecm = parseFloat(tableValue[fck.toString()])
    EcEff = Ecm / (1 + phiInf)
  }

  const calcAlphaE = (Es) => {
    alphaE = Es / EcEff
  }

  const calcCover = (h, d, phi) => {
    cover = (h - d) - phi / 2
  }

  // step 1
  const calcX = (As, b, d) => {
    let sqr = Math.sqrt(Math.pow(alphaE, 2) + (2 * b * alphaE * As * d))
    let xPlus = (-alphaE * As + sqr) / b
    let xMin = (-alphaE * As - sqr) / b
    if (xPlus > 0 || xPlus === 0) {
      x = xPlus
    } else if (xMin > 0 || xMin === 0) {
      x = xMin
    } else x = 0;
  }

  // step 2
  const calcZ = (d, x) => {
    z = d - x / 3
  }

  const calcSigma = (m, As) => {
    sigma = m / (z * As)
  }

  // step 3
  const calcEphSM = (Es) => {
    ephSM = sigma / Es * Math.pow(10, 3)
  }

  const calcHCEff = (h, d) => {
    let cond1 = 2.5 * (h - d)
    let cond2 = (h - x) / 3
    let cond3 = h / 2
    hCEff = Math.min(cond1, cond2, cond3)
  }

  const calcACEff = (b) => {
    ACEff = b * hCEff
  }

  const calcRowPEff = (As) => {
    rowPEff = As / ACEff
  }

  // step 4
  const calcSRMax = (phi) => {
    sRMax = (k3 * cover) + (k1 * k2 * k4 * phi) / rowPEff
  }

  // step 5
  const calcWk = (fck, Es, h, d, phi, As, b, m) => {
    calcEcEff(fck)
    calcAlphaE(Es)
    calcCover(h, d, phi)
    calcX(As, b, d)
    calcZ(d)
    calcSigma(m, As)
    calcEphSM(Es)
    calcHCEff(h, d)
    calcACEff(b)
    calcRowPEff(As)
    calcSRMax(phi)

    return (sRMax * ephSM);
  }

  return (
    <div className="container col-9 card">
      <p>Crack Width Calculation to EURO CODE</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <p>At first we can consider about the Material Properties</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.fck && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Strength of concrete (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="fck" type="number" step="0.00001" className="form-control" aria-describedby="fck"
                       ref={register({required: true})}/>
              </div>
            </div>
            <p>Auto identify -> Short-term modulus of the concrete- E<sub>cm</sub>(kN/mm<sup>2</sup>)</p>
            <table className="table">
              <tbody>
              <tr>
                <th>f<sub>ck</sub></th>
                <td>12</td>
                <td>16</td>
                <td>20</td>
                <td>25</td>
                <td>30</td>
                <td>35</td>
                <td>40</td>
                <td>45</td>
                <td>50</td>
                <td>55</td>
                <td>60</td>
                <td>70</td>
                <td>80</td>
                <td>90</td>
              </tr>
              <tr>
                <th>E<sub>cm</sub></th>
                <td>27</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td>33</td>
                <td>34</td>
                <td>35</td>
                <td>36</td>
                <td>37</td>
                <td>38</td>
                <td>39</td>
                <td>41</td>
                <td>42</td>
                <td>44</td>
              </tr>
              </tbody>
            </table>
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
                <input name="As" type="number" step="0.00001" className="form-control" aria-describedby="As"
                       ref={register({required: true})}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Details of the tension reinforcement bar (mm)</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            <div className="row">
              {errors.bar1 && <span>This field is required</span>}
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">bar size-1 mm</span>
                <div className="input-group-append col-md-5">
                  <input name="bar1" type="number" step="0.00001" className="form-control" aria-describedby="bar1"
                         ref={register({required: true})}/>
                </div>
              </div>
              {errors.nBar1 && <span>This field is required</span>}
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                <div className="input-group-append col-md-5">
                  <input name="nBar1" type="number" step="0.00001" className="form-control" aria-describedby="nBar1"
                         ref={register({required: true})}/>
                </div>
              </div>
            </div>
            {/*row*/}
            <div className="row">
              {errors.bar2 && <span>This field is required</span>}
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">bar size-2 mm</span>
                <div className="input-group-append col-md-5">
                  <input name="bar2" type="number" step="0.00001" className="form-control" aria-describedby="bar2"
                         ref={register({required: true})}/>
                </div>
              </div>
              {errors.nBar2 && <span>This field is required</span>}
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">No. of bars</span>
                <div className="input-group-append col-md-5">
                  <input name="nBar2" type="number" step="0.00001" className="form-control" aria-describedby="nBar2"
                         ref={register({required: true})}/>
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
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Finally moment effect</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.M && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Moment at which crack width is stored (kNm)</span>
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
  );
}

export default ServiceabilityCWEC;

