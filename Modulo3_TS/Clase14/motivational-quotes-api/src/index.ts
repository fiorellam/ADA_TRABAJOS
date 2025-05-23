//Importamos express y algunos tipos especificos de express
import express, {Application, Request, Response, NextFunction} from 'express';
import quotesRouter from './routes/quotes-routes';
import {errorMiddleware} from './middlewares/error-middleware';

//Creamos una instancia de express
const app: Application = express();
//definimos el puerto
const PORT = 3000;

//middleware global para analizar el cuerpo de solicutudes en formato json
app.use(express.json())

//Configuracion de rutas principales de la api
const API_ENDPOINT = '/api/quotes';
app.use(API_ENDPOINT, quotesRouter);

//middleware para manejar las solicitudes a rutas
app.use((req: Request, res: Response) => {
    res.status(404).json({error: 'Endpoint no encontrado'});
});

//middlewaRe global para manejar la api
app.use(errorMiddleware);

//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}${API_ENDPOINT}`);
})