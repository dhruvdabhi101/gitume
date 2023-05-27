var fs = require("fs");
var path = require("path");

export default function handler(req, res) {
  console.log(__dirname);
  if (req.method === "GET" || req.method === "get") {
    const filePath = path.join(process.cwd(), `result.pdf`);
    try {
      const imageBuffer = fs.readFileSync(filePath);
      res.setHeader("Content-Type", "application/pdf");
      res.send(imageBuffer);
    } catch (e) {
      res.status(400).json({ error: true, message: "Image not found" });
    }
  }
}
