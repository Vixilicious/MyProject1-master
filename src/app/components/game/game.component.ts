import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  constructor(private home: HomeComponent) {}

  public points: number = 10;
  public guess: number = 0;
  public result: string = '';
  public userLogs: any[] = [];

  checkGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (this.guess === randomNumber) {
      this.result = "Yay, it's correct!";
      this.points = this.points;
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

    // this.logGuess(this.selectUser, this.guess, this.result);
  }

  logGuess(user: any, points: number, guesses: number) {
    const log = { user, points, guesses, date: new Date() };
    this.userLogs.push(log);
    this.home.selectUser = user;
  }

  getLog(user: any) {
    return this.userLogs.filter((log) => log.user === user);
  }
}
