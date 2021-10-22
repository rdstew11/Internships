import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

import { JobPosting } from './jobPosting';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  acccountsUrl = '127.0.0.1:8080/accounts';
  postingsUrl = '127.0.0.1:8080/postings'


  /**
   * @param http angular API to make http requests
   */
  constructor(private http: HttpClient) { }




  //Honestly not sure if this works (the headers?) and need to wait until 
  //backend is connected to check
  /**
   * makes a POST request to add given job to backend
   * @param jobDetails <JobPosting> posting to be added to database
   */
  public addJob(jobDetails: JobPosting): void{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.http.post(this.postingsUrl, jobDetails, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }



  public getAllJobs() :JobPosting[]{

    let res :JobPosting[] = [];

    //TO DO GET REQUEST

    return res;
  }

  /**
   * Basic error handling on request to backend server
   * @param error Error coming from the backend
   * @returns Error message to the user
   */
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
