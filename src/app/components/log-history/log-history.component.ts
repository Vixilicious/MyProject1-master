import { Component, Input } from '@angular/core';
import { ILog } from 'src/app/interfaces/ILog.interface';
import { IUser } from 'src/app/interfaces/IUser.interface';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css'],
})
export class LogHistoryComponent {
  @Input() public logs: ILog[] = [];

  public userLogs: ILog[] = [];

  logGuess(user: IUser, points: number, guesses: number) {
    const log: ILog = { user, points, guesses, timestamp: new Date() };
    this.userLogs.push(log);
  }

  getLog(user: any) {
    return this.userLogs.filter((log) => log.user === user);
  }
}
