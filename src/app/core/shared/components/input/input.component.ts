import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [CommonModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = "Digite aqui...";
  @Input() type: 'text' | 'currency' = 'text';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() value: any = '';
  @Input() mask: string = '';
  @Input() prefix: string = '';
  @Input() thousandSeparator: string = '.';
  @Input() decimalMarker: "." | "," | [".", ","] = ',';

  getMask(): any {
    if (this.type === 'currency') {
      return 'separator.2';
    }
    return '';
  }

  getMaskConfig(): any {
    return {
      prefix: this.prefix,
      thousandSeparator: this.thousandSeparator,
      decimalMarker: this.decimalMarker,
    };
  }

}
