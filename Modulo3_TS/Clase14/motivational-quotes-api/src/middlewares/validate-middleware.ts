import express, {Request, Response, NextFunction} from 'express';
export const validateQuotes = (req: Request, res: Response, next: NextFunction): void => {
    const {text, autor} = req.body;
    if(!text || typeof text !== 'string'){
        res.status(400).json({error: "El campo 'text' es requerido y debe ser string" })
        return
    }
    if(!autor || typeof autor !== 'string'){
        res.status(400).json({error: "El campo 'autor' es requerido y debe ser string"})
    }
    next();
}