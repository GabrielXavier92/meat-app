import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html',
  styleUrls: ['./order-itens.component.css']
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[];

  // emite um evento para quem esta consumindo o component

  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  // fucones que sao disparadas ao clicar no icones de menos mais e remove do template
  // ao clicar nesses icones é disparado um evento para o component principal
  
  emiteIncrease(item: CartItem){
    this.increaseQty.emit(item);
  }

  emiteDecrease(item: CartItem){
    this.decreaseQty.emit(item);
  }

  emiteRemove(item: CartItem){
    this.remove.emit(item);
  }

}
