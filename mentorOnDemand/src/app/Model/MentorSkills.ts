import { mentor } from './Mentor';
import { Technology } from './Technology';

export interface mentorSkills {
    rating:number,
    experience:number,
    trainings:number,
    facilities:string,
    skillId:Technology,
    mentorId:mentor
}