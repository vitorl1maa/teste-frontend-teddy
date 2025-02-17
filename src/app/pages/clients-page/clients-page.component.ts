import { Component } from '@angular/core';
import { CLIENTS_MOCK } from '../../core/mocks/clients.mock';
import { ClientsNavigation } from '../../core/enum/navigation.enum';

@Component({
  selector: 'app-clients-page',
  standalone: false,
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss'
})
export class ClientsPageComponent {
  clients = CLIENTS_MOCK.clients;
  selectedView: ClientsNavigation = ClientsNavigation.CLIENTS;
  ClientsNavigation = ClientsNavigation;

  menuItems = [
    { label: 'Clientes', view: ClientsNavigation.CLIENTS },
    { label: 'Clientes Selecionados', view: ClientsNavigation.CLIENTSSELECTED },
    { label: 'Sair', view: null }
  ];

  sideItems = [
    { icon: 'home-icon', label: 'Home' },
    { icon: 'client-icon', label: 'Clientes' },
    { icon: 'products-icon', label: 'Produtos' }
  ];


  changeView(view: ClientsNavigation | null) {
    if (view !== null) {
      this.selectedView = view;
    } else {
      this.logout();
    }
  }

  logout() {

  }

  showModalCreate = false;
  showModalEdit = false;
  showModalDelete = false;

  selectedClient = { name: '', salary: 0, companyValue: 0 };


  openCreateModal() {
    this.showModalCreate = true;
  }

  openEditModal(client: any) {
    this.selectedClient = client;
    this.showModalEdit = true;
  }

  openDeleteModal(client: any) {
    this.selectedClient = client;
    this.showModalDelete = true;
  }

  closeModal() {
    this.showModalCreate = false;
    this.showModalEdit = false;
    this.showModalDelete = false;
  }


}

