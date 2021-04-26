import {PDFDocument} from "pdf-lib";

export const getPdf = async (name) => {
  const url = require('../assets/pdf/'+name);
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  return pdfDoc;
}

export const savePdf = async (pdfDoc) => {
  const pdfBytes = await pdfDoc.save();

  let bytes = new Uint8Array(pdfBytes);
  let blob = new Blob([bytes], { type: "application/pdf" });
  return URL.createObjectURL(blob);
}
