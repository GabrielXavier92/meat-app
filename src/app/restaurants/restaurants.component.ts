import { RestaurantService } from './restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantServices: RestaurantService) { 

   

  }

  ngOnInit() {

    this.restaurantServices.restaurants()
      .subscribe(rests => this.restaurants = rests);

  }

}
