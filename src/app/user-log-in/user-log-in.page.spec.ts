import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogInPage } from './user-log-in.page';

describe('UserLogInPage', () => {
  let component: UserLogInPage;
  let fixture: ComponentFixture<UserLogInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
