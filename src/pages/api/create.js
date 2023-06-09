var pdf = require("html-pdf");
var fs = require("fs");
const pdfdoc = require("../document/index");

export default function handler(req, res) {
  pdf.create(pdfdoc(req.body), {}).toFile("resume.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
}
