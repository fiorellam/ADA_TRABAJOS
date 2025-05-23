import {Router} from 'express';
//Importacion de funciones
import {getAllQuotes, getQuotesById, createQuotes, updateQuotes, deleteQuotes} from '../controllers/quotes-controllers';
import {validateQuotes} from '../middlewares/validate-middleware';

//Creando la instancia del Router (para manejar las rutas)
const router: Router = Router();

router.get('/', getAllQuotes);
router.get('/:id', getQuotesById);
router.post('/', validateQuotes, createQuotes);
router.put('/:id', updateQuotes);
router.delete('/:id', deleteQuotes);

export default router;