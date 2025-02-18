import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieRegisterUser } from '../../core/services/register-service/register.service';



@Component({
  selector: 'app-registration-page',
  standalone: false,
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {
  userName: string = '';

  constructor(private cookieRegisterUser: CookieRegisterUser, private router: Router) {

    this.userName = this.cookieRegisterUser.getUserName();
  }

  onRegister() {
    if (this.userName.trim()) {

      this.cookieRegisterUser.setUserName(this.userName, 7);


      this.router.navigate(['/clientes']);
    } else {
      alert('Por favor, digite um nome de usuário.');
    }
  }



}
