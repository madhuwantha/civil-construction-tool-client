import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {calcShearCapacity, calcSpacing} from "./CalculationUSBSI";
import {calcFinal, calcVDesign} from "./CalculationUSEC";
import {getPdf, savePdf} from "../../helpers/pdf";
import {degrees, rgb} from "pdf-lib";

const UltimateShear = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer11, setAnswer11] = useState(0);
  const [answer12, setAnswer12] = useState(0);
  const [answer13, setAnswer13] = useState(0);
  const [answer21, setAnswer21] = useState(0);
  const [answer22, setAnswer22] = useState(0);
  const [answer23, setAnswer23] = useState(0);
  const [pdf, setPdf] = useState(null);


  const onSubmit = async data => {
    let ans11 = await calcShearCapacity(parseFloat(data["v"]), parseFloat(data["b"]), parseFloat(data["d"]));
    let ans12 = await calcSpacing(parseFloat(data["fyv"]), parseFloat(data["b"]),
      parseFloat(data["sc"]), parseFloat(data["fcu"]),parseFloat(data["d"]),parseFloat(data["As"]), parseFloat(data["v"]))
    let ans13 = 150;
    let ans21 = await calcVDesign(parseFloat(data["v"]), parseFloat(data["l"]), parseFloat(data["d"]));
    let ans22 = await calcFinal(parseFloat(data["v"]), parseFloat(data["l"]), parseFloat(data["b"]), parseFloat(data["d"]),
      parseFloat(data["fck"]), parseFloat(data["As"]), parseFloat(data["fy"]));
    let ans23 = 150;
    setAnswer11(parseFloat(ans11["mainAnswer"].toFixed(4)))
    setAnswer12(parseFloat(ans12["mainAnswer"].toFixed(4)))
    setAnswer13(parseFloat(ans13?.toFixed(4)))
    setAnswer21(parseFloat(ans21["mainAnswer"]?.toFixed(4)))
    setAnswer22(typeof(ans22["mainAnswer"]) === "string" ? ans22 :  parseFloat(ans22["mainAnswer"]?.toFixed(4)))
    setAnswer23(parseFloat(ans23?.toFixed(4)))
    setIsSubmit(true)

    const pdfDoc = await getPdf('shear_work_sheet.pdf');
    const page = pdfDoc.getPage(0);
    page.drawText('This text was added with Deno!', {
      x: 40,
      y: page.getHeight() / 2 + 250,
      size: 50,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    });

    setPdf(await savePdf(pdfDoc));
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
              <span className="input-group-text col-md-10" id="strength-concrete"> Shear Force (kN)</span>
              <div className="input-group-append col-md-2">
                <input name="v" type="number" step="0.00001" className="form-control" aria-describedby="m"
                       ref={register({required: true})}/>
              </div>
            </div>
            {errors.l && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span className="input-group-text col-md-10" id="strength-concrete">Span (kNm)</span>
              <div className="input-group-append col-md-2">
                <input name="l" type="number" step="0.00001" className="form-control" aria-describedby="m"
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
      {pdf !== null ?
        <iframe className="pdf-viewer" title="test-frame" src={pdf}  type="application/pdf" />
        : <></>
      }
    </div>
  );
}

export default UltimateShear;
