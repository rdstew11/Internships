import { Component, OnInit, Input } from '@angular/core';

import { DatabaseService } from '../database.service';
import { JobPosting } from '../jobPosting';

@Component({
  selector: 'admin-job-preview',
  templateUrl: './admin-job-preview.component.html',
  styleUrls: ['./admin-job-preview.component.css']
})
export class AdminJobPreviewComponent implements OnInit {


  @Input() job!: JobPosting;


  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
  }

  approve(): void {

  }

  deny(): void {

  }

}
