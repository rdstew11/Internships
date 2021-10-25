import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobPreviewComponent } from './admin-job-preview.component';

describe('AdminJobPreviewComponent', () => {
  let component: AdminJobPreviewComponent;
  let fixture: ComponentFixture<AdminJobPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
