const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

const products = require("./routes/products");

const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors(), bodyParser.json());
app.use(express.static(__dirname, { redirect: `./dist/cs-angular` }));

app.get("/api", (req, res) => {
  res.json({ msg: "Hello!" });
});

app.get("/api/products", products);
app.post("/api/products", products);

if(process.env.NODE_ENV === "production"){
  process.env. app.get("**", (req, res) => {
    res.sendFile(`${__dirname}/dist/cs-angular/index.html`, (err) => {
      console.log(err);
    });
  });
}


app.listen(port, () => {
  console.log(`This server works on: ${port}`);
});
