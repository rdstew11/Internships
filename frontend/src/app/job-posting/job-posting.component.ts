import { Component, OnInit, Input } from '@angular/core';

import { JobPosting } from '../jobPosting';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {

  @Input() job: JobPosting = {
    id:1,
    title: 'Software Engineer',
    company_name: 'Google',
    city: 'Reston',
    state: 'VA',
    description: 'Lorem ipsum dolor sit amet, voluptua facilisis ad eam, ex ius libris volumus democritum. Ea tation discere vim, ignota honestatis has eu. Cum elit nulla petentium cu. Maiorum eligendi ea qui. Singulis intellegebat ea vim, consul iudicabit id ius. Stet reque malis no qui, tota facilis dolores in quo.',
    start_date: new Date(),
    external_link: "https://google.com",
    email: 'rdstew11@gmail.com'
  };
  

  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {

  }

}
