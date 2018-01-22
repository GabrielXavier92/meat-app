import { ShoppingCartService } from '../../core/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu.item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit() {
  }

  returnItens(): CartItem[]{
    return this.shoppingService.itens;
  }

  returnTotal(): number{
    return this.shoppingService.total();
  }

  clear() {
    this.shoppingService.clear();
  }

  removeItem(item: CartItem){
    this.shoppingService.removeItem(item);
  }

  addItem(item: MenuItem){
    this.shoppingService.addItem(item);
  }

}
