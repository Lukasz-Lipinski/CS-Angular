import express, {
  Express,
  Request,
  Response,
  Router,
} from 'express';
import { MongoClient } from 'mongodb';

export const ProductRouter: Router =
  express.Router();

async function connectToDb() {
  let client: MongoClient;

  try {
    client = await new MongoClient(
      process.env.DB_URL!
    ).connect();
  } catch (err) {
    throw new Error('Problem with db connection');
  }

  return client
    .db('computer-shop')
    .collection('products');
}

ProductRouter.get(
  '/api/products',
  async (req: Request, res: Response) => {
    const products = await (await connectToDb())
      .find()
      .toArray();

    res.json({ products });
  }
);
