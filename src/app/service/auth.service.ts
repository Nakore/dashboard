import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http:HttpClient) { }
  apiurl='https://nakore.onrender.com/api/adduser'
  // apiurl='http://localhost:3000/user'

  GetAll(){
    return this.http.get(this.apiurl);
  }

  Getbyemail(email:any){
    return this.http.get(this.apiurl +'/'+email);
  }

  proceedregister(inputdata:any){
    console.log(inputdata);
    let body = new URLSearchParams();
    body.set('first_name', inputdata.first_name);
    body.set('last_name', inputdata.last_name);
    body.set('email', inputdata.email);
    body.set('password', inputdata.password);
    body.set('role', inputdata.role);
  return this.http.post(this.apiurl,body.toString(), this.options)
  }

  updateuser(email:any, inputdata:any){
    return this.http.put(this.apiurl +'/'+ email,inputdata)
    }

  IsLoggedIn(){
    return sessionStorage.getItem('email')!=null;
  }
  GetUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';

  }
}
