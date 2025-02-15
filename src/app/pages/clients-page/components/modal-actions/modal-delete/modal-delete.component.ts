import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalRootComponent } from "../../../../../core/shared/components/modal/modal-root/modal-root.component";
import { ModalHeaderComponent } from "../../../../../core/shared/components/modal/modal-header/modal-header.component";
import { ModalBodyComponent } from "../../../../../core/shared/components/modal/modal-body/modal-body.component";
import { ModalFooterComponent } from "../../../../../core/shared/components/modal/modal-footer/modal-footer.component";
import { ButtonComponent } from "../../../../../core/shared/components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-delete',
  imports: [CommonModule, ModalRootComponent, ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent, ButtonComponent],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.scss'
})
export class ModalDeleteComponent {
  @Output() onClose = new EventEmitter<void>();
  @Input() client: any;

  isModalOpen = true;
  modalTitle = 'Excluir cliente:';
  modalButtonText = 'Excluir cliente';

  closeModal() {
    this.isModalOpen = false;
    this.onClose.emit();
  }

  confirmDelete() {
    console.log(`Cliente  deletado!`);
    this.closeModal();
  }
}