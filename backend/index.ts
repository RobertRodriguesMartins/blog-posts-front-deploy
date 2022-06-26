import express from 'express';
import routes from './routes';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();

const PORT = Number(process.env.PORT);

//parse body from request
app.use(express.json())
app.use(cors({
  allowedHeaders: 'Access-Control-Allow-Origin: *'
}))

//use router file
app.use(routes)

//start express server in .env PORT variable 
app.listen(PORT, () => console.log('listen at port ', PORT));
