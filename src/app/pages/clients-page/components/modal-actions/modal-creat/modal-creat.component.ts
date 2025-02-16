import { Component, EventEmitter, Output } from '@angular/core';
import { ModalRootComponent } from "../../../../../core/shared/components/modal/modal-root/modal-root.component";
import { ModalHeaderComponent } from "../../../../../core/shared/components/modal/modal-header/modal-header.component";
import { ModalBodyComponent } from "../../../../../core/shared/components/modal/modal-body/modal-body.component";
import { ModalFooterComponent } from "../../../../../core/shared/components/modal/modal-footer/modal-footer.component";
import { ButtonComponent } from "../../../../../core/shared/components/button/button.component";
import { InputComponent } from "../../../../../core/shared/components/input/input.component";
import { NgxMaskDirective } from 'ngx-mask';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-creat',
  imports: [CommonModule, ModalRootComponent, ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent, ButtonComponent, InputComponent],
  templateUrl: './modal-creat.component.html',
  styleUrl: './modal-creat.component.scss'
})
export class ModalCreatComponent {
  @Output() onClose = new EventEmitter<void>();

  isModalOpen = true;
  modalTitle = 'Criar cliente:';
  modalButtonText = 'Criar cliente';

  closeModal() {
    this.isModalOpen = false;
    this.onClose.emit();
  }

  submit() {
    console.log('Cliente criado!');
    this.closeModal();
  }

}
