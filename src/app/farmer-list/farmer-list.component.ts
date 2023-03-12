import { FarmerDetailComponent } from './../farmer-detail/farmer-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FarmerRegistrationService } from './../services/farmer-registration.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface Farmer{
  first_name : string;
  last_name: string;
  phone:string;
  pin:string;
  address: string;
  state:string;
  LGA: string;
  GeoLocation: string;
  crops_cultivating:string;
  average_cultivation:string;


}



@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrls: ['./farmer-list.component.scss']
  // providers:[FarmerRegistrationService]
})



export class FarmerListComponent {


  farmerLength:number | undefined;
farmersList : Farmer[] =[];
  selectedItem: any;
  textboxValue: any;
  constructor(private api:FarmerRegistrationService, private formBuilder: FormBuilder, private toastr:ToastrService, private service:FarmerRegistrationService, private router:Router,){
    this.getFarmers();
  }

  getFarmers=()=>{
  this.api.getallFarmers().subscribe(
    data=>{
     this.farmersList=data;
     this.farmerLength=this.farmersList.length

    },
    error=>{
      console.log(error);
    }
  )
}

selectedPerson: any;

  displayData(person: any) {
    this.selectedPerson = person;
  }



  farmerRegister2=this.formBuilder.group({
    // id:this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    first_name:this.formBuilder.control('', Validators.required),
    last_name:this.formBuilder.control('', Validators.required),
    phone_number:this.formBuilder.control('', Validators.required),
    pin:this.formBuilder.control('', Validators.required),
    address: this.formBuilder.control('', Validators.required),
    state:this.formBuilder.control('', Validators.required),
    LGA: this.formBuilder.control('', Validators.required),
    GeoLocation: this.formBuilder.control('', Validators.required),
    crops_cultivating:this.formBuilder.control('', Validators.required),
    average_cultivation:this.formBuilder.control('', Validators.required)

  })


  farmerRegistration2(){
    // if(this.farmerRegister2.valid){
        this.service.farmerregister2(this.farmerRegister2.value).subscribe(res=>{
            console.log(res);
        })
    }
    // else{


    }


