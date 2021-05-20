import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { calcEcmEC, calcWk } from "./CalculationsEC";
import { getPdf, savePdf } from "../../helpers/pdf";
import { degrees, rgb } from "pdf-lib";

const ServiceabilityCWEC = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [Ecm, setEcm] = useState(0);
  const [pdf, setPdf] = useState(null);

  const onSubmit = async (data) => {
    let fck = parseFloat(data["fck"]);
    let Es = parseFloat(data["Es"]);
    let h = parseFloat(data["h"]);
    let bar1 = parseFloat(data["bar1"]);
    let As = parseFloat(data["As"]);
    let b = parseFloat(data["b"]);
    let M = parseFloat(data["M"]);
    let nBar1 = parseFloat(data["nBar1"]);
    let c = parseFloat(data["c"]);

    // let ans = await calcWk(
    //   parseFloat(data["fck"]),
    //   parseFloat(data["Es"]),
    //   parseFloat(data["h"]),
    //   parseFloat(data["bar1"]),
    //   parseFloat(data["As"]),
    //   parseFloat(data["b"]),
    //   parseFloat(data["M"]),
    //   parseFloat(data["nBar1"]),
    //   parseFloat(data["c"])
    // );

    let ans = await calcWk(fck, Es, h, bar1, As, b, M, nBar1, c);

    let subAnswer = ans["subAnswer"];
    let a = ans["mainAnswer"].toFixed(4);
    setAnswer(parseFloat(a));

    setIsSubmit(true);

    let x = subAnswer["x"].toFixed(4);
    let d = subAnswer["d"].toFixed(4);
    let sigma = subAnswer["sigma"].toFixed(4);
    let rowPEff = subAnswer["rowPEff"].toFixed(4);
    let sRMax = subAnswer["sRMax"].toFixed(4);

    const pdfDoc = await getPdf("crack_width_EC2_work_sheet.pdf");
    const page = pdfDoc.getPage(0);
    const page2 = pdfDoc.getPage(1);

    // Page 01
    page.drawText(fck.toString() + "", {
      // Fck
      x: 164,
      y: 394,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText("xxxxx", {
      // Fyk
      x: 164,
      y: 379,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(Es.toString() + "", {
      // Es
      x: 164,
      y: 364,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(As.toString() + "", {
      // As
      x: 164,
      y: 349,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(b.toString() + +"", {
      // b
      x: 164,
      y: 334,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(h.toString() + "", {
      // h
      x: 164,
      y: 319,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(c.toString() + "", {
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

    page.drawText(M.toString() + "", {
      // M
      x: 164,
      y: 274,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(x.toString() + "", {
      // x
      x: 480,
      y: 200,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText("xxxxxx", {
      // 𝑳𝒆𝒗𝒆𝒓 𝒂𝒓𝒎(
      x: 530,
      y: 133,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(sigma.toString() + "", {
      // 𝝈𝒔 =
      x: 480,
      y: 108,
      size: 12,
      color: rgb(0, 0, 0),
    });

    // Page 02
    page2.drawText(rowPEff.toString() + "", {
      // P eff
      x: 495,
      y: 550,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText(sRMax.toString() + "", {
      // 𝑺𝒓,𝒎𝒂𝒙 =
      x: 495,
      y: 480,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText("xxxxxx", {
      // 𝜺𝒔𝒎 =
      x: 480,
      y: 423,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page2.drawText("xxxxxx", {
      // Wk
      x: 480,
      y: 393,
      size: 12,
      color: rgb(0, 0, 0),
    });
    setPdf(await savePdf(pdfDoc));
  };

  // useEffect(async () => {
  //   const pdfDoc = await getPdf("crack_width_EC2_work_sheet.pdf");
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
  //     // x
  //     x: 480,
  //     y: 200,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // 𝑳𝒆𝒗𝒆𝒓 𝒂𝒓𝒎(
  //     x: 530,
  //     y: 133,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page.drawText("xxxxxx", {
  //     // 𝝈𝒔 =
  //     x: 480,
  //     y: 108,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   // Page 02
  //   page2.drawText("xxxxxx", {
  //     // P eff
  //     x: 495,
  //     y: 550,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page2.drawText("xxxxxx", {
  //     // 𝑺𝒓,𝒎𝒂𝒙 =
  //     x: 495,
  //     y: 480,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page2.drawText("xxxxxx", {
  //     // 𝜺𝒔𝒎 =
  //     x: 480,
  //     y: 423,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   page2.drawText("xxxxxx", {
  //     // Wk
  //     x: 480,
  //     y: 393,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   setPdf(await savePdf(pdfDoc));
  // }, [props]);

  // const tableValue = {
  //   "12": "27", "16": "29", "20": "30", "25": "31", "30": "33", "35": "34", "40": "35", "45": "36", "50": "37",
  //   "55": "38", "60": "39", "70": "41", "80": "42", "90": "44"
  // }

  return (
    <div className="container col-9 card">
      <p>Crack Width Calculation to EURO CODE</p>
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
                  step="0.00001"
                  className="form-control"
                  aria-describedby="fck"
                  ref={register({ required: true })}
                  onChange={(e) => setEcm(calcEcmEC(e.target.value))}
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
                  step="0.00001"
                  className="form-control"
                  aria-describedby="ecm"
                  disabled={true}
                />
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
                  step="0.00001"
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
                  step="0.00001"
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
                  step="0.00001"
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
                    step="0.00001"
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
                    step="0.00001"
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
                    step="0.00001"
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
                    step="0.00001"
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
                  step="0.00001"
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
                  step="0.00001"
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
                  step="0.00001"
                  className="form-control"
                  aria-describedby="c"
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
                Moment at which crack width is sorted (kNm)
              </span>
              <div className="input-group-append col-md-2">
                <input
                  name="M"
                  type="number"
                  step="0.00001"
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
                  Crack Width (mm)
                </span>
                <div className="input-group-append col-md-2">
                  <input
                    name=""
                    value={answer}
                    type="number"
                    step="0.00001"
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

export default ServiceabilityCWEC;
