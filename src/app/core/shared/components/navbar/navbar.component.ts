import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { UserService } from '../../../services/register.service';
import { FormattedNamePipe } from '../../../pipes/formatted-name.pipe';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, IconComponent, FormattedNamePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  menuItems = [
    { label: 'Clientes' },
    { label: 'Clientes selecionados' },
    { label: 'Sair' }
  ];

  sideItems = [
    { icon: 'home-icon', label: 'Home' },
    { icon: 'client-icon', label: 'Clientes' },
    { icon: 'products-icon', label: 'Produtos' }
  ];

  isMenuOpen = false;
  userName: string = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.getUserName();
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
      console.log('Nome do usuário:', name);
    });
  }

}
