import {Request, Response} from 'express';
import { BooksModel } from "../models/books-model";

//Obtiene todos los libros
export const getAllBooks = (req: Request, res: Response): void => {
    const books = BooksModel.getAllBooks();
    res.json(books);
}
//Buscar libro por id
export const getBookById = (req: Request, res: Response): void => {
    let {id} = req.params;
    const book = BooksModel.getBookById(parseInt(id));

    if(!book) {
        res.status(404).json({error: 'Libro no encontrado get book by id'});
        return;
    }
    res.status(200).json(book);
}
//Crear un nuevo libro
export const createBook = (req: Request, res: Response): void => {
    const newBook = BooksModel.addBook(req.body);
    res.status(201).json(newBook);
}
//Actualizar libro por id
export const updateBook = (req: Request, res: Response): void => {
    const {id} = req.params;
    
    const updatedBook = BooksModel.updateBook(parseInt(id), req.body);
    if(!updatedBook){
        res.status(404).json({error: 'id de libro no encontrado para hacer update'});
        return;
    }
    res.status(201).json(updatedBook);
}
//Eliminar libro por id
export const deleteBook = (req: Request, res: Response): void => {
    const {id} = req.params;

    const deletedBook = BooksModel.deleteBook(parseInt(id));
    console.log('Deleted book', deleteBook);

    if(deletedBook === null){
        res.status(404).json({error: 'Libro no encontrado delete book'});
        return;
    }
    res.status(203).send(deletedBook);
}
//Buscar libro por author
export const searchBooksByAuthor = (req: Request, res:Response): void => {
    //En caso de hacer busquedas es mejor usar req.query porque lo hace mas escalable
    // Idealmente, usa query strings (?author=...) para búsquedas.
    const {author} = req.query;

     if (!author) {
        console.log('No se proporcionó un autor');
        res.status(400).json({ error: 'Debe proporcionar un autor para la búsqueda' });
        return;
    }
    const books = BooksModel.searchBooksByAuthor(author as string);

    if(books.length === 0){
        res.status(404).json({error: 'Libro no encontrado de ese autor'})
        return;
    }
    res.status(200).json(books);
}