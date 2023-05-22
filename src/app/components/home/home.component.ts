import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public newUser: string = '';

  public users = [
    {
      name: 'Vixilicious',
    },
    {
      name: 'KingJones',
    },
    {
      name: 'Michael',
    },
    {
      name: 'MickeyMouse',
    },
    {
      name: 'Mike',
    },
  ];

  public selectedUser: any; // Fråga om detta
  public gameStarted: boolean = false;

  public createUser(newUser: string) {
    const user = {
      name: newUser,
    };
    this.users.push(user);
    this.selectedUser = user;
  }

  public selectUser(user: any) {
    //Fråga om detta
    this.selectedUser = user;
  }

  public startGame() {
    if (this.selectedUser) {
      this.gameStarted = true;
    }
  }
}
