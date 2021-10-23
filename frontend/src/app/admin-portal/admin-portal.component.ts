import { Component, OnInit } from '@angular/core';
import { JobPosting } from '../jobPosting';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  jobs: JobPosting[] = [
    {
      id: 1,
      title: 'Software Engineer',
      company_name: 'Google',
      city: 'Reston',
      state: 'VA',
      description: 'Lorem ipsum dolor sit amet, voluptua facilisis ad eam, ex ius libris volumus democritum. Ea tation discere vim, ignota honestatis has eu. Cum elit nulla petentium cu. Maiorum eligendi ea qui. Singulis intellegebat ea vim, consul iudicabit id ius. Stet reque malis no qui, tota facilis dolores in quo.',
      start_date: new Date(),
      email: 'rdstew11@gmail.com',
      phone_number: "5408485851",
      external_link: "https://google.com"
    },
    {
      id:2,
      title: 'Software Engineer',
      company_name: 'Google',
      city: 'Reston',
      state: 'VA',
      description: 'Lorem ipsum dolor sit amet, voluptua facilisis ad eam, ex ius libris volumus democritum. Ea tation discere vim, ignota honestatis has eu. Cum elit nulla petentium cu. Maiorum eligendi ea qui. Singulis intellegebat ea vim, consul iudicabit id ius. Stet reque malis no qui, tota facilis dolores in quo.',
      start_date: new Date(),
      email: 'rdstew11@gmail.com'
    },
    {
      id: 3,
      title: 'Software Engineer',
      company_name: 'Google',
      city: 'Reston',
      state: 'VA',
      description: 'Lorem ipsum dolor sit amet, voluptua facilisis ad eam, ex ius libris volumus democritum. Ea tation discere vim, ignota honestatis has eu. Cum elit nulla petentium cu. Maiorum eligendi ea qui. Singulis intellegebat ea vim, consul iudicabit id ius. Stet reque malis no qui, tota facilis dolores in quo.',
      start_date: new Date(),
      email: 'rdstew11@gmail.com'
    },
    {
      id: 4,
      title: 'Software Engineer',
      company_name: 'Google',
      city: 'Reston',
      state: 'VA',
      description: 'Lorem ipsum dolor sit amet, voluptua facilisis ad eam, ex ius libris volumus democritum. Ea tation discere vim, ignota honestatis has eu. Cum elit nulla petentium cu. Maiorum eligendi ea qui. Singulis intellegebat ea vim, consul iudicabit id ius. Stet reque malis no qui, tota facilis dolores in quo.',
      start_date: new Date(),
      email: 'rdstew11@gmail.com'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
