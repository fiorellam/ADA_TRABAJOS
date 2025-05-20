//importamos el modulo router desde express
import {Router} from 'express';

//Creamos la instancia del router
const userRouter = Router();

//Definimos las rutas basicas del recurso usuarios

//Ruta GET - Obtener
userRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los usuarios'});
});
//Ruta POST - crear
userRouter.post('/', (req, res) => {
    const {name, email} = req.body //extramos los datos enviados en la solicitud
    res.status(201).json({message: 'Usuario creado', user: {name, email}});
})
//Ruta PUT - actualizar
userRouter.put('/:id', (req, res) => {
    const {id} = req.params //extraemos el id del parametro de la url
    const {name, email} = req.body //extraemos los nuevos datos enviados en el cuerpo de la solicitud
    res.json({message: `Usuario con ID: ${id} actualizado`});
})
//Ruta DELETE - borrar
userRouter.delete('/:id', (req, res) => {
    const {id} = req.params //extraemos el id del parametro de la url
    res.json({message: `Usuario con el id ${id}, borrado con exito`});
})

export default userRouter;