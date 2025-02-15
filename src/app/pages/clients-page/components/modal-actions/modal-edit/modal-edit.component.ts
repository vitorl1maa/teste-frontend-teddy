import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalRootComponent } from "../../../../../core/shared/components/modal/modal-root/modal-root.component";
import { ModalHeaderComponent } from "../../../../../core/shared/components/modal/modal-header/modal-header.component";
import { ModalBodyComponent } from "../../../../../core/shared/components/modal/modal-body/modal-body.component";
import { InputComponent } from "../../../../../core/shared/components/input/input.component";
import { ModalFooterComponent } from "../../../../../core/shared/components/modal/modal-footer/modal-footer.component";
import { ButtonComponent } from "../../../../../core/shared/components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-edit',
  imports: [CommonModule, ModalRootComponent, ModalHeaderComponent, ModalBodyComponent, InputComponent, ModalFooterComponent, ButtonComponent],
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.scss'
})
export class ModalEditComponent {
  @Output() onClose = new EventEmitter<void>();
  @Input() clientData: { name: string; salary: number; companyValue: number } | null = null;


  isModalOpen = true;
  modalTitle = 'Editar cliente:';
  modalButtonText = 'Editar cliente';

  closeModal() {
    this.isModalOpen = false;
    this.onClose.emit();
  }

  saveChanges() {
    console.log('Cliente atualizado:', this.clientData);
    this.closeModal();
  }
}
