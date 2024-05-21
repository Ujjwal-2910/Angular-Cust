import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private http: HttpClient, private router: Router) {
  }

  onLogin() {
    const loginData =
    {
      username: this.username,
      password: this.password
    };

    this.http.post<LoginModel>('http://localhost:5029/api/User', loginData)
      .subscribe(
        res => {
          if (res.token != null) {
            alert("login success")//api to front end =get;; //front ebd to database = post
            window.sessionStorage.setItem("token", res.token);
            window.sessionStorage.setItem("userId", res.userId.toString());
            this.router.navigateByUrl('/dashboard')
          }
          else {
            alert("Login Unsuccessful, Please check and try again.")
          }
        },
        error => {
          console.error('Login error:', error);
          // Handle login error
        })
  }
}



/**
 * Login model 
 */
export class LoginModel {
  constructor(
    public userId: number,
    public fullName: string,
    public token: string
  ) { }

}