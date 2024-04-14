import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import {isDevelopment, PORT} from './config.ts';

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
