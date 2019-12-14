import { Component, OnInit, Input } from '@angular/core';
import { mentorSkills } from '../Model/MentorSkills';
import { Technology } from '../Model/Technology';
import { TechnologyService } from '../Services/technology.service';
import { MentorService } from '../Services/mentor.service';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.css']
})
export class SkillInfoComponent implements OnInit {

  @Input() mentorList:mentorSkills[]
  

  
  skill:Technology[];
 sizeTrue:number;
 sizeFalse:number;

  constructor(private techService:TechnologyService,private mentorService:MentorService,private authService:AuthServiceService, private router: Router) { }

  ngOnInit() {
    console.log("input size"+this.mentorList.length);
    this.techService.getAllTechnologies().subscribe((data)=>{
      this.skill=data;
          })

    this.techService.searchAll().subscribe((data)=>{
      this.mentorList=data;
      this.sizeTrue = 0;
      this.sizeFalse = 0;
      console.log(data.length);
      for(let i=0; i<this.mentorList.length; i++) {
        console.log(data.length)
        if(!this.mentorList[i].skillId.status)
          { this.sizeFalse++; 
            console.log("false: "+this.sizeFalse);
          }
          else  {
          this.sizeTrue++;
          console.log("true: "+this.sizeTrue);
          }
      }
      if(data.length == this.sizeFalse) 
        alert('HI');
      console.log("false:" + this.sizeFalse + " true:" + this.sizeTrue);
    })
  }

  book(mentorName:string,traineeName:string,techName:string){
    this.mentorService.book(mentorName,traineeName,techName).subscribe((data)=>{
      alert('Booked successfully')
    })
    this.router.navigate(['search'])
  }


}
