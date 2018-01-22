import { LoginService } from './../core/login.service';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanLoad {

   constructor(private loginService: LoginService) { }

   checkAuthenticatede(path: string): boolean {
      const logado = this.loginService.isLogged()
      if (!logado) {
         this.loginService.handleLogin(`/${path}`)
      }
      return logado;

   }

   canLoad(route: Route): boolean {
      return this.checkAuthenticatede(route.path)
   }

   canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
      return this.checkAuthenticatede(activatedRoute.routeConfig.path);
   }

}
