// Para API REST
// Crear una API básica
// Crea una API REST con un endpoint /books que devuelva una lista de
// libros en formato JSON.
// Método: GET.
// CRUD simple
// Ampliar el ejercicio anterior agregando endpoints para:
// ▪ Crear un libro (POST /books).
// ▪ Actualizar un libro existente (PUT /books/:id).
// ▪ Eliminar un libro (DELETE /books/:id).
// Los datos pueden guardarse en un archivo database.
// Filtrado
// Agregar un endpoint /books?author=nombre para devolver solo los libros
// de un autor específico.
// Método: GET.
// Detalles de un recurso
// Crear un endpoint /books/:id que devuelva la información de un libro por
// su id.
// Si el libro no existe, devuelve un mensaje de error adecuado (404).
// Status codes y mensajes claros
// Revisar la API para que devuelva los códigos de estado HTTP
// correspondientes para cada caso, como 200, 201, 404, y 400
//Modulo fs de node para trabajar con el sistema de archivos
import fs from 'fs';

//Modulo para manejar y resolver rutas de archivos
import path from 'path';

//Define la ruta al archivo json
const bookFilePath = path.join(__dirname, '../database/books.json');

//Interfaz typescript de book
interface Book{
    id: number, 
    title: string,
    author: string
}

//Define clase que encapsula las operaciones relacionadas con los libros
export class BooksModel{

    //Se crea metodo para reutilizar cada que se lea el archivo database books.json
    static readDatabase(): any{
        try{
            const data = fs.readFileSync(bookFilePath, 'utf-8');
            return JSON.parse(data);
        } catch(error){
            console.error('Error leyendo y parseando el archivo de base de datos: ', error)
            return null;
        }
    } 

    //Se crea metodo para reutilizar cada que se escriba en archivo database books.json
    static writeDatabase(data:any): void {
        try{
            const jsonData = JSON. stringify(data, null, 2);
            fs.writeFileSync(bookFilePath, jsonData, 'utf-8');
            console.log('Database successfully written.');
        } catch (error) {
            console.error('Error writing to the database file:', error);
        }
    }

    //Metodo que obtiene todos los libros que se encuentren en el archivo json
    static getAllBooks(): Book[]{
        //Lee el contenido del archibo json y lo convierte a un objeto Javascript
        const data = this.readDatabase();
        if(data && Array.isArray(data)){
            //Devuelve el array de libros si es valido
            return data;
        } else {
            console.error('No valid array found in the database');
            return [];
        }
    }

    //Obtener libro por ID
    static getBookById(id:number): Book | undefined{
        //Obtenemos todos los libros
        // const books = this.getAllBooks();
        const books = this.getAllBooks();
        //Busca y devuelve la frase cuyo ID coincida con el ingresado
        // const dn = dataFile.find((book) => book.id === id);
        // console.log(dn);
        return books.find((book) => book.id === id);
    }

    //Se agrega un nuevo libro
    static addBook(newBook: Book): Book{
        const books = this.getAllBooks();
        let newId = 0;
        if(books.length > 0){
            //En caso de que ya existan libros, toma el ultimo id y le suma 1 para que cuando se generen nuevos libros, no haya problemas con los id o duplicados
            const lastBookId = books[books.length-1].id;
            newId = (lastBookId + 1);
        } else {
            newId = books.length + 1;
        }
        const book = {...newBook, id: newId};
        books.push(book);
        this.writeDatabase(books);
        return book;
    }

    //Se actualiza libro por id
    static updateBook(id: number, updatedData: Partial<Book>): Book | null {
        const books = this.getAllBooks();
        const index = books.findIndex((book: Book) => book.id === id);

        if(index === -1) return null;

        books[index] = {...books[index], ...updatedData};
        this.writeDatabase(books);
        return books[index];
    }

    //Se elimina libro por id
    static deleteBook(id:number): Book | null{
        const books = this.getAllBooks();
        const index = books.findIndex((book) => book.id === id);

        if (index === -1) return null;
        
        const bookDeleted = books[index];
        console.log(bookDeleted);

        books.splice(index, 1);
        this.writeDatabase(books);
        return bookDeleted;
    }

    //Se busca libro por autor
    static searchBooksByAuthor(author: string) : Book[] {
        const books = this.getAllBooks();
        return books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()));
    }
}