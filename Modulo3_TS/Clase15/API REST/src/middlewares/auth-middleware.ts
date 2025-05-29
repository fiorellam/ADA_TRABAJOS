import express, { Request, Response, NextFunction } from 'express'

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization']
    if (token === '123456') {
        next();
    } else {
        res.status(401).json({error: "Token invalido o faltante"});
    }
}