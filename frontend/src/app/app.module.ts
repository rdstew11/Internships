import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobSubmissionFormComponent } from './job-submission-form/job-submission-form.component';
import { JobPreviewComponent } from './job-preview/job-preview.component';
import { JobBrowseComponent } from './job-browse/job-browse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { IndexComponent } from './index/index.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminJobPreviewComponent } from './admin-job-preview/admin-job-preview.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyBrowseComponent } from './company-browse/company-browse.component';
import { AdminCompanyProfileComponent } from './admin-company-profile/admin-company-profile.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { CompanySubmissionFormComponent } from './company-submission-form/company-submission-form.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentBrowseComponent } from './student-browse/student-browse.component';
import { SubmitStudentComponent } from './submit-student/submit-student.component';
import { AdminStudentProfileComponent } from './admin-student-profile/admin-student-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobSubmissionFormComponent,
    JobPreviewComponent,
    JobBrowseComponent,
    NavbarComponent,
    LoginPageComponent,
    IndexComponent,
    AdminPortalComponent,
    AdminJobPreviewComponent,
    CompanyProfileComponent,
    CompanyBrowseComponent,
    AdminCompanyProfileComponent,
    CreateAccountFormComponent,
    CompanySubmissionFormComponent,
    StudentProfileComponent,
    StudentBrowseComponent,
    SubmitStudentComponent,
    AdminStudentProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
