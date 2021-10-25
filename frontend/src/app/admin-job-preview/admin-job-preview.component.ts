import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { DatabaseService } from '../database.service';
import { JobPosting } from '../jobPosting';

@Component({
  selector: 'admin-job-preview',
  templateUrl: './admin-job-preview.component.html',
  styleUrls: ['./admin-job-preview.component.css']
})
export class AdminJobPreviewComponent implements OnInit {


  @Input() job!: JobPosting;
  @Output() removeItemEvent = new EventEmitter<number>();

  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
  }

  approve(): void {
    this.backend.approveJob(this.job);
    this.removeItemEvent.emit(this.job.id);
  }

  deny(): void {
    this.backend.denyJob(this.job.id);
    this.removeItemEvent.emit(this.job.id);
  }

}
