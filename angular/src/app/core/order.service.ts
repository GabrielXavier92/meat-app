import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Order } from '../order/order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
              private http: HttpClient) { }

  cartItems(): CartItem[] {
    return this.cartService.itens;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itensValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    // quando vai fazer o post, na requisicao da url alem de enviar o objeto que se deseja postar
    // enviamos tambem um header para que o backend verifique se o usuario tem ou nao autorizacao
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .map(orderId => orderId.id);
  }

  clear() {
    this.cartService.clear();
  }
}
