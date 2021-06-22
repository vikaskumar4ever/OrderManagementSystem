import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Admin } from './Model/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginModel: Admin = new Admin();
  webresponse: any;
  public loading = false;
  public Isdisabled = false;

  constructor(private _router: Router,) {
  }

  onLoginSubmit() {
    if (this.LoginModel.emailId == "admin@gmail.com" && this.LoginModel.password == "123456") {
      this._router.navigate(['orderdetails']);
    }
    else{
      alert("Invalid Username or Password");
    }
  }

  ngOnInit(): void {
  }

}
