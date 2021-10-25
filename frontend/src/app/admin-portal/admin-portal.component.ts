import { Component, OnInit } from '@angular/core';
import { JobPosting } from '../jobPosting';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  jobs: JobPosting[] = []
  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
    this.jobs = this.backend.getUnapprovedJobs();
  }

  removeItem(id: number){
    for(let i = 0; i < this.jobs.length; i++){
      if(this.jobs[i].id == id){
        this.jobs.splice(i,1);
        break;
      }
    }
  }

}
