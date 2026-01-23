import {pool} from '../db/pool.js'


export async function createBook(book){
    await pool.query(`INSERT INTO books (title) VALUES ($1);`,[book.title]);
}

export async function getBooks(){
    const response = await pool.query('SELECT * FROM books');
    return response.rows
}


export async function getBook(id){
    const response = await pool.query('SELECT * FROM books WHERE id = $1 ',[id]);
    
    return response.rows[0];
}

