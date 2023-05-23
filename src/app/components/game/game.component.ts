import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { ILog } from 'src/app/interfaces/ILog.interface';

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
  public points = 10;
  public guess: number = 0;
  public result: string = '';
  public gameOn: boolean = true;
  public dateOf = [''];
  public newLogs: ILog[] = [];

  public timestamp: Date = new Date();
  public day = this.timestamp.getDate();
  public month = this.timestamp.toLocaleString('en-US', { month: 'long' });
  public year = this.timestamp.getFullYear();

  public hours = this.timestamp.getHours();
  public minutes = this.timestamp.getMinutes();
  public seconds = this.timestamp.getSeconds();

  public today = `${this.day} ${this.month} ${this.year} ${this.hours}:${this.minutes}:${this.seconds}`;

  checkGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (this.guess === randomNumber) {
      this.result = "Yay, it's correct!";
      this.points = this.points;
      const newLog: ILog = {
        user: {
          id: this.selectedUser.id,
          name: this.selectedUser.name,
        },
        points: this.points,
        timestamp: this.today,
      };
      this.newLogs.push(newLog);
      this.gameOn = false;
    } else if (this.guess < randomNumber) {
      this.result = 'The number is higher.';
      this.points = this.points - 1;
    } else {
      this.result = 'The number is lower.';
      this.points = this.points - 1;
    }
    if (this.points <= 0) {
      this.result = "You're out of guesses";
    }
  }

  newGame() {
    this.guess = 0;
    this.result = '';
    this.points = 10;
    this.gameOn === true;
    this.checkGuess();
  }
}
