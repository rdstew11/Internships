import { Component, OnInit, Input } from '@angular/core';

import { JobPosting } from '../jobPosting'

@Component({
  selector: 'job-preview',
  templateUrl: './job-preview.component.html',
  styleUrls: ['./job-preview.component.css']
})
export class JobPreviewComponent implements OnInit {

  @Input() job!: JobPosting;

  constructor() { }

  ngOnInit(): void {
  }

}
