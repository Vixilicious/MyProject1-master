import { IRank } from './IRank.interface';
import { IUser } from './IUser.interface';

export interface ILog {
  rank: IRank;
  user: IUser;
  points: number;
  timestamp: any; //TO-DO: change to Date
}
