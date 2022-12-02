const express = require("express");
const mongodb = require("mongodb").MongoClient;
const router = express.Router();

async function connectToDB() {
  return (await new mongodb(process.env.DB_URL).connect()).db("computer-shop");
}

router.get("/api/user", (req, res) => {
  
});

router.post("/api/user", async (req, res) => {
  const { body } = req;
  await (await connectToDB()).collection("computer-shop").insertOne({
    _id: JSON.stringify(_id),
    ...body,
  });

  res.status(200).json({
    msg: "Registration was done successfully",
  });
});

module.exports = router;
