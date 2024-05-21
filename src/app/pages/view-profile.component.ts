import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersApiService } from './customer-api-service';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  CustomerDetails: CustomerModel = <CustomerModel>{}

  constructor(private http: HttpClient, private router: Router, public apiService: CustomersApiService) {
    const uid = this.getUserIdFromSession();
    if(uid !== null) {
      this.apiService.getDetails(uid).subscribe(
        (data) => this.CustomerDetails = data
      );
    }
  }

  ngOnInit(): void {
    const userId = this.getUserIdFromSession();
    if (userId !== null) {
      this.apiService.getCustomerByUserId(userId.toString()).subscribe(
        (data: CustomerModel) => {
          this.CustomerDetails = data;
        },
        error => {
          console.error('Error fetching customer data:', error);
        }
      );
    }
  }

  goToEdit(): void {
    this.router.navigateByUrl('/edit-profile');
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard');
  }

  getUserIdFromSession(): number | null {
    const userId = sessionStorage.getItem('userId');
    return userId ? Number(userId) : null;
  }
}

export class CustomerModel {
  constructor(
    public customerId: number,
    public firstName: string,
    public lastName: string,
    public addressLine1: string,
    public addressLine2: string,
    public addressLine3: string,
    public phoneNumber: string,
    public pincode: number,
    public emailAddress: string,
    public dateOfBirth: Date,
    public city: string,
    public country: string,
    public userId: string
  ) {}
}
