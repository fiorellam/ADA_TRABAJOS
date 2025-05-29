import {Router} from 'express';

import {getAllBooks, getBookById, createBook, updateBook, deleteBook, searchBooksByAuthor} from '../controllers/books-controller';

import {validateBook} from '../middlewares/validate-middleware';

const router: Router = Router();

router.get('/search/author/', searchBooksByAuthor)
// router.get('/search/', searchBooksByAuthor) Tambien puede ser solo search
router.get('/', getAllBooks);
//REGLA GENERAL: Rutas más específicas primero, luego las rutas con parámetros dinámicos.
//  las rutas dinámicas como /:id deben colocarse después de rutas más específicas como /author/:author.
//Express evalúa las rutas en orden secuencial (de arriba hacia abajo). 
// Si tienes: 
    // router.get('/:id', getBookById);
    // router.get('/author/:author', searchBooksByAuthor);
// Entonces una solicitud a /author/Orwell pasará por /:id primero, 
// y probablemente intente buscar un libro con ID author, lo que no es lo que queremos.
// Nunca pongas /books/:id antes de rutas específicas como /books/author/:author o /books/search.
router.get('/:id', getBookById);
router.post('/' , validateBook, createBook)
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;