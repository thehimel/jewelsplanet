import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import connectDatabase from "./config/db.ts";
import {isDevelopment, PORT} from "./config/env.ts";

connectDatabase();
const app: Application = express();

isDevelopment && app.use(cors({ origin: 'http://localhost:5173' }));

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
