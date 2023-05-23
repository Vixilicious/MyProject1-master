import { IUser } from './IUser.interface';

export interface ILog {
  user: IUser;
  points: number;
  timestamp: any;
}
