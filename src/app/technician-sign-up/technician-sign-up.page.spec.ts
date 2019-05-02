import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianSignUpPage } from './technician-sign-up.page';

describe('TechnicianSignUpPage', () => {
  let component: TechnicianSignUpPage;
  let fixture: ComponentFixture<TechnicianSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianSignUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
