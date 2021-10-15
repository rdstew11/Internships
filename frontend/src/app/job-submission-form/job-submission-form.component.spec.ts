import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSubmissionFormComponent } from './job-submission-form.component';

describe('JobSubmissionFormComponent', () => {
  let component: JobSubmissionFormComponent;
  let fixture: ComponentFixture<JobSubmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSubmissionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
