import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userNameSubject = new BehaviorSubject<string>('');

  userName$ = this.userNameSubject.asObservable();


  setUserName(name: string) {
    this.userNameSubject.next(name);
    localStorage.setItem('userName', name);
  }


  getUserName() {
    return this.userNameSubject.value;
  }

  private getStoredUserName(): string {
    return localStorage.getItem('userName') || '';
  }
}