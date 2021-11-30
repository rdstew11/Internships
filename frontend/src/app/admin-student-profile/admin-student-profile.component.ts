import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../interfaces';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'admin-student-profile',
  templateUrl: './admin-student-profile.component.html',
  styleUrls: ['./admin-student-profile.component.css']
})
export class AdminStudentProfileComponent implements OnInit {

  @Input('student') student!: Student;
  @Output() removeItemEvent = new EventEmitter<number>();


  constructor(private backend: DatabaseService) { }

  ngOnInit(): void {
  }

  approve(){
    this.backend.approveStudent(this.student);
    this.removeItemEvent.emit(this.student.id);
  }

  deny(){
    this.backend.denyStudent(this.student);
    this.removeItemEvent.emit(this.student.id);
  }

}
