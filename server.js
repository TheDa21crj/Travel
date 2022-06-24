const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/front/public/uploads/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        pdfParse(file).then((result) => {
            let textPdf = result.text;
            res.json({
                fileName: file.name,
                filePath: `/uploads/${file.name}`,
                textPdf: textPdf,
            });
        });
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});