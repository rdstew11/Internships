import { Component, OnInit } from '@angular/core';

import { LoginCredentials, Company } from '../interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  credentials: LoginCredentials = {account_type: "company", username: "", password: "" };
  company : Company = { id: -1,
    name: "",
    street_address: "",
    city: "",
    state: "",
    zipcode: 0,
    description: ""
  };
  confirmation: String = "";

  formSection: number = 1;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onNext(): void{
    this.formSection++;
  }

  onSubmit(): void {

  }

}
