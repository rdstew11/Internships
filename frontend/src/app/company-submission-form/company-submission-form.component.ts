import { Component, OnInit } from '@angular/core';

import { Company } from '../interfaces';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'company-submission-form',
  templateUrl: './company-submission-form.component.html',
  styleUrls: ['./company-submission-form.component.css']
})
export class CompanySubmissionFormComponent implements OnInit {

  company : Company = { id: -1,
    name: "",
    address: "",
    city: "",
    state: "",
    description: ""
  };

  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.backend.addCompany(this.company);
  }

}
