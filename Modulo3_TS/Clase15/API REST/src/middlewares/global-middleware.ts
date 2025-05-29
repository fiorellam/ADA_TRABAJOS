import {Request, Response, NextFunction} from 'express';

export const globalMessage = (req: Request, res: Response, next: NextFunction): void => {
    console.log("Middleware global: Se recibió una solicitud");
    next();
}
