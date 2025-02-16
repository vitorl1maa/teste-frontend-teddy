import { Component } from '@angular/core';
import { UserService } from '../../core/services/register.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration-page',
  standalone: false,
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {
  userName: string = '';

  constructor(private userService: UserService, private router: Router) {
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }
  onRegister() {
    if (this.userName) {
      this.userService.setUserName(this.userName);
      this.router.navigate(['/clientes']);
    } else {
      alert('Por favor, digite um nome de usuário.');
    }
  }

}
