import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() menuItems: { label: string; link: string }[] = []
  @Input() sideItems: { icon: string; label: string; link: string }[] = [];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
