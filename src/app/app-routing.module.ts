import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmerDetailComponent } from './farmer-detail/farmer-detail.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { FarmerRegitrationComponent } from './farmer-regitration/farmer-regitration.component';
import { FarmerTransactionComponent } from './farmer-transaction/farmer-transaction.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailerComponent } from './retailer/retailer.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  // {path:'navbar',component:NavbarComponent, canActivate:[AuthGuard]},
  {path:'navbar',component:NavbarComponent},
  {path: 'register', component:RegisterComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'farmer-detail', component:FarmerDetailComponent},
  {path:'product', component:ProductComponent},
  {path:'farmer-registration', component:FarmerRegitrationComponent},
  {path:'farmer-list', component:FarmerListComponent},
  {path: 'orders', component:OrderComponent},
  {path:'farmer-transaction', component:FarmerTransactionComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'retailer', component:RetailerComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  NavbarComponent,
  RegisterComponent,
  LoginComponent,
  AddProductComponent,
  FarmerDetailComponent,
  ProductComponent,
  FarmerRegitrationComponent,
  FarmerListComponent,
  DashboardComponent,
  OrderComponent,
  RetailerComponent
];

