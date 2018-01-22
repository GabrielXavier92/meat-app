import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginService } from './login.service';
import { ShoppingCartService } from './shopping-cart.service';
import { RestaurantService } from './restaurants.service';
import { OrderService } from './order.service';
import { LoggedInGuard } from '../security/logged.guard';
import { LeaveOrderGuard } from '../order/leave-order.guard';
import { AuthInterceptor } from '../security/auth.interceptor';

@NgModule({
   providers: [
      LeaveOrderGuard,
      LoggedInGuard,
      LoginService,
      OrderService,
      RestaurantService,
      ShoppingCartService,
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
   ]
})

export class CoreModule{ }

