import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FarmerRegitrationComponent } from './farmer-regitration/farmer-regitration.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { FarmerDetailComponent } from './farmer-detail/farmer-detail.component';
import { FarmerTransactionComponent } from './farmer-transaction/farmer-transaction.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { RetailerComponent } from './retailer/retailer.component';
import { RetailerListComponent } from './retailer-list/retailer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FarmerRegitrationComponent,
    FarmerListComponent,
    FarmerDetailComponent,
    FarmerTransactionComponent,
    ProductComponent,
    AddProductComponent,
    DashboardComponent,
    OrderComponent,
    RetailerComponent,
    RetailerListComponent,



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
