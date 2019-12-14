import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSignupComponent } from './trainee-signup.component';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TraineeSignupComponent', () => {
  let component: TraineeSignupComponent;
  let fixture: ComponentFixture<TraineeSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ TraineeSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeSignupComponent);
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

 // Set  Userid to something correct
 userID.setValue("Mehnaz");
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

  // Set Password to something correct
  password.setValue("1234567890");
  errors = password.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['minlength']).toBeFalsy();
 });

});
