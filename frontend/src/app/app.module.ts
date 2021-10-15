import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlSegment, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { JobSubmissionFormComponent } from './job-submission-form/job-submission-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    JobSubmissionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        matcher: (url) =>{
          if(url.length === 1 && url[0].path.match(/^@[\w]+$/gm)){
            return {
              consumed: url,
              posParams: {
                username: new UrlSegment(url[0].path.substr(1), {})
              }
            };  
          } 
          return null;
        },
        component: ProfileComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
