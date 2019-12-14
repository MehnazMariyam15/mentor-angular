import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSignupComponent, User } from './mentor-signup.component';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MentorSignupComponent', () => {
  let component: MentorSignupComponent;
  let fixture: ComponentFixture<MentorSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ MentorSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('userId field validity', () => {
  let errors = {};
 let userID = component.signUpForm.controls['userID'];
 expect(userID.valid).toBeFalsy();

  //Userid field is required
errors = userID.errors || {};
expect(errors['required']).toBeTruthy();

 // Set  Userid to something
 userID.setValue("12345");
 errors = userID.errors || {};
 expect(errors['required']).toBeFalsy();
 expect(errors['pattern']).toBeTruthy();

 // Set  Userid to something correct
 userID.setValue("Nethra");
 errors = userID.errors || {};
 expect(errors['required']).toBeFalsy();
 expect(errors['pattern']).toBeFalsy();
});

it('password field validity', () => {
  let errors = {};
  let password = component.signUpForm.controls['password'];

  // Password field is required
  errors = password.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set Password to something
  password.setValue("12");
  errors = password.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['minlength']).toBeTruthy();

  // Set Password to something correct
  password.setValue("1234567890");
  errors = password.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['minlength']).toBeFalsy();
});

});
