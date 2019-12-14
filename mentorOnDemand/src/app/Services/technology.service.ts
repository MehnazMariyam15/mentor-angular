import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../Model/Technology';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { mentorSkills } from '../Model/MentorSkills';

@Injectable({
  providedIn: 'root'
})

export class TechnologyService {

  constructor(private http: HttpClient) { }

  getAllTechnologies(): Observable<any> {
    return this.http.get<Technology>(environment.techUrl + "/technologies");

  }

  search(skillName:string){
    return this.http.get<mentorSkills[]>(environment.searchUrl+"/search/"+skillName)
  }
  
  searchAll(){
    return this.http.get<mentorSkills[]>(environment.searchUrl+"/search")
  }

}
