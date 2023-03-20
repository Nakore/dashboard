import { Order } from './../model/orders';
import { FarmerRegistrationService } from '../services/farmer-registration.service';
import { ProductService } from '../services/product.service';
import { ProductComponent } from './../product/product.component';
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

interface Farmer{
  first_name : string;
  last_name: string;
  phone:string;
  pin:string
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent {

  orderList:Order[] = [];
  productsList: ProductArr[] = [];

  productLength:number | undefined;
  orderLength: number | undefined;

  constructor(private api:ProductService, private api1:FarmerRegistrationService){
    this.getProducts();
    this.getFarmers();
    this.getOrder();
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


farmerLength:number | undefined;
farmersList : Farmer[] =[];


  getFarmers=()=>{
  this.api1.getallFarmers().subscribe(
    data=>{
     this.farmersList=data;
     this.farmerLength=this.farmersList.length

    },
    error=>{
      console.log(error);
    }
  )
}


getOrder=()=>{
  this.api.getallOrder().subscribe(
    data=>{
     this.orderList=data;
     this.orderLength=this.orderList.length;
     const completedItems = this.orderList.filter(item => item.status === 'completed');
     //this.completedItemsLength = completedItems.length;


    },
    error=>{
      console.log(error);
    }
  )
}



}
