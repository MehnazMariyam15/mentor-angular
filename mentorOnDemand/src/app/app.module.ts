import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MentorSignupComponent } from './Signup/mentor-signup/mentor-signup.component';
import { TraineeSignupComponent } from './Signup/trainee-signup/trainee-signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { SearchComponent } from './search/search.component';
import { SkillInfoComponent } from './skill-info/skill-info.component';
import { MentorViewComponent } from './mentor-view/mentor-view.component';
import { TrainingViewComponent } from './training-view/training-view.component';

const appRoutes: Routes = [ 

];
@NgModule({
  declarations: [
    AppComponent,
    MentorSignupComponent,
    TraineeSignupComponent,
    LoginComponent,
    AddSkillsComponent,
    SkillFormComponent,
    SearchComponent,
    SkillInfoComponent,
    MentorViewComponent,
    TrainingViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
