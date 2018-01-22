import { RestaurantService } from './../../core/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu.item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itensMenu: Observable<MenuItem[]>;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
   this.itensMenu =  this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
