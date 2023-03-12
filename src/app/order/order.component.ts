import { Order } from './../model/orders';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FarmerRegistrationService } from '../services/farmer-registration.service';
import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
orderList: Order[] = [];
  constructor(private formBuilder: FormBuilder, private toastr:ToastrService, private service:ProductService, private router:Router,){
    this.getOrder();
  }

  orderRegister=this.formBuilder.group({
    // id:this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    order_ID:this.formBuilder.control('', Validators.required),
    order_date:this.formBuilder.control('', Validators.required),
    farmers_id:this.formBuilder.control('', Validators.required),
    farmers_name:this.formBuilder.control('', Validators.required),
    product_name:this.formBuilder.control('', Validators.required),
    product_price: this.formBuilder.control('', Validators.required),
    product_quantity:this.formBuilder.control('', Validators.required),
    state: this.formBuilder.control('', Validators.required),
    LGA: this.formBuilder.control('', Validators.required),
   address:this.formBuilder.control('', Validators.required),
    retailer:this.formBuilder.control('', Validators.required),
    status:this.formBuilder.control('', Validators.required),
    geolocation:this.formBuilder.control('', Validators.required)

  })


  order_registration(){
    // if(this.farmerRegister2.valid){
        this.service.orderregister(this.orderRegister.value).subscribe(res=>{
            console.log(res);
        })
    }


    getOrder=()=>{
      this.service.getallOrder().subscribe(
        data=>{
         this.orderList=data;

        },
        error=>{
          console.log(error);
        }
      )
    }

}
