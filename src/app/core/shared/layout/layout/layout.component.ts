import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [NavbarComponent]
})
export class LayoutComponent {
  @Input() menuItems: { label: string; link: string }[] = [];
  @Input() sideItems: { icon: string; label: string; link: string }[] = [];
}
