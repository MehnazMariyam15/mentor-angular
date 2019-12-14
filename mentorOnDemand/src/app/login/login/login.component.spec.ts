import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent, User } from './login.component';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log("inside login");
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

   it('userId field validity', () => {
     let errors = {};
    let username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();
   

     //Userid field is required
   errors = username.errors || {};
   expect(errors['required']).toBeTruthy();
   

    // Set  Userid to something
    username.setValue("12345");
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set  Userid to something correct
    username.setValue("Men");
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];

    // Password field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set Password to something
    password.setValue("12");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set Password to something correct
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });
  it('submitting a form emits a user', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue("Men");
    component.loginForm.controls['password'].setValue("pwd");
    expect(component.loginForm.valid).toBeTruthy();

     let user: User;
     // Subscribe to the Observable and store the user in a local variable.
     component.loggedIn.subscribe((value) => user = value);

    // // Trigger the login function
    component.login();

     // Now we can check to make sure the emitted value is correct
    expect(user.username).toBe("Men");
    expect(user.password).toBe("pwd");
});

});
