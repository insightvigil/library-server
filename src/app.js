//Libraries
import express from 'express';
import cors from 'cors';

//Routers
import booksRouter from './routes/books/books.routes.js';
import categoriesRouter from './routes/categories/categories.router.js'

//Pool
import { pool } from './db/pool.js';



const app = express();


app.use(cors({origin: 'http://127.0.0.1:5173'}));
app.use(express.json());

app.use('/books', booksRouter);
app.use('/categories', categoriesRouter);


export default app;