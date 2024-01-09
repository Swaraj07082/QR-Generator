const qrcode = require("qrcode");
const express = require("express");
const app = express();
const port = process.env.port || 4000;

app.get("/", (req, res) => {
  const url = "https://www.npmjs.com/package/qrcode";

  qrcode.toDataURL(url, function (err, url) {
    if (err) {
      res.status(404).send("Error");
    } else {
      res.send(
        `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>QR Code Generator</title>
      </head>
      <body>
      <img src=${url} />
          
      </body>
      </html>`
      );
    }
  });
});

app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});
