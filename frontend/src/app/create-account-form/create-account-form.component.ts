import { Component, OnInit } from '@angular/core';

import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { LoginCredentials, Company } from '../interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  accountGroup!: FormGroup;
  accountTypes: string[] = ['Employer', 'Student']
  submitted = false;
  failed = false;
  unique = true;
  formSection: number = 1;
  mustMatch(controlName: string, matchingControlName: string){
    return(formGroup : FormGroup) =>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];


      if(matchingControl.errors && !matchingControl.errors.mustMatch){
        return;
      }


      if(matchingControl.value !== control.value){
        matchingControl.setErrors({mustMatch: true});
      }
      else{
        matchingControl.setErrors(null);
      }
    }


  }

  get f() { return this.accountGroup.controls }
  


  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.accountGroup = this.fb.group({
      accountType: ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm:  ['', Validators.required]
    },
    {
      validators: this.mustMatch('password', 'confirm')
    });
  }


  onSubmit(): void {
    this.submitted = true;

    if(this.accountGroup.invalid){
      this.failed = true;
      return;
    }
    else{
      let credentials: LoginCredentials = {
        account_type: this.accountGroup.controls.accountType.value,
        username: this.accountGroup.controls.email.value,
        password: this.accountGroup.controls.password.value
      }
      if(this.auth.createAccount(credentials) === false){
        this.unique = false;
      }
      else{
        this.unique = true;
      }
    }

  }



}
