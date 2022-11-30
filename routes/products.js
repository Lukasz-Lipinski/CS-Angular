const express = require("express");
const router = express.Router();

const mongodb = require("mongodb").MongoClient;

async function connectToDb() {
  return (await new mongodb(process.env.DB_URL).connect())
    .db("computer-shop")
    .collection("products");
}

router.get("/api/products", async (req, res) => {
  const products = await (await connectToDb()).find().toArray();
  res.json({ products });
});

module.exports = router;
