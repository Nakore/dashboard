import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent {


  constructor(private formBuilder: FormBuilder, private http:HttpClient, private toastr:ToastrService, private service:AuthService, private router:Router){
        sessionStorage.clear();
  }

  userdata:any;

  loginform=this.formBuilder.group({
    email:this.formBuilder.control('', Validators.required),
    password:this.formBuilder.control('', Validators.required),

  })

login(){
  this.http.get<any>("https://nakore.onrender.com/api/adduser")
  .subscribe(res=>{

    const user = res.find((a:any)=>{
      return a.email === this.loginform.value.email && a.password === this.loginform.value.password

    });

    if (user) {
    alert("Login successful")
    this.loginform.reset();
    this.router.navigate(['dashboard']);

    }
    else{
      alert("Login failed")
    }
  }, err=>{
    //alert("Something went wrong")
    console.log(err)
  })
  this.router.navigate(['dashboard']);
}

}
