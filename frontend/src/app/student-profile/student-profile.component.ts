import { Component, OnInit, Input } from '@angular/core';

import { Student } from '../interfaces';


@Component({
  selector: 'student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  @Input('student') student!: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
