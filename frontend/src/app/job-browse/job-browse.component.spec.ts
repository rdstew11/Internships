import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBrowseComponent } from './job-browse.component';

describe('JobBrowseComponent', () => {
  let component: JobBrowseComponent;
  let fixture: ComponentFixture<JobBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
