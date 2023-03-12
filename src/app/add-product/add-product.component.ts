import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor(private formBuilder: FormBuilder, private toastr:ToastrService, private service:ProductService, private router:Router){

  }

  productRegister=this.formBuilder.group({
    // id:this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    title:this.formBuilder.control('', Validators.required),
    description:this.formBuilder.control('', Validators.required),
    quantity:this.formBuilder.control('', Validators.required),
    category:this.formBuilder.control('', Validators.required),
    barcode:this.formBuilder.control('', Validators.required),
    price:this.formBuilder.control('', Validators.required),
    supplier_price:this.formBuilder.control('', Validators.required),
    date_added:this.formBuilder.control('', Validators.required),

  })

  productRegistration(){
    if(this.productRegister.valid){
        this.service.productregister(this.productRegister.value).subscribe(res=>{
          console.log("Please enter registration")
         this.router.navigate(['login'])
        })
    }else{
        console.log("Please enter a valid registration")
    }
  }




}
