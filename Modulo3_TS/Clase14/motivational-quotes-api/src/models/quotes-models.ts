import fs from 'fs';
import path from 'path';
//definimos la ruta al archivo json que actua como BD de las frases
const filePath = path.join(__dirname, '../database/quotes.json');

interface Quote{
    id: string,
    text: string,
    autor: string
}

export class QuotesModel{
    static getAllQuotes(): Quote[]{
        //Lee el contenido del archivo json y lo convierte a js
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return data.quotes;
    }

    static getQuoteById(id:string): Quote | undefined{
        //Obtenga todas las frases
        const data = this.getAllQuotes();
        //Busca y devuelve la frase cuyo id coincide con el que le pasamos
        return data.find((quote) => quote.id === id);
    }
    static addQuote(newQuote: Quote): Quote{
        //Lee el contenido del archivo json y lo convierte a js
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        //Genera un nuevo id tomando enn cuenta la longitud del array
        const newId = (data.quotes.length + 1).toString();
        //Crea una frase nueva agregando el id que generamos
        const quote = {...newQuote, id: newId};
        //Agrega la frase al array
        data.quotes.push(quote);
        //Incremento el contador
        data.info.total += 1;
        //Guardamos los datos actualizados en el json
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        //Devuelve la frase
        return quote;
    }

    static updateQuote(id: string, updatedData: Partial<Quote>): Quote | null{
        //Lee el contenido del archivo json y lo convierte a js
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        //Encuentra el indice de la frase que coincide con el id
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id);
        if(index === -1) return null;
        data.quotes[index] = {...data.quotes[index], ...updatedData};
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return data.quotes[index];
    }
    
    static deleteQuote(id:string): boolean{
        //Lee el contenido del archivo json y lo convierte a js
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        //Encuentra el indice de la frase que coincide con el id
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id);
        if(index === -1) return false;
        data.quotes.splice(index, 1);
        data.info.total -= 1;
        return true;
    }
}

