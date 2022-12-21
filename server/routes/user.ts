import express, {
  Express,
  Request,
  Response,
} from 'express';
import { MongoClient } from 'mongodb';
import {  } from 'bcrypt';

export const UserRouter = express.Router();

async function connectToDB() {
  let client: MongoClient;

  try {
    client = await new MongoClient(
      process.env.DB_URL!
    ).connect();
  } catch (err) {
    throw new Error("Connection's problem");
  }

  return client
    .db('computer-shop')
    .collection('users');
}

async function checkIfUserIsRegistered(
  newUser: any
) {
  const client = await connectToDB();

  const allUsers = await client.find().toArray();
  // allUsers.find((user) => {});
}

UserRouter.get(
  '/api/user',
  (req: Request, res: Response) => {}
);

UserRouter.post(
  '/api/user/register',
  async (req: Request, res: Response) => {
    const { body } = req;
    const client = await connectToDB();

    await client.insertOne({
      ...body,
    });

    res.status(200).json({
      status: 200,
      msg: 'Registration was done successfully',
    });
  }
);

UserRouter.post(
  '/api/user/login',
  async (req: Request, res: Response) => {
    const { body } = req;

    const client = await connectToDB();

    const allUsers = await client
      .find()
      .toArray();

    const user = allUsers.filter((user) => {
      const isUser =
        user.email === body.email &&
        user.password === body.password;

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
      msg: 'Not exsist',
    });
  }
);
