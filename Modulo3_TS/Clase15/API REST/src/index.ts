// Importamos express y algunos tipos especificos de express
import express, { Application, Request, Response, NextFunction } from 'express'

import booksRouter from './routes/books-router';
import { errorMiddleware } from './middlewares/error-middleware';

//Instancia express
const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/books', booksRouter);

//Middleware que maneja la solicitud a rutas
app.use((req: Request, res:Response) => {
    res.status(404).json({error:'Endpoint no encontrado'});
})

//Middleware global
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/api/books`);
})

