import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,shareReplay } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { LoginCredentials } from './loginCredentials';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = 'http://127.0.0.1:8080/login';

  constructor(private http: HttpClient) { }

  /**
 * makes POST request to validate given credentials in the backend 
 * Request returns a JWT to be stored locally to grant authorization
 * Validation does not occur here, will occur in the backend
 * 
 * @param credentials  <LoginCrendentials> credentials to be validated
 */
  public login(credentials: LoginCredentials){

    let tokens: any = null;
    //this POST request sends username and password to backend to be validated against DB
    this.http.post<any>(this.loginUrl, credentials).pipe(catchError(this.handleLoginError),shareReplay(1)).subscribe(res => this.setSession(res));
  }


  /**
   * Puts JWT in browser localstore
   * @param authResult JSON from backend received through POST request
   */
  private setSession(authResult: any){
    const expiresAt = new Date();
    expiresAt.setSeconds(expiresAt.getSeconds() + authResult.expiration);
    console.log(expiresAt);
  
    localStorage.setItem('id_token', authResult.jwt)
    localStorage.setItem('expiration', JSON.stringify(expiresAt.valueOf()));

    console.log(this.isLoggedIn());

  }

  /**
   * Removes token from browser storage
   */
  public logout(){
    localStorage.remove('id_token');
    localStorage.remove('expiration');
  }

  public isLoggedIn():Boolean{
    return(Date.now() < parseInt(localStorage.getItem('expiration')?? "0"));
  }

  /**
   * Basic error handling on request to backend server
   * @param error Error coming from the backend
   * @returns Error message to the user
   */
  private handleLoginError(error: HttpErrorResponse){
    if(error.status == 0){
      //client side or network error
      console.error('An error occured: ', error.error);
    }
    else if(error.status == 401){
      //Invalid login
      console.error('Unauthorized Login');
    }
    else{
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError('Something went wrong, try again later.');
  }


}
