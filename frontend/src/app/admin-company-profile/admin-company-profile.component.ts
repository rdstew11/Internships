import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Company } from '../interfaces';
import {DatabaseService } from '../database.service';

@Component({
  selector: 'admin-company-profile',
  templateUrl: './admin-company-profile.component.html',
  styleUrls: ['./admin-company-profile.component.css']
})
export class AdminCompanyProfileComponent implements OnInit {

  @Input('company') company !: Company;
  @Output() removeItemEvent = new EventEmitter<number>();

  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
  }

  approve(): void{
    this.backend.approveCompany(this.company.id);
    this.removeItemEvent.emit(this.company.id);
  }

  deny(): void {
    this.backend.denyCompany(this.company.id);
    this.removeItemEvent.emit(this.company.id);
  }

}
