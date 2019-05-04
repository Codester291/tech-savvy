import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianLogInPage } from './technician-log-in.page';

describe('TechnicianLogInPage', () => {
  let component: TechnicianLogInPage;
  let fixture: ComponentFixture<TechnicianLogInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianLogInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianLogInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
