import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Trainee } from 'src/app/Model/Trainee';
import { SignUpServiceService } from 'src/app/Services/sign-up-service.service';
import { Router } from '@angular/router';

export class User {
  constructor(public userID: string,
    public firstName: string, public lastName: string,public contactNo: number,public email:string,public  password:string,public confirmPassword:string) {
  }
}

@Component({
  selector: 'app-trainee-signup',
  templateUrl: './trainee-signup.component.html',
  styleUrls: ['./trainee-signup.component.css']
})
export class TraineeSignupComponent implements OnInit {

  signUpForm: FormGroup;
  trainee:Trainee;
  signedIn = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder, private signService: SignUpServiceService,private router:Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      userID: ['', [
        Validators.required,
        this.isUsernameTaken,
        Validators.pattern("^[a-zA-Z]*$"),

      ]],
      firstName: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),

      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),

      ]],
      contactNo: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),

      ]],
      email: ['', [
        Validators.required,
        Validators.email,

      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3),

      ]],
      confirmPassword: ['', [
        Validators.required,
        this.matchConfirmPassword.bind(this),
        Validators.minLength(3),

      ]]
    })
  }
  get userID() {
    return this.signUpForm.get('userID');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get contactNo() {
    return this.signUpForm.get('contactNo');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }
  isUsernameTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
      return { 'userNameTaken': true };
    } else {
      return null;
    }
  }
  submit(traineeDetails:Trainee){
    console.log(traineeDetails);
    this.signService.addTrainee(traineeDetails).subscribe((data)=>{
      alert('signed up successfully!!!');
      this.router.navigate(['login']);
    })
  }

  signuptrainee() {
    
    if (this.signUpForm.valid) {
      this.signedIn.emit(
        new User(
          this.signUpForm.value.userID,
          this.signUpForm.value.firstName,
          this.signUpForm.value.lastName,
          this.signUpForm.value.contactNo,
          this.signUpForm.value. email,
          this.signUpForm.value.password,
          this.signUpForm.value.confirmPassword,

        )
      );
    }
  }
  
}
