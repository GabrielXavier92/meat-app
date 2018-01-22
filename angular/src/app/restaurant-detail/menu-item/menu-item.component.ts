import { MenuItem } from './menu.item.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

@Input() itemMenu: MenuItem;
@Output() adicionar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.adicionar.emit(this.itemMenu);
  }

}
