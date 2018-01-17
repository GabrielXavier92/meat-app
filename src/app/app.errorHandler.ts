import { Observable } from 'rxjs/Observable';
import { Response } from "@angular/http";

export class ErrorHandler {

    static errorHandler(error: Response | any){
        let errorMensagem: string;
        if(error instanceof Response){
            errorMensagem = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }
        else{
            errorMensagem = error.toString();
        }
        console.log(errorMensagem);
        return Observable.throw(errorMensagem);
    }
}