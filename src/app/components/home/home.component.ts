import { Component, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser.interface';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public newUser: string = '';

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

  public foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
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
  }

  public selectUser(user: IUser) {
    this.selectedUser = user;
  }

  public startGame() {
    if (this.selectedUser) {
      this.gameStarted = true;
    }
  }
}
