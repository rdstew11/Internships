import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { JobPosting } from '../jobPosting'

@Component({
  selector: 'job-browse',
  templateUrl: './job-browse.component.html',
  styleUrls: ['./job-browse.component.css']
})
export class JobBrowseComponent implements OnInit {

  jobs: JobPosting[] = [{
    title: 'Software Engineer',
    company_name: 'Google',
    city: 'Reston',
    state: 'VA',
    description: 'Lorem ipsum dolor sit amet, voluptua facilisis ad eam, ex ius libris volumus democritum. Ea tation discere vim, ignota honestatis has eu. Cum elit nulla petentium cu. Maiorum eligendi ea qui. Singulis intellegebat ea vim, consul iudicabit id ius. Stet reque malis no qui, tota facilis dolores in quo.',
    start_date: new Date(),
    email: 'rdstew11@gmail.com'
  },
  {
    title: 'Software Engineer',
    company_name: 'Google',
    city: 'Reston',
    state: 'VA',
    description: 'Lorem ipsum dolor sit amet, voluptua facilisis ad eam, ex ius libris volumus democritum. Ea tation discere vim, ignota honestatis has eu. Cum elit nulla petentium cu. Maiorum eligendi ea qui. Singulis intellegebat ea vim, consul iudicabit id ius. Stet reque malis no qui, tota facilis dolores in quo.',
    start_date: new Date(),
    email: 'rdstew11@gmail.com'
  },
  {
    title: 'Software Engineer',
    company_name: 'Google',
    city: 'Reston',
    state: 'VA',
    description: 'Lorem ipsum dolor sit amet, voluptua facilisis ad eam, ex ius libris volumus democritum. Ea tation discere vim, ignota honestatis has eu. Cum elit nulla petentium cu. Maiorum eligendi ea qui. Singulis intellegebat ea vim, consul iudicabit id ius. Stet reque malis no qui, tota facilis dolores in quo.',
    start_date: new Date(),
    email: 'rdstew11@gmail.com'
  },


]

  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
   // this.jobs = this.backend.getAllJobs();
  }

}
