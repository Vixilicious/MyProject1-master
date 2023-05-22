import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
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

  public selectUser() {
    this.users;
  }

  public createUser(name: string) {
    const user = {
      name,
    };
    this.users.push(user);
  }
}
