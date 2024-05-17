import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CustomersApiService } from './customer-api-service';
import {  HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
CustomerDetails: CustomerModel = <CustomerModel>{}

  constructor(private http: HttpClient,private router:Router,public apiService: CustomersApiService)
  {
     debugger;

     this.apiService.getDetails(3).subscribe(
      (data)=>this.CustomerDetails= data
    )
    
    
  }

  
  onEdit(){
    
     
    this.apiService.update(this.CustomerDetails).subscribe(
      data=>{
        alert("updated Successfully")
      })
    // this.apiService.update().subscribe(
    //   (data)=>this.CustomerDetails= data
    // )
   // this.router.navigateByUrl('/edit-profile')
  }
}

export class CustomerModel
  {
      constructor(
          public customerId:number, 
          public firstName:string,
          public lastName:string,
          public addressLine1:string,
          public addressLine2:string,
          public addressLine3:string,
          public phoneNumber: string,
          public pincode:number,
          public emailAddress:string,
          public dateOfBirth :Date,
          public city:string,
          public country:string
          )
    { }
     
  }
