import express from 'express';
import routes from './routes';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();

const PORT = Number(process.env.PORT);

app.use(cors({
  origin: '*',
  allowedHeaders: ['Content-Type'],
  methods: ['GET', 'PUT', 'POST'],
}))
//parse body from request
app.use(express.json())

//use router file
app.use(routes)

//start express server in .env PORT variable 
app.listen(PORT, () => console.log('listen at port ', PORT));
