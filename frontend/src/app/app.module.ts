import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobSubmissionFormComponent } from './job-submission-form/job-submission-form.component';
import { JobPreviewComponent } from './job-preview/job-preview.component';
import { JobBrowseComponent } from './job-browse/job-browse.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { IndexComponent } from './index/index.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminJobPreviewComponent } from './admin-job-preview/admin-job-preview.component';
import { AdminJobModalComponent } from './admin-job-modal/admin-job-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobSubmissionFormComponent,
    JobPreviewComponent,
    JobBrowseComponent,
    JobPostingComponent,
    NavbarComponent,
    LoginPageComponent,
    IndexComponent,
    AdminPortalComponent,
    AdminJobPreviewComponent,
    AdminJobModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
