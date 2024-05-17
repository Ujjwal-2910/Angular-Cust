import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from './login.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private http:HttpClient,private router:Router)
  {
  }

  onViewProfile(){
   
    this.router.navigateByUrl('/view-profile')
  }
  
  isAuthenticated : boolean = false; 
  tokenObject : LoginModel = <LoginModel>{};
  returnUrl : string = "";

  onSubmitSignOut()
  {
    console.log("going here");
    this.isAuthenticated=false; 
    this.tokenObject=<LoginModel>{};
    alert("You are signed out")
    this.router.navigateByUrl('/login')
  }
}
