import express from 'express';
import userRouter from './src/routes/userRouter';
const app = express();

app.use(express.json());

app.use('/users', userRouter);

export default app;