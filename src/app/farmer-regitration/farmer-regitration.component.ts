import { FarmerRegistrationService } from './../services/farmer-registration.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-farmer-regitration',
  templateUrl: './farmer-regitration.component.html',
  styleUrls: ['./farmer-regitration.component.scss']
})
export class FarmerRegitrationComponent {
  addTaskValue: any;

  constructor(private formBuilder: FormBuilder, private toastr:ToastrService, private service:FarmerRegistrationService, private router:Router,){

  }

  farmerRegister=this.formBuilder.group({
    // id:this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    first_name:this.formBuilder.control('', Validators.required),
    last_name:this.formBuilder.control('', Validators.required),
    phone:this.formBuilder.control('', Validators.required),
    pin:this.formBuilder.control('', Validators.required),


  })

  farmerRegistration(){
    if(this.farmerRegister.valid){
        this.service.farmerregister(this.farmerRegister.value).subscribe(res=>{
            console.log(res);
        })
    }else{
        console.log("Please enter a valid registration")
    }
  }






}
