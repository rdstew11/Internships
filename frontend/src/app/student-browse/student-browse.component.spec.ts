import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBrowseComponent } from './student-browse.component';

describe('StudentBrowseComponent', () => {
  let component: StudentBrowseComponent;
  let fixture: ComponentFixture<StudentBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
