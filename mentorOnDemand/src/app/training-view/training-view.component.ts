import { Component, OnInit } from '@angular/core';
import { StatusService } from '../Services/status.service';
import { MentorService } from '../Services/mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-view',
  templateUrl: './training-view.component.html',
  styleUrls: ['./training-view.component.css']
})
export class TrainingViewComponent implements OnInit {

  mentor: any;  
  userApproved = false;
  error: String = '';
  size: number = 0;

  constructor(private mentorservice:MentorService,private approvalService:StatusService, private router: Router) { }

  ngOnInit() {
    this.redirecting();
  }

  redirecting() {
    this.approvalService.getAlllList().subscribe(
      (data) => {
        console.log(data);
        this.mentor =data;  }
    );
  }

  pay() {
    alert('Paid successfully !')
    this.router.navigate(['search'])
  }

}
