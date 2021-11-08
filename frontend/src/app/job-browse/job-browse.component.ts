import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { JobPosting } from '../interfaces'

@Component({
  selector: 'job-browse',
  templateUrl: './job-browse.component.html',
  styleUrls: ['./job-browse.component.css']
})
export class JobBrowseComponent implements OnInit {

  jobs: JobPosting[] = []
  keyword: string = "";

  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
    this.jobs = this.backend.getApprovedJobs();
  }

  onSubmit(): void {
    this.jobs = this.backend.searchPostings(this.keyword);
  }
}
