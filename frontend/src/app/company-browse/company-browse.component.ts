import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../database.service';
import { Company } from '../interfaces';

@Component({
  selector: 'app-company-browse',
  templateUrl: './company-browse.component.html',
  styleUrls: ['./company-browse.component.css']
})
export class CompanyBrowseComponent implements OnInit {

  companies : Company[] = [];
  keyword: string = "";

  constructor(private backend : DatabaseService) { }

  ngOnInit(): void {
    this.companies = this.backend.getApprovedCompanies();
  }

  onSubmit(): void{
    this.companies = this.backend.searchCompanies(this.keyword)
  }

}
