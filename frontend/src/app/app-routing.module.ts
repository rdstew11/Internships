import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { JobSubmissionFormComponent } from './job-submission-form/job-submission-form.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { JobBrowseComponent } from './job-browse/job-browse.component';
import { CompanyBrowseComponent } from './company-browse/company-browse.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { CompanySubmissionFormComponent } from './company-submission-form/company-submission-form.component';
import { StudentBrowseComponent } from './student-browse/student-browse.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'submit-job', component: JobSubmissionFormComponent},
  {path: 'admin', component: AdminPortalComponent},
  {path: 'browse-jobs', component: JobBrowseComponent},
  {path: '', component: JobBrowseComponent},
  {path: 'browse-companies', component: CompanyBrowseComponent},
  {path: 'create-account', component: CreateAccountFormComponent},
  {path: 'submit-company', component: CompanySubmissionFormComponent},
  {path: 'browse-students', component: StudentBrowseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
