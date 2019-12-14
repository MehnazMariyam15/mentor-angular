import { mentor } from './Mentor';
import { Trainee } from './Trainee';
import { Technology } from './Technology';

export interface Training {
    mentorId:mentor;
    traineeId:Trainee;
	techId:Technology;
	proposalStatus:string;

}