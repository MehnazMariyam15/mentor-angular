import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mentorSkills } from '../Model/MentorSkills';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SignUpServiceService } from '../Services/sign-up-service.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  constructor(private route:ActivatedRoute,private formBuilder: FormBuilder,private signupService:SignUpServiceService, private router: Router) { }

  mentorskills:mentorSkills;
  editForm:FormGroup;
  userID:string;
  skillName:string;

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get('userID');
    this.skillName=this.route.snapshot.paramMap.get('skillName');

    this.editForm = this.formBuilder.group({
      rating: ['', [
        Validators.required,
      ]],
      experience: ['', [
        Validators.required
      ]],
      trainings: ['', [
        Validators.required
      ]],
      facilities: ['', [
        Validators.required
      ]],
    })
  }
  get rating() {
    return this.editForm.get('rating');
  }
  get experience() {
    return this.editForm.get('experience');
  }
  get training() {
    return this.editForm.get('training');
  }
  get facilities() {
    return this.editForm.get('facilities');
  }
  

  submit(mentorSkill:mentorSkills){
    this.signupService.addTechnologies(mentorSkill,this.userID,this.skillName).subscribe(
      (data) =>{
        alert('Technology Added successfully');
        this.router.navigate(['login']);
      }
    );
  }

  addSkill(mentorSkill: mentorSkills) {
    this.signupService.addTechnologies(mentorSkill,this.userID,this.skillName).subscribe(
      (data)=> {
        this.router.navigate(['/addSkill',this.userID])
      }
    )
  }
}
