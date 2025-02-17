import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsPageRoutingModule } from './clients-page-routing.module';
import { ClientsPageComponent } from './clients-page.component';
import { LayoutComponent } from "../../core/shared/layout/layout/layout.component";
import { ClientsListComponent } from "./components/clients-list/clients-list.component";
import { ModalCreatComponent } from "./components/modal-actions/modal-creat/modal-creat.component";
import { ButtonComponent } from "../../core/shared/components/button/button.component";
import { ModalEditComponent } from "./components/modal-actions/modal-edit/modal-edit.component";
import { ModalDeleteComponent } from "./components/modal-actions/modal-delete/modal-delete.component";
import { ClientsSelectedComponent } from "./components/clients-selected/clients-selected/clients-selected.component";


@NgModule({
  declarations: [ClientsPageComponent],
  imports: [
    CommonModule,
    ClientsPageRoutingModule,
    LayoutComponent,
    ClientsListComponent,
    ModalCreatComponent,
    ButtonComponent,
    ModalEditComponent,
    ModalDeleteComponent,
    ClientsSelectedComponent
  ]
})
export class ClientsPageModule { }
