import { AplicationErrorHandler } from './app.errorHandler';
import { CoreModule } from './core/core.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';

import { ROUTES } from 'app/app.router';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent,
    NotFoundComponent,
    OrderSumaryComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ReviewsComponent,
    ShoppingCartComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    // Os modulos que sao lazingload, serao carregados em background enquanto nao sao usados
    // dessa forma na hora que a pessoa for usar o component ele ja foi carregado, mas somente apos
    // a aplicacao ter subido
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    SharedModule
    ],
  providers: [
    { provide: ErrorHandler, useClass: AplicationErrorHandler },
    // apos o build forca o servidor a carregar o index quando passar um caminho forcado
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
