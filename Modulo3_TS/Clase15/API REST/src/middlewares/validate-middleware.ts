import {Request, Response, NextFunction} from 'express';

export const validateBook = (req: Request, res: Response, next: NextFunction): void => {
    const {title, author} = req.body;
    if(!title || typeof title !== 'string'){
        res.status(400).json({error: "El campo 'title' es requerido y debe ser string"})
        return;
    }
    if(!author || typeof author !== 'string'){
        res.status(400).json({error: "El campo 'author' es requerido y debe ser string"});
        return;
    }
    next();
}