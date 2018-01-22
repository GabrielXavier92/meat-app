import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RestaurantService } from './../core/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations:[
    trigger('toggleSearch',[
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchForm: FormGroup;
  searchControl: FormControl;

  searchBarState = 'hidden';

  restaurants: Restaurant[];

  constructor(private restaurantServices: RestaurantService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('');

    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      // espera 500ms para buscar
      .debounceTime(500)
      // se a proxima busca for igual a ultima ele nao repete a busca
      .distinctUntilChanged()
      .switchMap((searchTerm) =>
        this.restaurantServices.restaurants(searchTerm)
      )
      .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantServices.restaurants()
      .subscribe(rests => this.restaurants = rests);

  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}
