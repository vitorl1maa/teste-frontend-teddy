import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { FormattedNamePipe } from '../../../pipes/formatted-name.pipe';
import { CookieRegisterUser } from '../../../services/register-service/register.service';
import { ClientsNavigation } from '../../../enum/navigation.enum';

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

  selectedView: ClientsNavigation | null = null;


  constructor(private cookieRegisterUser: CookieRegisterUser) { }

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
}
