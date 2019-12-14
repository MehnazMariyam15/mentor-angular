import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technology } from '../Model/Technology';
import { SignUpServiceService } from '../Services/sign-up-service.service';
import { TechnologyService } from '../Services/technology.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private signService:SignUpServiceService,private router:Router,private techService:TechnologyService) { }

  technologies :any;
  ngOnInit() {
    this.techService.getAllTechnologies().subscribe(
      (data) =>
      {
        this.technologies = data;
      }
    );
   
  }
 
  submit(skillName:string){    
    const userID = this.route.snapshot.paramMap.get('userID');
    this.router.navigate(['skillForm',skillName,userID]);
  }

}
