import express, {
  Request,
  Response,
  Express,
} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { ProductRouter } from './routes/products';
import { UserRouter } from './routes/user';

const app: Express = express();

const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors(), bodyParser.json());
app.use(
  express.static(__dirname, {
    index: `../app/dist/cs-angular`,
  })
);

app.get('/api', (req, res) => {
  res.json({ msg: 'Hello!' });
});

//Products
app.get('/api/products', ProductRouter);
app.post('/api/products', ProductRouter);

//User
app.post('/api/user/:id', UserRouter);
// app.post("/api/user/login", users);

if (process.env.NODE_ENV === 'production') {
  app.get('**', (req, res) => {
    res.sendFile(
      `${__dirname}/dist/cs-angular/index.html`,
      (err) => {
        console.log(err);
      }
    );
  });
}

app.listen(port, () => {
  console.log(`This server works on: ${port}`);
});
