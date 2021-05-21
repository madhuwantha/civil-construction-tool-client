import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { calcEcmBSI, calcA } from "./CalculationsBSI";
import { getPdf, savePdf } from "../../helpers/pdf";
import { degrees, rgb } from "pdf-lib";

const ServiceabilityDFBSI = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [Ecm, setEcm] = useState(0);
  const [pdf, setPdf] = useState(null);

  const onSubmit = async (data) => {
    let h = parseFloat(data["h"]);
    let c = parseFloat(data["c"]);
    let bar1 = parseFloat(data["bar1"]);
    let nBar1 = parseFloat(data["nBar1"]);
    let Es = parseFloat(data["Es"]);
    let As = parseFloat(data["As"]);
    let b = parseFloat(data["b"]);
    let M = parseFloat(data["M"]);
    let l = parseFloat(data["l"]);

    let ans = await calcA(h, c, bar1, nBar1, Es, As, b, M, l);
    let mainAnswer = parseFloat(ans["mainAnswer"].toFixed(2));
    let subAnswers = ans["subAnswers"];
    setAnswer(mainAnswer);
    setIsSubmit(true);

    let gammaB = parseFloat(subAnswers["gammaB"]).toFixed(2);
    let x = parseFloat(subAnswers["x"]).toFixed(2);
    let fs = parseFloat(subAnswers["fs"]).toFixed(2);
    let gamma = parseFloat(subAnswers["gamma"]).toFixed(2);

    const pdfDoc = await getPdf("deflection_BS8110_work_sheet.pdf");
    const page = pdfDoc.getPage(0);
    const page2 = pdfDoc.getPage(1);

    // Page 01
    page.drawText("xxxxxx", {
      // Fck
      x: 164,
      y: 394,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText("xxxxxx", {
      // Fyk
      x: 164,
      y: 379,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(Es + "", {
      // Es
      x: 164,
      y: 364,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(As + "", {
      // As
      x: 164,
      y: 349,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(b + "", {
      // b
      x: 164,
      y: 334,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(h + "", {
      // h
      x: 164,
      y: 319,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(c + "", {
      // c
      x: 164,
      y: 304,
      size: 12,
      color: rgb(0, 0, 0),
    });
    page.drawText("xxxxxx", {
      // theta
      x: 164,
      y: 289,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(M + "", {
      // M
      x: 164,
      y: 274,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText((1 / gammaB).toFixed(2) + "", {
      // 1 / rb
      x: 480,
      y: 210,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(x + "", {
      // x
      x: 480,
      y: 128,
      size: 12,
      color: rgb(0, 0, 0),
    });

    // Page 02
    page2.drawText(fs + "", {
      // fs
      x: 470,
      y: 574,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText((1 / gamma).toFixed(2) + "", {
      // 1 / r
      x: 470,
      y: 486,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText(mainAnswer + "", {
      // Wk
      x: 470,
      y: 400,
      size: 12,
      color: rgb(0, 0, 0),
    });

    setPdf(await savePdf(pdfDoc));
  };

  // useEffect(async () => {
  //   const subAnswers = {
  //     gammaB: 10,
  //     x: 20,
  //     fs: 30,
  //     gamma: 40,
  //   };

  //   let gammaB = subAnswers["gammaB"].toFixed(4);
  //   let x = subAnswers["x"].toFixed(4);
  //   let fs = subAnswers["fs"].toFixed(4);
  //   let gamma = subAnswers["gamma"].toFixed(4);

  //   const pdfDoc = await getPdf("deflection_BS8110_work_sheet.pdf");
  //   const page = pdfDoc.getPage(0);
  //   const page2 = pdfDoc.getPage(1);

  //   // Page 01
  //   page.drawText("xxxxxx", {
  //     // Fck
  //     x: 164,
  //     y: 394,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // Fyk
  //     x: 164,
  //     y: 379,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // Es
  //     x: 164,
  //     y: 364,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // As
  //     x: 164,
  //     y: 349,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // b
  //     x: 164,
  //     y: 334,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // h
  //     x: 164,
  //     y: 319,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // c
  //     x: 164,
  //     y: 304,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });
  //   page.drawText("xxxxxx", {
  //     // theta
  //     x: 164,
  //     y: 289,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // M
  //     x: 164,
  //     y: 274,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // 1 / rb
  //     x: 480,
  //     y: 210,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // x
  //     x: 480,
  //     y: 128,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   // Page 02
  //   page2.drawText("xxxxxx", {
  //     // P eff
  //     x: 470,
  //     y: 574,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page2.drawText("xxxxxx", {
  //     // 𝑺𝒓,𝒎𝒂𝒙 =
  //     x: 470,
  //     y: 486,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page2.drawText("xxxxxx", {
  //     // Wk
  //     x: 470,
  //     y: 400,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   setPdf(await savePdf(pdfDoc));
  // }, [props]);

  return (
    <div className="container col-9 card">
      <p>Deflection Calculation to BS8110</p>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 lesson-image-container">
          <p>At first we can consider about the Material Properties</p>
          <div
            style={{ border: "1px solid black" }}
            className="col-12 lesson-image-container"
          >
            {errors.fck && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Strength of concrete (N/mm<sup>2</sup>)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="fck"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="fck"
                  ref={register({ required: true })}
                  onChange={(e) => setEcm(calcEcmBSI(e.target.value))}
                />
              </div>
            </div>
            <p>
              Short-term modulus of the concrete- E<sub>cm</sub>(kN/mm
              <sup>2</sup>)
            </p>
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Short-term modulus of the concrete (kN/mm<sup>2</sup>)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="ecm"
                  value={Ecm}
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="ecm"
                  disabled={true}
                />
              </div>
            </div>

            {errors.fy && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Tensile strength of reinforcement (N/mm<sup>2</sup>)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="fy"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="fy"
                  ref={register({ required: true })}
                />
              </div>
            </div>
            {errors.Es && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Modulus of elasticity of the reinforcement (kN/mm<sup>2</sup>)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="Es"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="Es"
                  ref={register({ required: true })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Then move to the reinforcement area</p>
          <div
            style={{ border: "1px solid black" }}
            className="col-12 lesson-image-container"
          >
            {errors.As && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Tensile reinforcement area of your beam (N/mm<sup>2</sup>)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="As"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="As"
                  ref={register({ required: true })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Details of the tension reinforcement bar (mm)</p>
          <div
            style={{ border: "1px solid black" }}
            className="col-12 lesson-image-container"
          >
            <div className="row">
              <div className="input-group mb-3 col">
                <span
                  className="input-group-text col-md-7"
                  id="strength-concrete"
                >
                  bar size-1 mm
                </span>
                <div className="input-group-append col-md-5">
                  <input
                    name="bar1"
                    type="number"
                    step="0.0001"
                    className="form-control"
                    aria-describedby="bar1"
                    ref={register()}
                  />
                </div>
              </div>
              <div className="input-group mb-3 col">
                <span
                  className="input-group-text col-md-7"
                  id="strength-concrete"
                >
                  No. of bars
                </span>
                <div className="input-group-append col-md-5">
                  <input
                    name="nBar1"
                    type="number"
                    step="0.0001"
                    className="form-control"
                    aria-describedby="nBar1"
                    ref={register()}
                  />
                </div>
              </div>
            </div>
            {/*row*/}
            <div className="row">
              <div className="input-group mb-3 col">
                <span
                  className="input-group-text col-md-7"
                  id="strength-concrete"
                >
                  bar size-2 mm
                </span>
                <div className="input-group-append col-md-5">
                  <input
                    name="bar2"
                    type="number"
                    step="0.0001"
                    className="form-control"
                    aria-describedby="bar2"
                  />
                </div>
              </div>
              <div className="input-group mb-3 col">
                <span
                  className="input-group-text col-md-7"
                  id="strength-concrete"
                >
                  No. of bars
                </span>
                <div className="input-group-append col-md-5">
                  <input
                    name="nBar2"
                    type="number"
                    step="0.0001"
                    className="form-control"
                    aria-describedby="nBar2"
                  />
                </div>
              </div>
            </div>
            {/*row*/}
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Now details of the section</p>
          <div
            style={{ border: "1px solid black" }}
            className="col-12 lesson-image-container"
          >
            {errors.b && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Width of selection (mm)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="b"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="b"
                  ref={register({ required: true })}
                />
              </div>
            </div>
            {errors.h && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Depth of selection (mm)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="h"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="h"
                  ref={register({ required: true })}
                />
              </div>
            </div>
            {errors.c && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Cover of the reinforcement (mm)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="c"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="c"
                  ref={register({ required: true })}
                />
              </div>
            </div>
            {errors.l && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Length of the beam (mm)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="l"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="l"
                  ref={register({ required: true })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <p>Finally moment effect</p>
          <div
            style={{ border: "1px solid black" }}
            className="col-12 lesson-image-container"
          >
            {errors.M && <span>This field is required</span>}
            <div className="input-group mb-3">
              <span
                className="input-group-text col-md-10"
                id="strength-concrete"
              >
                Moment of the section (kNm)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="M"
                  type="number"
                  step="0.0001"
                  className="form-control"
                  aria-describedby="M"
                  ref={register({ required: true })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 lesson-image-container">
          <div
            style={{ border: "1px solid black" }}
            className="col-12 lesson-image-container"
          >
            <div className="col">
              <input
                name=""
                value="Calculate"
                className="btn btn-primary lesson-button"
                type="submit"
              />
            </div>
          </div>
        </div>

        {isSubmit ? (
          <div className="col-12 lesson-image-container">
            <p>Final Answer</p>
            <div
              style={{ border: "1px solid black" }}
              className="col-12 lesson-image-container"
            >
              <div className="input-group mb-3">
                <span
                  className="input-group-text col-md-10"
                  id="strength-concrete"
                >
                  Deflection (mm)
                </span>
                <div className="input-group-append col-md-2">
                  <input
                    name=""
                    value={answer}
                    type="number"
                    step="0.0001"
                    className="form-control"
                    aria-describedby="strength-concrete"
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </form>
      {pdf !== null ? (
        <iframe
          className="pdf-viewer"
          title="test-frame"
          src={pdf}
          type="application/pdf"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ServiceabilityDFBSI;
