import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ProductService {


options = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};


  baseurl="https://nakore.onrender.com/"
  httpHeaders= new HttpHeaders({'Content-Type': 'application/json'})
  serviceURL: string;

  constructor(private http:HttpClient) {
    this.serviceURL = 'http://localhost:3000/orders';
   }

  getallproduct(): Observable<any> {
    return this.http.get(this.baseurl+'api/getall/',{headers:this.httpHeaders});

  }

  productregister(inputdata:any){
    console.log(inputdata);
    let body = new URLSearchParams();
    body.set('title', inputdata.title);
    body.set('description', inputdata.description);
    body.set('quantity', inputdata.quantity);
    body.set('category', inputdata.category);
    body.set('barcode', inputdata.barcode);
    body.set('price', inputdata.price);
    body.set('supplier_price', inputdata.supplier_price);
    body.set('date_added', inputdata.date_added);
  return this.http.post(this.baseurl+'api/addproduct',body.toString(), this.options)
  }

//dummy function

orderregister(inputdata:any){
  // console.log(inputdata);
  // let body = new URLSearchParams();
  // body.set('first_name', inputdata.first_name);
  // body.set('last_name', inputdata.last_name);
  // body.set('phone', inputdata.phone);
  // body.set('pin', inputdata.pin);
return this.http.post<any>(this.serviceURL, inputdata)
}

getallOrder(): Observable<any> {
  return this.http.get(this.serviceURL);

}


}
