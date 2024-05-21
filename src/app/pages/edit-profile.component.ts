import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerModel } from './view-profile.component';
import { CustomersApiService } from './customer-api-service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  CustomerDetails: CustomerModel = <CustomerModel>{}

  constructor(private http: HttpClient, private router: Router, public apiService: CustomersApiService) {
    const uid = this.getUserIdFromSession();
    if(uid !== null) {
      this.apiService.getDetails(uid).subscribe(
        (data) => this.CustomerDetails = data
      )
    }
  }

  onEdit() {
    try {
      this.apiService.update(this.CustomerDetails).subscribe(
        data => {
          alert("updated Successfully")
        });
      this.router.navigateByUrl('/view-profile')
    }
    catch(ex: any) {
      console.log(ex);
    }
  }
  getUserIdFromSession(): number | null {
    const userId = sessionStorage.getItem('userId');
    return userId ? Number(userId) : null;
  }
}