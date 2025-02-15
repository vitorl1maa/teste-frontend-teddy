import { Component } from '@angular/core';
import { ModalRootComponent } from "../../core/shared/components/modal/modal-root/modal-root.component";
import { ModalHeaderComponent } from "../../core/shared/components/modal/modal-header/modal-header.component";
import { InputComponent } from "../../core/shared/components/input/input.component";
import { ModalBodyComponent } from "../../core/shared/components/modal/modal-body/modal-body.component";
import { ModalFooterComponent } from "../../core/shared/components/modal/modal-footer/modal-footer.component";
import { ButtonComponent } from "../../core/shared/components/button/button.component";
import { ClientListComponent } from "./components/clients-list/client-list/client-list.component";
import { LayoutComponent } from "../../core/shared/layout/layout/layout.component";

@Component({
  selector: 'app-clients-page',
  imports: [ModalRootComponent, ModalHeaderComponent, InputComponent, ModalBodyComponent, ModalFooterComponent, ButtonComponent, ClientListComponent, LayoutComponent],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss'
})
export class ClientsPageComponent {

  //app-navbar
  menuItems = [
    { label: 'Clientes', link: '' },
    { label: 'Clientes selecionados', link: '' },
    { label: 'Sair', link: '' }
  ];

  sideItems = [
    { icon: 'home-icon', label: 'Home', link: '' },
    { icon: 'client-icon', label: 'Clientes', link: '' },
    { icon: 'products-icon', label: 'Produtos', link: '' }
  ];
}
