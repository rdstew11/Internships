import { Component } from '@angular/core';

import {JobPosting } from '../jobPosting';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'job-submission-form',
  templateUrl: './job-submission-form.component.html',
  styleUrls: ['./job-submission-form.component.css']
})
export class JobSubmissionFormComponent {

  submissionDetails: JobPosting = {
    title: "",
    company_name: "",
    city: "",
    state: "",
    end_date: new Date(),
    description: ""

}

  /**
   * @param backend service used to communicate with backend
   */
  constructor(private backend: DatabaseService) { }


  /**
   * Called when submit button is pressed
   * Uses backend service to submit POST request to backend service
   */
  onSubmit(){
    this.backend.addJob(this.submissionDetails);
  }

}
