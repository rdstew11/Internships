import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { JobSubmissionFormComponent } from './job-submission-form/job-submission-form.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { JobBrowseComponent } from './job-browse/job-browse.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'submit', component: JobSubmissionFormComponent},
  {path: 'admin', component: AdminPortalComponent},
  {path: 'browse', component: JobBrowseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
