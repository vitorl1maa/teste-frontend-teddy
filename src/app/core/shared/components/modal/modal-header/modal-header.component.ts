import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from "../../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-header',
  imports: [CommonModule, IconComponent],
  templateUrl: './modal-header.component.html',
  styleUrl: './modal-header.component.scss'
})
export class ModalHeaderComponent {
  @Input() title: string = '';
  @Input() isModalOpen = false;
  @Input() isCustomHeader = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onOpen = new EventEmitter<void>();


}
