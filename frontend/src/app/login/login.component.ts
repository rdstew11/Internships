import { Component } from '@angular/core';

import { LoginCredentials } from '../loginCredentials';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'loginForm',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  credentials: LoginCredentials = {account_type: "admin", username: "", password: "" };

  constructor(private database: DatabaseService) { }

  onSubmit(){
    console.log("Submitted\nUsername: " + this.credentials.username + "\nPassword: " + this.credentials.password);
  }

}
