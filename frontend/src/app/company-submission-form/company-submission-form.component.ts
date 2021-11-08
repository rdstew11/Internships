import { Component, OnInit } from '@angular/core';

import { Company } from '../interfaces';

@Component({
  selector: 'company-submission-form',
  templateUrl: './company-submission-form.component.html',
  styleUrls: ['./company-submission-form.component.css']
})
export class CompanySubmissionFormComponent implements OnInit {

  company : Company = { id: -1,
    name: "",
    street_address: "",
    city: "",
    state: "",
    description: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
