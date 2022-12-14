const express = require("express");
const mongodb = require("mongodb").MongoClient;
const router = express.Router();

async function connectToDB() {
  return (await new mongodb(process.env.DB_URL).connect()).db("computer-shop");
}

router.get("/api/user", (req, res) => {});

router.post("/api/user/register", async (req, res) => {
  const { body } = req;
  const client = await connectToDB();

  await client.collection("users").insertOne({
    ...body,
  });

  res.status(200).json({
    status: 200,
    msg: "Registration was done successfully",
  });
});

router.post("/api/user/login", async (req, res) => {
  const { body } = req;

  const client = await connectToDB();

  const allUsers = await client.collection("users").find().toArray();

  const user = allUsers.filter((user) => {
    const isUser = user.email === body.email && user.password === body.password;

    return isUser && user;
  })[0];

  if (user) {
    return res.status(200).json({
      status: 200,
      user,
    });
  }
  return res.status(501).json({
    status: 501,
    msg: "Not exsist",
  });
});

module.exports = router;
