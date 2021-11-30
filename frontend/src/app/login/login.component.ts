import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginCredentials } from '../interfaces';
import { DatabaseService } from '../database.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  credentials: LoginCredentials = {account_type: "admin", username: "", password: "" };
  failed = false;
  /**
   * @param backend Service used to communicate with the backend 
   */
  constructor(private backend: DatabaseService, private auth: AuthService, private router: Router) { }


  loginStatus$!: Observable<Boolean>;

  ngOnInit(){
    this.loginStatus$ = this.auth.isLoggedIn;
  } 

  /**
   * Called when submit button is pressed
   * Uses a GET request to validate credentials in the backend
   */
  onSubmit(){
    this.auth.login(this.credentials);
    this.loginStatus$.subscribe(status => {
      if(status == false){
        this.failed = true;
      }
      else{
        this.failed = false;
      }
    })
  }

}
