import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Training } from '../Model/Training';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class StatusService {
 
  constructor(private http: HttpClient,private authService:AuthServiceService) { }

  getPendingList() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Training>(environment.userUrl + "/proposal/pending/"+this.authService.username,{ headers });

  }

  getAllList() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Training>(environment.userUrl + "/proposal/all/"+this.authService.username,{ headers });

  }

  getAlllList() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Training>(environment.userUrl + "/proposal/alll/"+this.authService.username,{ headers });

  }

  giveApproval(traineeId: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.put(environment.userUrl + "/proposal/accept/"+traineeId,null,{ headers });
   
  }

  
  declineApproval(traineeId: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.delete(environment.userUrl + "/proposal/decline/"+traineeId,{ headers });
   
  }

}
