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
  public logOn: boolean = false;
  public logOff: boolean = false;

  @Input() cardSwitched: boolean = false;

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
  public displayedColumns: string[] = [
    'rank.position',
    'user.name',
    'points',
    'timestamp',
  ];

  // get recentLog(): ILog | undefined {
  //   return this.logs.length > 0 ? this.logs[this.logs.length - 1] : undefined;
  // }

  public userLogs: ILog[] = [];

  public logSwitch() {
    this.logOn = true;
  }

  public logHide() {
    this.logOn = false;
  }

  // logGuess(user: IUser, points: number, rank: IRank) {
  //   const log: ILog = { rank, user, points, timestamp: new Date() };
  //   this.userLogs.push(log);
  //   console.log(user.name);
  // }

  // getLog(user: any) {
  //   return this.userLogs.filter((log) => log.user === user);
  // }
}
