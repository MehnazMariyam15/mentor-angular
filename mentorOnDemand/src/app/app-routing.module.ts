import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorSignupComponent } from './Signup/mentor-signup/mentor-signup.component';
import { TraineeSignupComponent } from './Signup/trainee-signup/trainee-signup.component';
import { LoginComponent } from './login/login/login.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { SearchComponent } from './search/search.component';
import { MentorViewComponent } from './mentor-view/mentor-view.component';
import { TrainingViewComponent } from './training-view/training-view.component';


const routes: Routes = [
  
  { path: 'mentorSignup', component: MentorSignupComponent},
  { path: 'mentor', component: MentorViewComponent},
  { path: 'traineeSignup', component: TraineeSignupComponent},
  { path: 'search', component: SearchComponent},
  { path:'login',component:LoginComponent},
  { path:'addSkill/:userID',component:AddSkillsComponent},
  { path:'skillForm/:skillName/:userID',component:SkillFormComponent},
  { path:'training',component:TrainingViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
