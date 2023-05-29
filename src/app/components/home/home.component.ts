import { Component, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public newUser: string = '';
  public userSelected: boolean = false;

  public users: IUser[] = [
    {
      name: 'Vixilicious',
      id: 1,
    },
    {
      name: 'KingJones',
      id: 2,
    },
    {
      name: 'Michael',
      id: 3,
    },
    {
      name: 'MickeyMouse',
      id: 4,
    },
    {
      name: 'Mike',
      id: 5,
    },
  ];

  public selectedUser: IUser = {
    name: '',
    id: 0,
  };

  public gameStarted: boolean = false;

  public createUser(newUser: string) {
    const user = {
      name: newUser,
      id: this.users.length + 1,
    };
    this.users.push(user);
    this.selectedUser = user;
    this.userSelected = true;
  }

  public selectUser(user: IUser) {
    this.selectedUser = user;
    this.userSelected = true;
  }

  public startGame() {
    if (this.selectedUser) {
      this.gameStarted = true;
    }
  }
}
