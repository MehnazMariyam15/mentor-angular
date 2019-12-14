import { mentorSkills } from './MentorSkills';

export interface mentor {
    userID:string,
    lastName:string,
    firstName:string,
    contactNo:string,
    linkedInUrl:string,
    yearsOfExperience:number,
    password:string,
    email:string,
    confirmPassword:string,
    mentorSkillsList:mentorSkills[]
}