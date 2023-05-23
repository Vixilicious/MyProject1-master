import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { ILog } from 'src/app/interfaces/ILog.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  public points: number = 10;
  public guess: number = 0;
  public result: string = '';
  public guessChecked: boolean = false;
  public newLogs: ILog[] = [
    {
      guesses: 0,
      points: 10,
      timestamp: new Date(),
      user: {
        name: 'Håkan',
        id: 0,
      },
    },
  ];

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
  }
}
