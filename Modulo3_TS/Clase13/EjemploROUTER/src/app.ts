//Importamos express
import express from 'express';

//importamos userRouter
import userRouter from './routes/userRouter';

//instancia de express
const app = express();

//middleware para parsear json
app.use(express.json());

//Configuracion de las rutas
//Asociamos el router 'userRouter' al prefijo '/users'
//esto signidica que todas las rutas definidas en userRouter estaran disponibles
//bajo la ruta base '/users'
app.use('/', userRouter);
app.use('/users', userRouter);

export default app;