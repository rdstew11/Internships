import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,shareReplay } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { LoginCredentials } from './interfaces';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://34.145.192.59/backend';
  loginUrl: string = 'http://34.145.192.59/backendlogin';
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());

  constructor(private http: HttpClient, private router: Router) { }

  /**
 * makes POST request to validate given credentials in the backend 
 * Request returns a JWT to be stored locally to grant authorization
 * Validation does not occur here, will occur in the backend
 * 
 * @param credentials  <LoginCrendentials> credentials to be validated
 */
  public login(credentials: LoginCredentials){
    //this POST request sends username and password to backend to be validated against DB

    console.log(credentials);
    this.http.post<any>(this.loginUrl, credentials).pipe(catchError(this.handleLoginError),shareReplay(1)).subscribe(res => {
      this.setSession(res);
    });
  }


  /**
   * Puts JWT in browser localstore
   * @param authResult JSON from backend received through POST request
   */
  private setSession(authResult: any){
    const expiresAt = new Date();
    expiresAt.setSeconds(expiresAt.getSeconds() + authResult.expiration);
  
    localStorage.setItem('id_token', authResult.jwt)
    localStorage.setItem('expiration', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('type', authResult.type);
    
    this.router.navigate(['/admin']);
    this.loginStatus.next(true);
  }

  /**
   * Removes token from browser storage
   */
  public logout(){
    this.loginStatus.next(false);
    localStorage.removeItem('id_token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('type');
    this.router.navigate(['/browse-jobs'])
  }

  public checkLoginStatus():boolean{
    return(Date.now() < parseInt(localStorage.getItem('expiration')?? "0"));
  }

  public createAccount(credentials: LoginCredentials): boolean{
    let success = true;
    this.http.post<any>(this.url + "accounts", credentials).pipe(shareReplay(1)).subscribe(res => {
      if(res.error === true){
          success = false;
      }
      else{
        this.setSession(res);
      }
    });
    return success;
  }

  get isLoggedIn(){
    return this.loginStatus.asObservable();
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
