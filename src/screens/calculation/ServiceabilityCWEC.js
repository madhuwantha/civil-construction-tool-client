import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {calcEcmEC, calcWk} from "./CalculationsEC";
import {getPdf, savePdf} from "../../helpers/pdf";
import {degrees, rgb} from "pdf-lib";

const ServiceabilityCWEC = (props) => {


  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [Ecm, setEcm] = useState(0);
  const [pdf, setPdf] = useState(null);


  const onSubmit = async data => {
    let ans = await calcWk(parseFloat(data["fck"]), parseFloat(data["Es"]), parseFloat(data["h"]), parseFloat(data["bar1"]), parseFloat(data["As"]), parseFloat(data["b"]), parseFloat(data["M"]), parseFloat(data["nBar1"]), parseFloat(data["c"]));
    let subAnswer = ans["subAnswer"];
    let a = ans["mainAnswer"].toFixed(4);
    setAnswer(parseFloat(a))

    setIsSubmit(true)

    let x = subAnswer["x"].toFixed(4);
    let d = subAnswer["d"].toFixed(4);
    let sigma = subAnswer["sigma"].toFixed(4);
    let rowPEff = subAnswer["rowPEff"].toFixed(4);
    let sRMax = subAnswer["sRMax"].toFixed(4);

    const pdfDoc = await getPdf('crack_width_EC2_work_sheet.pdf');
    const page = pdfDoc.getPage(0);

    page.drawText( x+"", {
      x:60,
      y:514,
      size: 12,
      color: rgb(0,0,0)
    })
    page.drawText( d+"", {
      x:170,
      y:439,
      size: 12,
      color: rgb(0,0,0)
    })
    page.drawText( sigma+"", {
      x:120,
      y:389,
      size: 12,
      color: rgb(0,0,0)
    })
    page.drawText( rowPEff+"", {
      x:154,
      y:282,
      size: 12,
      color: rgb(0,0,0)
    })
    page.drawText( sRMax+"", {
      x:94,
      y:168,
      size: 12,
      color: rgb(0,0,0)
    })
    page.drawText( a+"", {
      x:234,
      y:48,
      size: 12,
      color: rgb(0,0,0)
    })

    setPdf(await savePdf(pdfDoc));
  }

  // useEffect(async () => {
  //   let subAnswer = {
  //     "x": 10,
  //     "d": 5,
  //     "sigma": 15,
  //     "rowPEff": 555,
  //     "sRMax": 51
  //   };
  //   let x = subAnswer["x"];
  //   let d = subAnswer["d"];
  //   let sigma = subAnswer["sigma"];
  //   let rowPEff = subAnswer["rowPEff"];
  //   let sRMax = subAnswer["sRMax"];
  //
  //   const pdfDoc = await getPdf('crack_width_EC2_work_sheet.pdf');
  //   const page = pdfDoc.getPage(0);
  //
  //   page.drawText( x+"", {
  //     x:60,
  //     y:514,
  //     size: 12,
  //     color: rgb(0,0,0)
  //   })
  //   page.drawText( d+"", {
  //     x:170,
  //     y:439,
  //     size: 12,
  //     color: rgb(0,0,0)
  //   })
  //   page.drawText( sigma+"", {
  //     x:120,
  //     y:389,
  //     size: 12,
  //     color: rgb(0,0,0)
  //   })
  //   page.drawText( rowPEff+"", {
  //     x:154,
  //     y:282,
  //     size: 12,
  //     color: rgb(0,0,0)
  //   })
  //   page.drawText( sRMax+"", {
  //     x:94,
  //     y:168,
  //     size: 12,
  //     color: rgb(0,0,0)
  //   })
  //   page.drawText( 100+"", {
  //     x:234,
  //     y:48,
  //     size: 12,
  //     color: rgb(0,0,0)
  //   })
  //
  //   setPdf(await savePdf(pdfDoc));
  //
  // },[props])
  const tableValue = {
    "12": "27", "16": "29", "20": "30", "25": "31", "30": "33", "35": "34", "40": "35", "45": "36", "50": "37",
    "55": "38", "60": "39", "70": "41", "80": "42", "90": "44"
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
                       ref={register({required: true})} onChange={(e) => setEcm(calcEcmEC(e.target.value))}/>
              </div>
            </div>
            <p>Short-term modulus of the concrete- E<sub>cm</sub>(kN/mm<sup>2</sup>)</p>
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Short-term modulus of the concrete (kN/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="ecm" value={Ecm} type="number" step="0.00001" className="form-control"
                       aria-describedby="ecm" disabled={true}/>
              </div>
            </div>
            {/*<table className="table">*/}
            {/*  <tbody>*/}
            {/*  <tr>*/}
            {/*    <th>f<sub>ck</sub></th>*/}
            {/*    <td>12</td>*/}
            {/*    <td>16</td>*/}
            {/*    <td>20</td>*/}
            {/*    <td>25</td>*/}
            {/*    <td>30</td>*/}
            {/*    <td>35</td>*/}
            {/*    <td>40</td>*/}
            {/*    <td>45</td>*/}
            {/*    <td>50</td>*/}
            {/*    <td>55</td>*/}
            {/*    <td>60</td>*/}
            {/*    <td>70</td>*/}
            {/*    <td>80</td>*/}
            {/*    <td>90</td>*/}
            {/*  </tr>*/}
            {/*  <tr>*/}
            {/*    <th>E<sub>cm</sub></th>*/}
            {/*    <td>27</td>*/}
            {/*    <td>29</td>*/}
            {/*    <td>30</td>*/}
            {/*    <td>31</td>*/}
            {/*    <td>33</td>*/}
            {/*    <td>34</td>*/}
            {/*    <td>35</td>*/}
            {/*    <td>36</td>*/}
            {/*    <td>37</td>*/}
            {/*    <td>38</td>*/}
            {/*    <td>39</td>*/}
            {/*    <td>41</td>*/}
            {/*    <td>42</td>*/}
            {/*    <td>44</td>*/}
            {/*  </tr>*/}
            {/*  </tbody>*/}
            {/*</table>*/}
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
              <div className="input-group mb-3 col">
                <span className="input-group-text col-md-7" id="strength-concrete">bar size-1 mm</span>
                <div className="input-group-append col-md-5">
                  <input name="bar1" type="number" step="0.00001" className="form-control" aria-describedby="bar1"
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
              <span className="input-group-text col-md-10" id="strength-concrete">Moment at which crack width is sorted (kNm)</span>
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
                <span className="input-group-text col-md-10" id="strength-concrete">Crack Width (mm)</span>
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
      {pdf !== null ?
        <iframe className="pdf-viewer" title="test-frame" src={pdf} type="application/pdf"/>
        : <></>
      }
    </div>
  );
}

export default ServiceabilityCWEC;

