import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { ILog } from 'src/app/interfaces/ILog.interface';
import { IRank } from 'src/app/interfaces/IRank.interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  @Input() public selectedUser: IUser = {
    name: '',
    id: 0,
  };
  public rank: IRank = {
    position: 0,
  };

  public randomNumber = this.generateNumber();
  public points = 10;
  public guess: number = 0;
  public result: string = '';
  public gameOn: boolean = true;
  public dateOf = [''];
  public newLogs: ILog[] = [];
  public currentLogs: ILog[] = [];
  public recentLog: ILog | undefined;

  // public addObject(recentLog: ILog) {
  //   const newObject: ILog = recentLog;
  //   this.currentLogs.unshift(newObject);
  //   this.recentLog = newObject;
  // }

  checkGuess() {
    if (this.guess === this.randomNumber) {
      this.result = "Yay, it's correct!";
      this.points = this.points;
      const newLog: ILog = {
        rank: {
          position: this.rank.position,
        },
        user: {
          id: this.selectedUser.id,
          name: this.selectedUser.name,
        },
        points: this.points,
        timestamp: new Date(),
      };
      this.newLogs = this.newLogs.concat(newLog);
      this.gameOn = false;
      console.log(newLog);
    } else if (this.guess < this.randomNumber) {
      this.result = 'The number is higher.';
      this.points = this.points - 1;
    } else {
      this.result = 'The number is lower.';
      this.points = this.points - 1;
    }
    this.setRank();
    if (this.points <= 0) {
      this.result = "You're out of guesses";
      this.gameOn = false;
      const newLog: ILog = {
        rank: {
          position: this.rank.position,
        },
        user: {
          id: this.selectedUser.id,
          name: this.selectedUser.name,
        },
        points: this.points,
        timestamp: new Date(),
      };
      this.newLogs = this.newLogs.concat(newLog);
    }
  }

  setRank() {
    this.newLogs.sort((a, b) => b.points - a.points);

    let rank = 1;
    for (let i = 0; i < this.newLogs.length; i++) {
      if (i > 0 && this.newLogs[i].points < this.newLogs[i - 1].points) {
        rank++;
      }
      this.newLogs[i].rank.position = rank;
    }
  }

  newGame() {
    this.guess = 0;
    this.result = '';
    this.points = 10;
    this.randomNumber = this.generateNumber();
    this.gameOn = true;
    // this.addObject(recentLog);
  }

  generateNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
