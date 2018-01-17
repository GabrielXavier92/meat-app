import { RestaurantService } from './../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantServive: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantServive.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
    //outra forma de fazer é declarando a variavel como Observable e atribuir o valor
    //do retorno da funcao.Na hora da iteração no template, deve ser usado o pipe | async
  }

}
