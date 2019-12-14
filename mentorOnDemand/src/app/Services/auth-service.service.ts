import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignUpServiceService } from './sign-up-service.service';
import { Router } from '@angular/router';
import { MentorService } from './mentor.service';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  loggedInUser = { loggedOut: true };
  validCredentials: boolean = true;
  accessToken: string;
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  private token: string;
  error: string = "Login Failed";
  id: number;
  username:string;
  role:string;
  isMentor:boolean;
  isTrainee:boolean;

  authenticateSpring(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ':' + password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials)
    console.log(headers);
    return this.httpClient.get(environment.baseUrl + "/authenticate", { headers })
  }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }
  public getId() {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  constructor(private signupService:SignUpServiceService , private mentorService:MentorService,public router: Router, private httpClient: HttpClient) { }

  authenticateUser(user) {
    this.authenticateSpring(user.username, user.password).subscribe(
      (data) => {
        this.loggedInUser = user.username;
        this.username=user.username;
        this.validCredentials = true;
        this.loggedIn = true;
        this.mentorService.token = data.token;
        this.mentorService.username=user.username;
        this.setToken(data.token);
        this.role=data.role;

        if (this.role == 'MENTOR') {
          this.isMentor = true;
          this.router.navigate(['mentor']);
        }
        else if(this.role=='TRAINEE') {
          this.isTrainee=true;
          this.router.navigate(['search']);
        }
        else {
          this.isTrainee=false;
          this.isMentor = false;
          this.router.navigate(['search']);
        }
       
      },
      (error) => {
        this.validCredentials = false;
      }
    )
  }

  logout() {
    this.loggedInUser = { loggedOut: true };
    this.loggedIn = false;
    this.isTrainee=false;
    this.isMentor = false;
    this.router.navigate(['login']);
  }
  
}
