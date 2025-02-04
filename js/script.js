// Trigger the file input click when the form is clicked
document.getElementById('uploadForm').addEventListener('click', function (event) {
    if (event.target !== document.getElementById('convertBtn')) {
        document.getElementById('fileInput').click();
    }
});

document.getElementById('fileInput').addEventListener('change', function () {
    const fileLabel = document.getElementById('fileLabel');
    if (this.files[0]) {
        fileLabel.textContent = `Selected File: ${this.files[0].name}`;
    } else {
        fileLabel.textContent = 'Click Here to Select a File';
    }
});

document.getElementById('convertBtn').addEventListener('click', convertToPDF);

async function convertToPDF() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a file first.");
        return;
    }

    const loadingIndicator = document.getElementById('loading');
    const resultSection = document.getElementById('result');
    const downloadLink = document.getElementById('downloadLink');

    loadingIndicator.style.display = 'block';
    resultSection.style.display = 'none';

    const reader = new FileReader();
    reader.onload = async function (event) {
        const arrayBuffer = event.target.result;

        try {
            const { value: htmlContent } = await mammoth.convertToHtml({
                arrayBuffer: arrayBuffer,
                styleMap: [
                    "p[style-name='Heading 1'] => h1:fresh",
                    "p[style-name='Heading 2'] => h2:fresh",
                    "p[style-name='Normal'] => p:fresh"
                ]
            });

            const sanitizedContent = DOMPurify.sanitize(htmlContent);

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = sanitizedContent;

            const options = {
                margin: 0.5,
                filename: 'converted-file.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            await html2pdf().from(tempDiv).set(options).outputPdf('blob').then(blob => {
                const url = URL.createObjectURL(blob);
                downloadLink.href = url;
                downloadLink.download = 'converted-file.pdf';
                loadingIndicator.style.display = 'none';
                resultSection.style.display = 'block';
            });

        } catch (error) {
            console.error("Error during conversion:", error);
            alert("Error converting the document.");
            loadingIndicator.style.display = 'none';
        }
    };

    reader.readAsArrayBuffer(file);
}
