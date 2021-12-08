import { Component, OnInit } from '@angular/core';
import { JobPosting, Company, Student } from '../interfaces';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  jobs: JobPosting[] = []
  companies: Company[] = [];
  students: Student[] = [];
  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
    this.jobs = this.backend.getUnapprovedJobs();
    this.companies = this.backend.getUnapprovedCompanies();
    this.students = this.backend.getUnapprovedStudents();
  }

  removeJobItem(id: number){
    for(let i = 0; i < this.jobs.length; i++){
      if(this.jobs[i].id == id){
        this.jobs.splice(i,1);
        break;
      }
    }
  }

  removeCompanyItem(id: number){
    for(let i = 0; i < this.companies.length; i++){
      if(this.companies[i].id == id){
        this.companies.splice(i,1);
        break;
      }
    }
  }

  removeStudentItem(id: number){
    for(let i = 0; i < this.students.length; i++){
      if(this.students[i].id == id){
        this.students.splice(i,1);
        break;
      }
    }
  }

}
