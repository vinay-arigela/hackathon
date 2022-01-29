import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminScreenComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: AdminScreenComponent }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
