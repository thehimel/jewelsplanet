import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import connectDatabase from "./config/database.ts";
import {CLIENT_URI, isDevelopment, PORT} from "./config/constants.ts";

connectDatabase();
const app: Application = express();

isDevelopment && app.use(cors({ origin: CLIENT_URI }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/hello-word', (req: Request, res: Response) => {
  res.send({
    "message": "Hello, Word!",
  });
});

app.get('/api/products', (req: Request, res: Response) => {
  res.send({
    data: [],
  });
});

app.get('/api/products/:id', (req: Request, res: Response) => {
  res.send({
    data: {},
  });
});
