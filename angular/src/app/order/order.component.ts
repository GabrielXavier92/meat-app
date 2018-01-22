import { OrderService } from './../core/order.service';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

import 'rxjs/add/operator/do';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup;
  delivery = 8.00;

  orderId: string;

  paymentsOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MONEY'},
    { label: 'Cartao de Debito', value: 'DEBIT'},
    { label: 'Cartao Refeicao', value: 'REF'}
  ];

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optional: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo});
  }

  // tslint:disable-next-line:member-ordering
  static equalsTo (group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation) {
      return undefined;
    }
    if (email.value !== emailConfirmation.value) {
      return { emailsNotMatch: true };
    }

    return undefined;
  }

  cartItens() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  itensValue(): number {
    return this.orderService.itensValue();
  }

  checkOrder(order: Order) {
    order.orderItem = this.cartItens()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService.checkOrder(order)
      .do((orderId: string) => {
        this.orderId = orderId;
      })
      .subscribe((orderId: string) => {
        console.log(`Compra concluida id: ${orderId}`);
        this.orderService.clear();
        this.router.navigate(['/order-sumary']);
      });

  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

}
