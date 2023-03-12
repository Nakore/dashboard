import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';

interface ProductArr{
  title: string;
  description:string;
  quantity:string;
  category:string;
  barcode:string;
  price:Number;
  supplier_price:Number;
  date_added:string;

}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})



export class ProductComponent {

  productsList: ProductArr[] = [];

  productLength:number | undefined;

  constructor(private api:ProductService){
    this.getProducts();
  }

  getProducts=()=>{
  this.api.getallproduct().subscribe(
    data=>{
     this.productsList=data.products;

     this.productLength=this.productsList.length;



    },
    error=>{
      console.log(error);
    }
  )
}


}
