import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Training } from '../Model/Training';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  username:string;
  token:any;
  constructor(private http: HttpClient) { }

  book(mentorName:string,traineeName:string,techName:string){
    console.log(mentorName+" "+traineeName+" "+techName);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.token);
    console.log(mentorName+" "+traineeName+" "+techName);
    return this.http.post(environment.userUrl + "/proposal/"+mentorName+"/"+traineeName+"/"+techName,{ headers });
  }
  
}
