import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';
import { FetchOrdersComponent } from './components/fetch-orders/fetch-orders.component';


@NgModule({
  declarations: [AdminScreenComponent, FetchOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AgGridModule.withComponents([]),
    BsDatepickerModule.forRoot()
  ]
})
export class AdminModule { }
