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
import { ClientsSelectedComponent } from "./components/clients-selected/clients-selected.component";
import { CardRootComponent } from '../../core/shared/components/card/card-root/card-root.component';
import { CardHeaderComponent } from '../../core/shared/components/card/card-header/card-header.component';
import { CardBoodyComponent } from '../../core/shared/components/card/card-boody/card-boody.component';
import { CardFooterComponent } from '../../core/shared/components/card/card-footer/card-footer.component';
import { IconComponent } from '../../core/shared/components/icon/icon.component';
import { ModalRootComponent } from '../../core/shared/components/modal/modal-root/modal-root.component';
import { ModalHeaderComponent } from '../../core/shared/components/modal/modal-header/modal-header.component';
import { ModalBodyComponent } from '../../core/shared/components/modal/modal-body/modal-body.component';
import { ModalFooterComponent } from '../../core/shared/components/modal/modal-footer/modal-footer.component';
import { LoadingComponent } from "../../core/shared/components/loading/loading.component";


@NgModule({
  declarations: [ClientsPageComponent, ClientsListComponent, ClientsSelectedComponent],
  imports: [
    CommonModule,
    ClientsPageRoutingModule,
    LayoutComponent,
    ModalCreatComponent,
    ButtonComponent,
    ModalEditComponent,
    ModalDeleteComponent,
    CardRootComponent,
    CardHeaderComponent,
    CardBoodyComponent,
    CardFooterComponent,
    IconComponent,
    ModalRootComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    LoadingComponent
  ]
})
export class ClientsPageModule { }
