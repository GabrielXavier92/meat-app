import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';

import { LoggedInGuard } from './security/logged.guard';

export const ROUTES: Routes = [
    { path: '' , component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [ // dentro da rota restaurants/:id foi criado rotas filhas para fazer a navegacao dentro do proprio component
        { path: '', redirectTo: 'menu', pathMatch: 'full' }, // quando entrar na primeira vez, direciona para o menu
        { path: 'menu', component: MenuComponent },
        { path: 'reviews', component: ReviewsComponent }
    ]
},
{ path: 'restaurants', component: RestaurantsComponent },
{ path: 'order-sumary', component: OrderSumaryComponent},

// lazing loading
// quando a rota about é acionada, o modulo AboutModule é carregado
// foi criado as rotas para esse modulo dentro do about.module.ts  order.module.ts

// a rota order esta protegida por uma guard e so sera carregado/ativa se o usuario estiver auntenticado
    { path: 'order', loadChildren: './order/order.module#OrderModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },

    // Rota de notFound da Aplicação
    { path: '**', component: NotFoundComponent }
]
