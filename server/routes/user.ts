import express, {
  Request,
  Response,
} from 'express';
import jwt from 'jsonwebtoken';
import { hash } from 'bcrypt';
import {
  checkIfUserIsRegistered,
  checkUserData,
  connectToDB,
  salt,
  UserData,
} from './utilities';

export const UserRouter = express.Router();

UserRouter.get(
  '/api/user',
  (req: Request, res: Response) => {
    const token = req.headers.authorization;

    console.log(token);
  }
);

UserRouter.post(
  '/api/user/register',
  async (
    req: Request<any, any, UserData>,
    res: Response
  ) => {
    const { body } = req;

    const isUser = await checkIfUserIsRegistered(
      body
    );

    if (isUser) {
      return res.status(501).json({
        msg: 'User exsists!',
        status: 200,
      });
    }

    const client = await connectToDB();

    const hashedPassword = await hash(
      body.password,
      salt
    );

    await client.insertOne({
      ...body,
      password: hashedPassword,
    });

    return res.status(200).json({
      status: 200,
      msg: 'Registration was done successfully',
    });
  }
);

UserRouter.post(
  '/api/user/login',
  async (
    req: Request<any, any, UserData>,
    res: Response
  ) => {
    const { body } = req;

    const isExsits = await checkUserData(body);

    if (isExsits) {
      const token = jwt.sign(
        {
          email: isExsits.email,
          name: isExsits.name,
          surname: isExsits.surname,
        },
        process.env.SECRET_KEY!,
        {
          expiresIn: `1 day`,
        }
      );

      return res.status(200).json({
        status: 200,
        token,
      });
    }
    return res.status(501).json({
      status: 501,
      msg: 'Not exsist',
    });
  }
);
