import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { Routes } from "@angular/router";
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';

export const ROUTES: Routes = [
    { path: '' , component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children:[ // dentro da rota restaurants/:id foi criado rotas filhas para fazer a navegacao dentro do proprio component
            { path: '', redirectTo: 'menu', pathMatch: 'full' }, // quando entrar na primeira vez, direciona para o menu
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', component: OrderComponent },
    { path: 'order-sumary', component: OrderSumaryComponent}
]