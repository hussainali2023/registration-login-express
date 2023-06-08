const express = require('express');
const pdfController = require('../controller/pdfController');

const router = express.Router();

router.post('/generate-pdf', pdfController.generatePDF);

module.exports = router;
