import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Student } from '../interfaces';
import { DatabaseService }  from '../database.service';

@Component({
  selector: 'app-submit-student',
  templateUrl: './submit-student.component.html',
  styleUrls: ['./submit-student.component.css']
})
export class SubmitStudentComponent implements OnInit {

  studentGroup!: FormGroup
  submitted = false;
  failed = false;
  genders = ['Male', 'Female', 'Other'];

  constructor(private fb : FormBuilder, private backend: DatabaseService) { }

  ngOnInit(): void {
    this.studentGroup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      gpa: '',
      grad_date: ['', Validators.required],
      website: '',
      linkedin: '',
      major: ['', Validators.required],
      minor: '',
      gender: '',
      biography: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.studentGroup.invalid == true){
      this.failed = true;
      return;
    }
    else{
      this.failed = false;
      let student:Student = {
        id: -1,
        firstname: this.f.firstname.value,
        lastname: this.f.lastname.value,
        email: this.f.email.value,
        gpa: this.f.gpa.value,
        grad_date: this.f.grad_date.value,
        website: this.f.website.value,
        linkedin: this.f.linkedin.value,
        major: this.f.major.value,
        minor: this.f.minor.value,
        gender: this.f.gender.value,
        biography: this.f.biography.value

      }
      this.backend.addStudent(student);
    }
  }

  get f() { return this.studentGroup.controls };

}
