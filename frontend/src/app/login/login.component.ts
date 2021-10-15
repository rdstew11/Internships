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

  /**
   * @param backend Service used to communicate with the backend 
   */
  constructor(private backend: DatabaseService) { }


  /**
   * Called when submit button is pressed
   * Uses a GET request to validate credentials in the backend
   */
  onSubmit(){
    this.credentials = this.backend.getValidation(this.credentials);

    //NEED TO IMPLEMENT ROUTING DEPENDENT ON RESPONSE
  }

}
