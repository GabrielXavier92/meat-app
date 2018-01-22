import { LeaveOrderGuard } from './leave-order.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { OrderComponent } from './order.component';

const ROUTE: Routes = [
   { path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard] }
]

@NgModule({
   declarations: [
      DeliveryCostsComponent,
      OrderComponent,
      OrderItensComponent
   ],
   imports: [
      SharedModule,
      RouterModule.forChild(ROUTE)
   ]
})
export class OrderModule { }