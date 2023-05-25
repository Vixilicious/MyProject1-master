import { Component, Input } from '@angular/core';
import { ILog } from 'src/app/interfaces/ILog.interface';
import { IRank } from 'src/app/interfaces/IRank.interface';

import { IUser } from 'src/app/interfaces/IUser.interface';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css'],
})
export class LogHistoryComponent {
  @Input() public logs: ILog[] = [
    {
      rank: {
        position: 0,
      },
      user: {
        name: 'Vixilicious',
        id: 0,
      },
      points: 10,
      timestamp: new Date(),
    },
  ];
  public displayedColumns: string[] = ['Rank', 'User', 'Score', 'Time'];
  public userLogs: ILog[] = [];

  logGuess(user: IUser, points: number, rank: IRank) {
    const log: ILog = { rank, user, points, timestamp: new Date() };
    this.userLogs.push(log);
  }

  getLog(user: any) {
    return this.userLogs.filter((log) => log.user === user);
  }
}
