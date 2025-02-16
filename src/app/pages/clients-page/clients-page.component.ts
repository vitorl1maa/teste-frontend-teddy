import { Component } from '@angular/core';
import { ButtonComponent } from "../../core/shared/components/button/button.component";
import { LayoutComponent } from "../../core/shared/layout/layout/layout.component";
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from "./components/clients-list/clients-list.component";
import { ModalCreatComponent } from "./components/modal-actions/modal-creat/modal-creat.component";
import { ModalEditComponent } from "./components/modal-actions/modal-edit/modal-edit.component";
import { ModalDeleteComponent } from "./components/modal-actions/modal-delete/modal-delete.component";
import { CLIENTS_MOCK } from '../../core/mocks/clients.mock';

@Component({
  selector: 'app-clients-page',
  standalone: false,
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss'
})
export class ClientsPageComponent {
  clients = CLIENTS_MOCK.clients;

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

