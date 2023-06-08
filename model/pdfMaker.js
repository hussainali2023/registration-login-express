const PDFDocument = require('pdfkit');



function generatePDF(content) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
console.log(content)
doc.fontSize(40)
    doc.text(content.name, {align:"center"})
    doc.fontSize(30)
    doc.text(content.message, {align:"left"})

    doc.fontSize(20).text(`Email: ${content.email}`)
    doc.fontSize(20).text(`Contact: ${content.contact}`)
    doc.fontSize(20).text(`data: ${content.data}`)
    // doc.image(content.img)
    // doc.fontSize(20)
    // doc.text(content, {align:"center"},);

    const buffers = [];
   doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });

    doc.end();
  });
}

module.exports = {
  generatePDF,
};
