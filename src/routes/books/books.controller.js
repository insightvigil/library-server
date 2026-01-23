//Models
import { getBooks,getBook,createBook} from "../../models/books.model.js";
//CRUD

//Create
export const httpCreateBook = async (request,response)=> {
    const book = request.body;
    try{
        await createBook(book); 
        return response.status(201).send('Libro creado');
    } catch(error) {
        console.error('No se pudo crear el libro');
        return response.status(500).send('No se pudo crear el libro');
    }
    
    
}

//Read
export const httpGetBooks = async (request,response) => { 
    response.status(200).send(await getBooks());
}

export const httpGetBook = async (request,response)=> {
    const {id} = request.params;
    //Transform the string into number
    const bookid = Number(id);
    response.status(200).send(await getBook(bookid));
}

//Update
export const httpUpdateBook = (request,response) => {
    response.send("Hello there! You can update books here");
}

//Delete
export const httpDeleteBook = (reques,response)=> {
    response.send("Hello There!, You can delete books here");
}
