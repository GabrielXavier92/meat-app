import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
