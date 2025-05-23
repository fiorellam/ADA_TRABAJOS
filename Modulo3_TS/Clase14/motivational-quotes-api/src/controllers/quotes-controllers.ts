import {Request, Response} from "express";
import {QuotesModel} from '../models/quotes-models';

//controlador para obtener todas las frases;
export const getAllQuotes = (req: Request, res: Response): void => {
    const quotes = QuotesModel.getAllQuotes();
    res.json(quotes)
}
//Controlador para frase por id
export const getQuotesById = (req: Request, res: Response): void => {
    const {id} = req.params;
    //extraemos el parametro id de la solicitud
    const quote = QuotesModel.getQuoteById(id);
    //Llamamos al metodo del modelo para buscar la frase por id
    if(!quote){
        res.status(404).json({error: "Frase no encontrada"});
        return;
    }
    res.json(quote);
}

export const createQuotes = (req:Request, res:Response): void => {
    const newQuote = QuotesModel.addQuote(req.body);
    //Llamemos al metodo del modelo para agregar una nueva frase con los datos de la solicitud
    res.status(201).json(newQuote);

}

export const updateQuotes = (req:Request, res:Response): void => {
    const {id} = req.params;
    //Extraemos el parametro id de la solicitud
    const updateQuotes = QuotesModel.updateQuote(id, req.body);
    res.status(201).json(updateQuotes);

}
export const deleteQuotes = (req: Request, res: Response): void => {
    const {id} = req.params;

    const isDeleted = QuotesModel.deleteQuote(id);
    if(!isDeleted){
        res.status(404).json({error: "Frase no encontrada, no se pudo borrar"});
        return
    }
    res.status(204).send();
}