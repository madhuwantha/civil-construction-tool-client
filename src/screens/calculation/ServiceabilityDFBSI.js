import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {calcEcmBSI, calcA} from "./CalculationsBSI";
import {getPdf, savePdf} from "../../helpers/pdf";
import {degrees, rgb} from "pdf-lib";

const ServiceabilityDFBSI = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [Ecm, setEcm] = useState(0);
  const [pdf, setPdf] = useState(null);


  const onSubmit = async data => {
    let ans = await calcA(parseFloat(data["h"]), parseFloat(data["c"]), parseFloat(data["bar1"]), parseFloat(data["nBar1"]), parseFloat(data["Es"]), parseFloat(data["As"]), parseFloat(data["b"]), parseFloat(data["M"]), parseFloat(data["l"]))
    setAnswer(parseFloat(ans["mainAnswer"].toFixed(4)))
    setIsSubmit(true)

    // const pdfDoc = await getPdf('deflection_BS8110_work_sheet.pdf');
    // const page = pdfDoc.getPage(0);
    // setPdf(await savePdf(pdfDoc));
  }
  useEffect(async () => {

    const subAnswers = {
      "gammaB": 10,
      "x": 20,
      "fs": 30,
      "gamma": 40
    };

    let gammaB = subAnswers["gammaB"].toFixed(4)
    let x = subAnswers["x"].toFixed(4)
    let fs = subAnswers["fs"].toFixed(4)
    let gamma = subAnswers["gamma"].toFixed(4)

    const pdfDoc = await getPdf('deflection_BS8110_work_sheet.pdf');
    const page = pdfDoc.getPage(0);

    page.drawText( 100+" mm", {
      x:64,
      y:524,
      size: 12,
      color: rgb(0,0,0)
    })

    page.drawText( 10+" mm", {
      x:64,
      y:402,
      size: 12,
      color: rgb(0,0,0)
    })

    page.drawText( 1000+" mm", {
      x:64,
      y:285,
      size: 12,
      color: rgb(0,0,0)
    })

    page.drawText( 80+" mm", {
      x:64,
      y:163,
      size: 12,
      color: rgb(0,0,0)
    })

    page.drawText( 80+" mm", {
      x:64,
      y:163,
      size: 12,
      color: rgb(0,0,0)
    })

    page.drawText( 80+" mm", {
      x:64,
      y:42,
      size: 12,
      color: rgb(0,0,0)
    })


    setPdf(await savePdf(pdfDoc));
  },[props])


  return (
    <div className="container col-9 card">
      <p>Deflection Calculation to BS8110</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <p>At first we can consider about the Material Properties</p>
          <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
            {errors.fck && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Strength of concrete (N/mm<sup>2</sup>)</span>
              <div className="input-group-append col-md-2">
                <input name="fck" type="number" step="0.0001" className="form-control" aria-describedby="fck"
                       ref={register({required: true})} onChange={(e) => setEcm(calcEcmBSI(e.target.value))}/>
              </div>
            </div>
            <p>Short-term modulus of the concrete- E<sub>cm</sub>(kN/mm<sup>2</sup>)</p>
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
                <span className="input-group-text col-md-10" id="strength-concrete">Deflection (mm)</span>
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
      {pdf !== null ?
        <iframe className="pdf-viewer" title="test-frame" src={pdf}  type="application/pdf" />
        : <></>
      }
    </div>
  );
}

export default ServiceabilityDFBSI;
