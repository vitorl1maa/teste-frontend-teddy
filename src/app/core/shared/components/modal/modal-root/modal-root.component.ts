import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalBodyComponent } from "../modal-body/modal-body.component";
import { ModalFooterComponent } from "../modal-footer/modal-footer.component";
import { ButtonComponent } from "../../button/button.component";
import { InputComponent } from "../../input/input.component";
import { ModalHeaderComponent } from "../modal-header/modal-header.component";

@Component({
  selector: 'app-modal-root',
  imports: [CommonModule, ModalBodyComponent, ModalFooterComponent, ButtonComponent, InputComponent, ModalHeaderComponent],
  templateUrl: './modal-root.component.html',
  styleUrl: './modal-root.component.scss'
})
export class ModalRootComponent {
  @Input() isModalOpen = false;
}
