import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

import { LoginCredentials } from './loginCredentials';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  acccountsUrl = '127.0.0.1:8080/accounts';
  postingsUrl = '127.0.0.1:8080/postings'

  constructor(private http: HttpClient) { }

  /**
   * Validates given credentials with backend database
   * @param credentials  <LoginCrendentials> credentials to be validated
   * @returns  <LoginCredentials> if valid | null if invalid
   */
  public validateLogin(credentials: LoginCredentials): LoginCredentials{
    const username = credentials.username;
    const password = credentials.password;
    const valid = false;
    let resCredentials: LoginCredentials = {username:"", password:"", account_type:""};

    const options = username ? { params: new HttpParams().set('username', username) } : {};
    const res = this.http.get<LoginCredentials>(this.acccountsUrl, options)
      .pipe(
        retry(3), //retry failed requests 3 times
        catchError(this.handleError)  //then handle error
      ).subscribe((data: LoginCredentials) => resCredentials = { ...data });

    /**
     * At this point the password should need to be unhashed
     * But I'm not gonna worry about that just yet
     */

    if(resCredentials.username == username && resCredentials.password == password){
      return resCredentials;
    }else{
      return null;
    }
  }


  private handleError(error: HttpErrorResponse){
    if(error.status == 0){
      //client side or network error
      console.error('An error occured: ', error.error);
    }
    else{
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError('Something went wrong, try again later.');
  }
}
