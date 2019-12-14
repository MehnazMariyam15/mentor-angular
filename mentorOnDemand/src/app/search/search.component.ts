import { Component, OnInit } from '@angular/core';
import { mentor } from '../Model/Mentor';
import { Technology } from '../Model/Technology';
import { mentorSkills } from '../Model/MentorSkills';
import { TechnologyService } from '../Services/technology.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  mentorSkills:mentorSkills[];
  searchKey:string;
  mentorList:mentorSkills[];
  sizeTrue:number;
 sizeFalse:number;
  constructor(private techService:TechnologyService) { }

  ngOnInit() {
    this.techService.searchAll().subscribe((data)=>{
      this.mentorSkills=data;
      this.mentorList=data;
      
    })


    this.techService.search(this.searchKey).subscribe((data)=>{
      this.mentorSkills=data;
      this.mentorList=data;
    })
  }
  search(){
    console.log(this.searchKey)
    if(this.searchKey=="")
    this.ngOnInit();
    this.mentorList = this.mentorSkills.filter(l => (l.skillId.skillName.toLowerCase().match(this.searchKey.toLocaleLowerCase())))
  }

  findAllDisabled() {
    this.sizeTrue = 0;
    this.sizeFalse = 0;
    console.log(this.mentorList.length);
    for(let i=0; i<this.mentorList.length; i++) {
      console.log(this.mentorList.length)
      if(!this.mentorList[i].skillId.status)
        { this.sizeFalse++; 
          console.log("false: "+this.sizeFalse);
        }
        else  {
        this.sizeTrue++;
        console.log("true: "+this.sizeTrue);
        }
    }
    console.log("false:" + this.sizeFalse + " true:" + this.sizeTrue + "data length is"+this.mentorList.length);
    if(this.mentorList.length==0)
    return false;
    if(this.mentorList.length == this.sizeFalse) 
     return true;
     else
     return false;
    
  }


}
