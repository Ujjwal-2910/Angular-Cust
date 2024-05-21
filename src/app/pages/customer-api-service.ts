import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from './view-profile.component';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {

  constructor(
    private http: HttpClient

  ) { }

  url = "http://localhost:5029/api/Customer";

  //   getProducts() : Observable<Product[]> {
  //     return this.http.get<Product[]>(this.url);
  //   }

  getDetails(id: number): Observable<CustomerModel> {
    const token = window.sessionStorage.getItem("token"); // Example: Retrieve access token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<CustomerModel>(`${this.url}/${id}`, { headers })
  }
  getCustomerByUserId(userId: string): Observable<CustomerModel> {
    const id = parseInt(userId);
    const url = `${this.url}/${id}`;
    return this.http.get<CustomerModel>(url);
  }

  //   createNew(model: ) : Observable<Product> { 
  //     let options = { 
  //       headers: {
  //         "Content-Type" : "application/json"
  //       }
  //     }
  //     return this.http.post<Product>(
  //       this.url,
  //       JSON.stringify(model),
  //       options )
  //   }
  update(model: CustomerModel) {

    let options = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    return this.http.put(`${this.url}`, JSON.stringify(model), options);
  }

  //   delete(id:number) { 
  //     return this.http.delete(`${this.url}/${id}`); 
  //   }

}
