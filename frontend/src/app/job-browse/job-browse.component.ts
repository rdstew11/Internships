import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { JobPosting } from '../jobPosting'

@Component({
  selector: 'job-browse',
  templateUrl: './job-browse.component.html',
  styleUrls: ['./job-browse.component.css']
})
export class JobBrowseComponent implements OnInit {

  jobs: JobPosting[] = []

  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
    this.jobs = this.backend.getApprovedJobs();
  }

}
