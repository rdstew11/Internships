import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobModalComponent } from './admin-job-modal.component';

describe('AdminJobModalComponent', () => {
  let component: AdminJobModalComponent;
  let fixture: ComponentFixture<AdminJobModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
