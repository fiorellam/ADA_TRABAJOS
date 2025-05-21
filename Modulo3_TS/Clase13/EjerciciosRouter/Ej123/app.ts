// Ejercicio 3: Crear el Archivo app.ts y Configurar el Servidor

// Descripción:
// 1. Crea el archivo app.ts que configurará el servidor Express y los routers.
// 2. En el archivo app.ts, importa los routers creados en los ejercicios
// anteriores y conecta el servidor.
// 3. Haz que el servidor escuche en el puerto 3000. 
import express from 'express';
//Importamos los routers
import userRouter from './src/routes/e1userRouter';
import productRouter from './src/routes/e2productRouter';

const app = express(); //instancia de express

//midleware para parsear json
app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);

export default app;