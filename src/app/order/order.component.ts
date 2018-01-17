import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  delivery = 8.00;

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
      name: this.formBuilder.control(''),
      email: this.formBuilder.control('', ),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optional: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')
    });
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
      .subscribe((orderId: string) => {
        console.log(`Compra concluida id: ${orderId}`);
        this.orderService.clear();
        this.router.navigate(['/order-sumary']);
      });
    console.log(order);
  }

}
