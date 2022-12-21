import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { MongoClient } from 'mongodb';
import {
  compare,
  compareSync,
  hash,
} from 'bcrypt';

export const salt = 10;

export interface UserData {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export async function connectToDB() {
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
    .collection<UserData>('users');
}

export async function checkIfUserIsRegistered(
  newUser: UserData
) {
  const client = await connectToDB();

  const allUsers = await client.find().toArray();
  const isUser = allUsers.find(
    (user) => user.email === newUser.email
  );

  return isUser;
}

export async function checkUserData(
  incomingUser: UserData
) {
  const client = await connectToDB();

  const allUsers = await client.find().toArray();

  const isUser = allUsers.find((user) =>
    compareSync(
      incomingUser.password,
      user.password
    )
  );

  return isUser;
}

export function verifyAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  console.log(authorization);
}
