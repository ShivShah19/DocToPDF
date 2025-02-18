# DOC to PDF Converter

This project provides a simple web-based tool to convert DOCX (Microsoft Word) files to PDF format using JavaScript. The application utilizes several powerful libraries, including Mammoth.js, jsPDF, DOMPurify, and html2canvas, to handle document conversion and PDF generation.

## Features

- **DOCX to HTML conversion**: Converts DOCX files to HTML using Mammoth.js.
- **Sanitize HTML**: Ensures the HTML content is sanitized using DOMPurify to prevent XSS attacks.
- **HTML to PDF**: Generates a downloadable PDF from the sanitized HTML using jsPDF.
- **Easy-to-Use**: Minimal setup required to convert DOCX files to PDF on the client-side.

## Libraries Used

- **Mammoth.js**: A library for converting DOCX documents into HTML while preserving the document structure.
- **jsPDF**: A library for generating PDFs from HTML content.
- **DOMPurify**: A library to sanitize the HTML content and prevent security vulnerabilities.
- **html2canvas**: A library for rendering HTML into a canvas.
- **html2pdf.js**: A library to simplify the conversion of HTML to PDFs.

## Installation

To use the DOC to PDF Converter, include the following scripts in your HTML file to load the necessary libraries:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.4.2/mammoth.browser.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.0/purify.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
```

## Features:

- Convert DOCX files to HTML.
- Sanitize the HTML content to ensure security.
- Render HTML content into PDF format.
- Easy-to-use with minimal setup.