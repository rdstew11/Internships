import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySubmissionFormComponent } from './company-submission-form.component';

describe('CompanySubmissionFormComponent', () => {
  let component: CompanySubmissionFormComponent;
  let fixture: ComponentFixture<CompanySubmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySubmissionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
