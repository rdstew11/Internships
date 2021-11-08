import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBrowseComponent } from './company-browse.component';

describe('CompanyBrowseComponent', () => {
  let component: CompanyBrowseComponent;
  let fixture: ComponentFixture<CompanyBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
