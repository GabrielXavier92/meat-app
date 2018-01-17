import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from 'app/order/order.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http  ) { }

  cartItems(): CartItem[]{
    return this.cartService.itens;
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.cartService.removeItem(item);
  }

  itensValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
      return this.http.post(`${MEAT_API}/orders`,
                          JSON.stringify(order),
                          new RequestOptions({headers: headers}))
            .map(response => response.json())
            .map(orderId => orderId.id);
  }

  clear() {
    this.cartService.clear();
  }
}
