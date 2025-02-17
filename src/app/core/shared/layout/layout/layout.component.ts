import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ClientsNavigation } from '../../../enum/navigation.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [NavbarComponent]
})
export class LayoutComponent {
  @Input() menuItems: { label: string; view: ClientsNavigation | null; }[] = [];
  @Input() sideItems: { icon: string; label: string; }[] = [];
  @Output() viewChanged = new EventEmitter<ClientsNavigation | null>();

  changeView(view: ClientsNavigation | null) {
    this.viewChanged.emit(view);
  }



}
