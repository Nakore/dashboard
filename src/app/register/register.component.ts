import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router){

  }

  registerform=this.formBuilder.group({
    // id:this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    first_name:this.formBuilder.control('', Validators.required),
    last_name:this.formBuilder.control('', Validators.required),
    password:this.formBuilder.control('', Validators.required),
    email:this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    role:this.formBuilder.control(''),
  })

  proceedregistration(){
    if(this.registerform.valid){
        this.service.proceedregister(this.registerform.value).subscribe(res=>{
          alert("Registration Success")
          this.registerform.reset();
          this.toastr.success('Please contact admin to enable access','Registered successfully')
          console.log("Please enter registration")

          this.router.navigate(['login'])
        })
    }else{
      this.toastr.warning("Please enter a valid registration")
      console.log("Please enter a valid registration")
    }
  }




}
