import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { calcEcmEC, calcDef } from "./CalculationsEC";
import { getPdf, savePdf } from "../../helpers/pdf";
import { degrees, rgb } from "pdf-lib";

const ServiceabilityDFEC = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [Ecm, setEcm] = useState(0);
  const [pdf, setPdf] = useState(null);

  const onSubmit = async (data) => {
    let fck = parseFloat(data["fck"]);
    let Es = parseFloat(data["Es"]);
    let As = parseFloat(data["As"]);
    let b = parseFloat(data["b"]);
    let h = parseFloat(data["h"]);
    let c = parseFloat(data["c"]);
    let bar1 = parseFloat(data["bar1"]);
    let M = parseFloat(data["M"]);
    let l = parseFloat(data["l"]);
    let nBar1 = parseFloat(data["nBar1"]);

    let ans = await calcDef(fck, Es, As, b, h, c, bar1, M, l, nBar1);
    let mainAnswer = parseFloat(ans["mainAnswer"].toFixed(4));
    let subAnswers = ans["subAnswers"];
    let gammaUC = parseFloat(ans["gammaUC"]).toFixed(2);
    let x = parseFloat(ans["x"]).toFixed(2);
    let gammaCR = parseFloat(ans["gammaCR"]).toFixed(2);
    let gamma = parseFloat(ans["gamma"]).toFixed(2);
    setAnswer(mainAnswer);
    setIsSubmit(true);

    const pdfDoc = await getPdf("deflection_EC2_work_sheet.pdf");
    const page = pdfDoc.getPage(0);
    const page2 = pdfDoc.getPage(1);

    // Page 01
    page.drawText("xxxxxx", {
      // Fcu
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

    page.drawText("xxxxxx", {
      // (1 / r) uc
      x: 490,
      y: 206,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(x + "", {
      // x
      x: 470,
      y: 130,
      size: 12,
      color: rgb(0, 0, 0),
    });

    // Page 02
    page2.drawText("xxxxxx", {
      // ( 1 / r )uc
      x: 488,
      y: 566,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText("xxxxxx", {
      // Mcr
      x: 488,
      y: 505,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText("xxxxxx", {
      // E
      x: 480,
      y: 463,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText("xxxxxx", {
      // 1 / r
      x: 480,
      y: 426,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText("xxxxxx", {
      // a
      x: 480,
      y: 353,
      size: 12,
      color: rgb(0, 0, 0),
    });

    setPdf(await savePdf(pdfDoc));
  };

  // useEffect(async () => {

  //   setPdf(await savePdf(pdfDoc));
  // }, [props]);

  return (
    <div className="container col-9 card">
      <p>Deflection Calculation to Euro Code</p>
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
                  onChange={(e) => setEcm(calcEcmEC(e.target.value))}
                />
              </div>
            </div>
            <p>
              {" "}
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

export default ServiceabilityDFEC;
