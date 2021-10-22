import { Component } from '@angular/core';

import { LoginCredentials } from '../loginCredentials';
import { DatabaseService } from '../database.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  credentials: LoginCredentials = {account_type: "admin", username: "", password: "" };

  /**
   * @param backend Service used to communicate with the backend 
   */
  constructor(private backend: DatabaseService, private auth: AuthService) { }


  /**
   * Called when submit button is pressed
   * Uses a GET request to validate credentials in the backend
   */
  onSubmit(){
   this.auth.login(this.credentials);

    //NEED TO IMPLEMENT ROUTING DEPENDENT ON RESPONSE
  }

}
