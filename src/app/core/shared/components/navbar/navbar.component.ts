import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { FormattedNamePipe } from '../../../pipes/formattedName/formatted-name.pipe';
import { CookieRegisterUser } from '../../../services/register-service/register.service';
import { ClientsNavigation } from '../../../enum/navigation.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, IconComponent, FormattedNamePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() menuItems: { label: string; view: ClientsNavigation | null; }[] = [];
  @Input() sideItems: { icon: string; label: string; }[] = [];
  @Output() viewChanged = new EventEmitter<ClientsNavigation | null>();

  isMenuOpen = false;
  userName: string = '';

  selectedView: ClientsNavigation | null = ClientsNavigation.CLIENTS;


  constructor(private cookieRegisterUser: CookieRegisterUser, private router: Router) { }

  ngOnInit() {
    this.userName = this.cookieRegisterUser.getUserName();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectView(view: ClientsNavigation | null) {
    this.viewChanged.emit(view);
    this.selectedView = view;
  }

  logout() {
    this.cookieRegisterUser.deleteUserName();
    this.router.navigate(['/']);
  }
}
