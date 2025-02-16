import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { UserService } from '../../../services/register.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() menuItems: { label: string; }[] = []
  @Input() sideItems: { icon: string; label: string; }[] = [];

  isMenuOpen = false;
  userName: string = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
      console.log('Nome do usuário:', name);
    });
  }

}
