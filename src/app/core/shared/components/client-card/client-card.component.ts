import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-client-card',
  imports: [CommonModule, IconComponent],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss'
})
export class ClientCardComponent {
  @Input() name: string = '';
  @Input() salary: number = 0;
  @Input() companyValuation: number = 0;
  @Input() icons: { icon: "minus" | "trash2" | "pencil" | "x" | "alignJustify" | "arrowLeft" | "plus"; size: "sm" | "md" | "lg" }[] = [];


}
