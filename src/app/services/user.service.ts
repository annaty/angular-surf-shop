import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static USERS: User[] = [
    {
      id: '1',
      name: 'Anna Test',
      email: 'anna@test.com',
      rating: 4.5
    }
  ];

  constructor() {
    for (let i = 2; i < 100; i++) {
      UserService.USERS.push({
        id: i.toString(),
        name: `User ${i}`,
        email: `test${i}@test.com`,
        rating: +(Math.random() * 5).toFixed(1)
      });
    }
  }

  getCurrentUserId() {
    return '1';
  }

  getUserById(id: string) {
    return UserService.USERS.find(user => user.id === id);
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
  rating: number;
}
