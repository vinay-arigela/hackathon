import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookOrderComponent } from './book-order';

const routes: Routes = [
  { path: '', redirectTo: 'book-order', pathMatch: 'full' },
  { path: 'book-order', component: BookOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
