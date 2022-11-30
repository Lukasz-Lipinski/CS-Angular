const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const products = require("./routes/products");

const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors());
// app.use(express.static(__dirname, { redirect: `./dist/cs-angular` }));

app.get("/", (req, res) => {
  res.json({ msg: "Hello!" });
});

app.get("/products", products);
app.post("/products", products);

// app.get("**", (req, res) => {
//   res.sendFile(`${__dirname}/dist/cs-angular/index.html`, (err) => {
//     console.log(err);
//   });
// });

app.listen(port, () => {
  console.log(`This server works on: ${port}`);
});
