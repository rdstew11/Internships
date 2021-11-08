import { Component, OnInit, Input } from '@angular/core';

import { Company, JobPosting } from '../interfaces';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  @Input('company') company!: Company;

  jobs: JobPosting[] = [];

  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
    this.jobs = this.backend.getCompanyPostings(this.company);
  }

}
