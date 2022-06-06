import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private REST_API = 'http://localhost:3000/api';
  userChanged = new Subject<User>();
  constructor(private http: HttpClient) {}

  public login(userName: string, password: string): Observable<User> {
    return this.http.post<User>(
      `${this.REST_API}/users/login?userName=${userName}&password=${password}`,
      null
    );
  }
  setUser(user: User) {
    const jsonData = JSON.stringify(user);
    localStorage.setItem('user', jsonData);
    this.userChanged.next(user);
  }
  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
  logout() {
    localStorage.removeItem('user');
    this.userChanged.next(null);
  }
}
