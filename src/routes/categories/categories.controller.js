//Models
import { createCategory, getCategories,getCategory } from "../../models/categories.model.js";

//CRUD

//Create Category
export const httpCreateCategory = async (request, response) => {
    try{
        const category = request.body;
        await createCategory(category);
        return response.status(201).send('Categoría creada');

    } catch(error){
        console.log(error);
        return response.status(500).send('No se pudo crear la categoría');
    }
}

//Read Categories
export const httpGetCategories = async (request,response)=> {
    response.send(await getCategories());
}

//Read Category
export const httpGetCategory = async (request,response)=> {
    //Extract the parameter id from the URL
    const {id} = request.params;
    const categoryId = Number(id);

    response.status(200).send(await getCategory(categoryId));
}

//Update Category
export const httpUpdateCategory = (request,response)=> {
    response.send('Aquí puedes actualizar los datos de una categoria');
}

//Delete Category
export const httpDeleteCategory = (request,response)=> {
    response.send('Aquí puedes eliminar una categoría');
}