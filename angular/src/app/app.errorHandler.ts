import { LoginService } from './core/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AplicationErrorHandler extends ErrorHandler {

    constructor(private injector: Injector) {
        super()
    }

    handleError(error: HttpErrorResponse | any) {
       if (error instanceof HttpErrorResponse) {
           const message = error.error.message
          switch (error.status) {
            case 401:
                this.injector.get(LoginService).handleLogin();
                break;

            case 403:
                console.log(message)
                break;

            case 404:
                console.log(message)
                break;
          }
       }
       super.handleError(error);
    }
}
