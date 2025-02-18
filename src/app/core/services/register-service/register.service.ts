import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserCookieEnum } from '../../enum/user.enum';

@Injectable({
  providedIn: 'root'
})
export class CookieRegisterUser {

  constructor(private cookieService: CookieService) { }

  setUserName(value: string, days: number = 7) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    this.cookieService.set(UserCookieEnum.USER_NAME, JSON.stringify(value), expires);
  }

  getUserName(): string {
    const item = this.cookieService.get(UserCookieEnum.USER_NAME);
    return item ? JSON.parse(item) : '';
  }

  deleteUserName() {
    this.cookieService.delete(UserCookieEnum.USER_NAME);
  }
}
