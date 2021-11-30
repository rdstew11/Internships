import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable, throwError,} from 'rxjs';
import { Router } from '@angular/router';
import { catchError, shareReplay, retry} from 'rxjs/operators';

import { JobPosting, Company } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //acccountsUrl = 'http://127.0.0.1:8080/accounts';
  //postingsUrl = 'http://127.0.0.1:8080/postings';
  url='http://34.145.192.59/backend';


  /**
   * @param http angular API to make http requests
   */
  constructor(private http: HttpClient, private router: Router) { }




  //Honestly not sure if this works (the headers?) and need to wait until 
  //backend is connected to check
  /**
   * makes a POST request to add given job to backend
   * @param jobDetails <JobPosting> posting to be added to database
   */
  public addJob(jobDetails: JobPosting): any{
    this.http.post<any>(this.url + 'postings', jobDetails)
      .pipe(
        catchError(this.handleError), shareReplay(1)
      ).subscribe();
    this.router.navigate(['/browse-jobs']);
  
  }

  public getUnapprovedJobs(): JobPosting[]{
    let response: JobPosting[] = [];
    const options = {params: new HttpParams().set('q', 'unapproved')};
    this.http.get<any>(this.url+'postings', options).pipe(catchError(this.handleError), retry(3)).subscribe(res =>{
      res.forEach((el: JobPosting) => {
        response.push(el);
      });
    });
    return response;
  }



  public getApprovedJobs() :JobPosting[]{
    let response :JobPosting[] = [];
    const options = {params: new HttpParams().set('q', 'approved')};
    this.http.get<any>(this.url+'postings', options).pipe(catchError(this.handleError), retry(3)).subscribe(res =>{
      res.forEach((el: JobPosting) => {
        response.push(el);
      });
    });
    return response;
  }


  public approveJob(job: JobPosting) :void{
    this.http.put<any>(this.url + 'postings', job).subscribe(res => console.log(res));
  }

  public denyJob(id: number) :void{
    this.http.delete<any>(this.url + 'postings', {body: {'id': id}} ).subscribe();
  }


  public getApprovedCompanies() : Company[] {
    let companies : Company[] = [];
    const options = {params: new HttpParams().set('q', 'approved')};
    this.http.get<Company[]>(this.url + 'company', options).pipe(catchError(this.handleError)).subscribe(res =>
      res.forEach((el : Company) => {
        companies.push(el);
      }));
    return companies;
  }

  public getUnapprovedCompanies() : Company[] {
    let companies : Company[] = [];
    const options = {params: new HttpParams().set('q', 'unapproved')};
    this.http.get<Company[]>(this.url + 'company', options).pipe(catchError(this.handleError)).subscribe(res =>
      res.forEach((el : Company) => {
        companies.push(el);
      }));
    return companies;    
  }

  public approveCompany(company: Company) : void {
    this.http.put<any>(this.url + 'company', company).subscribe(res => console.log(res));
  }

  public denyCompany(name: String) : void {
    this.http.delete<any>(this.url + 'company', {body: {'name': name}}).subscribe(res => console.log(res));
  }

  public getCompanyPostings(company: Company) : JobPosting[] {
    let jobs : JobPosting[] = [];
    const options = {params: new HttpParams().set('q', company.name)};
    this.http.get<any>(this.url+'postings', options).pipe(catchError(this.handleError), retry(3)).subscribe(res =>{
      res.forEach((el: JobPosting) => {
        jobs.push(el);
      });
    });

    return jobs;
  }

  public searchPostings(keyword: string): JobPosting[] {
    let jobs : JobPosting[] = [];
    const options = {params: new HttpParams().set('q', keyword)};
    this.http.get<any>(this.url+'search-postings', options).pipe(catchError(this.handleError), retry(3)).subscribe(res =>{
      res.forEach((el: JobPosting) => {
        jobs.push(el);
      });
    });
    console.log(jobs);
    return jobs;
  }

  public searchCompanies(keyword: string): Company[] {
    let companies : Company[] = [];
    const options = {params: new HttpParams().set('q', keyword)};
    this.http.get<any>(this.url+'search-companies', options).pipe(catchError(this.handleError), retry(3)).subscribe(res =>{
      res.forEach((el: Company) => {
        companies.push(el);
      });
    });
    return companies;
  }

  public addCompany(company:Company): void {
    this.http.post<any>(this.url + 'company', company)
      .pipe(
        catchError(this.handleError), shareReplay(1)
      ).subscribe();
    this.router.navigate(['/browse-companies']);
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
    else if(error.status == 200){

    }
    else{
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError('Something went wrong, try again later.');
  }
}
