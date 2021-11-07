import { Component, OnInit, Input } from '@angular/core';

import { Company } from '../interfaces';

@Component({
  selector: 'company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  @Input('company') company!: Company;

  constructor() { }

  ngOnInit(): void {
  }

}
