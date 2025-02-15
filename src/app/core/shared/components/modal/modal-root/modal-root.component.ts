import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-modal-root',
  imports: [CommonModule],
  templateUrl: './modal-root.component.html',
  styleUrl: './modal-root.component.scss'
})
export class ModalRootComponent {
  @Input() isModalOpen = false;
}
