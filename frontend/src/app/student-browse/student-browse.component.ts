import { Component, OnInit } from '@angular/core';

import { Student } from '../interfaces';

@Component({
  selector: 'app-student-browse',
  templateUrl: './student-browse.component.html',
  styleUrls: ['./student-browse.component.css']
})
export class StudentBrowseComponent implements OnInit {

  students: Student[] = [{id:1, name: 'ryan', email:'hey'}];

  constructor() { }

  ngOnInit(): void {
  }

}
