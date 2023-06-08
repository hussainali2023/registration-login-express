const pdfModel = require("../model/pdfMaker")

async function generatePDF(req, res) {
  try {
    const {name, email, message, contact,data} = req.body;
    const finalData = {name, email, message, contact, data}
    
    const pdfBuffer = await pdfModel.generatePDF(finalData, name);
    res.contentType('application/pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while generating the PDF.');
  }
}

module.exports = {
  generatePDF,
};
