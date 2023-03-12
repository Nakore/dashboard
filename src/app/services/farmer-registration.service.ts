import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Farmers } from '../model/farmers';

@Injectable({
  providedIn: 'root'
})
export class FarmerRegistrationService {

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  baseurl="https://nakore.onrender.com/"
  httpHeaders= new HttpHeaders({'Content-Type': 'application/json'})
  serviceURL: string;

  constructor(private http:HttpClient) {
    this.serviceURL = 'http://localhost:3000/farmers';
  }

  getallFarmers(): Observable<any> {
    return this.http.get(this.baseurl+'api/getfarmer/',{headers:this.httpHeaders});

  }

  getFarmer(id:string): Observable<any> {
    return this.http.get(this.baseurl+`api/getfarmer/${id}` ,{headers:this.httpHeaders});
  }


  farmerregister(inputdata:any){
    console.log(inputdata);
    let body = new URLSearchParams();
    body.set('first_name', inputdata.first_name);
    body.set('last_name', inputdata.last_name);
    body.set('phone', inputdata.phone);
    body.set('pin', inputdata.pin);
  return this.http.post(this.baseurl+'api/register',body.toString(), this.options)
  }

  //dummy content


  farmerregister2(inputdata:any){
    // console.log(inputdata);
    // let body = new URLSearchParams();
    // body.set('first_name', inputdata.first_name);
    // body.set('last_name', inputdata.last_name);
    // body.set('phone', inputdata.phone);
    // body.set('pin', inputdata.pin);
  return this.http.post<any>(this.serviceURL, inputdata)
  }

  // addTask(farmer: Farmers): Observable<Farmers> {
  //   return this.http.post(this.serviceURL, farmer);
  // }


}
