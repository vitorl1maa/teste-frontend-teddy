import { Component } from '@angular/core';
import { ButtonComponent } from "../../core/shared/components/button/button.component";
import { LayoutComponent } from "../../core/shared/layout/layout/layout.component";
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from "./components/clients-list/client-list.component";
import { ModalCreatComponent } from "./components/modal-actions/modal-creat/modal-creat.component";
import { ModalEditComponent } from "./components/modal-actions/modal-edit/modal-edit.component";
import { ModalDeleteComponent } from "./components/modal-actions/modal-delete/modal-delete.component";

@Component({
  selector: 'app-clients-page',
  imports: [CommonModule, ButtonComponent, LayoutComponent, ClientsListComponent, ModalCreatComponent, ModalEditComponent, ModalDeleteComponent],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss'
})
export class ClientsPageComponent {

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

  showModalCreate = false;
  showModalEdit = false;
  showModalDelete = false;


  selectedClient = { name: '', salary: 0, companyValue: 0 };

  openCreateModal() {
    this.showModalCreate = true;
  }

  openEditModal() {
    this.showModalEdit = true;
  }

  openDeleteModal() {
    this.showModalDelete = true;
  }

  closeModal() {
    this.showModalCreate = false;
    this.showModalEdit = false;
    this.showModalDelete = false;
  }

}

