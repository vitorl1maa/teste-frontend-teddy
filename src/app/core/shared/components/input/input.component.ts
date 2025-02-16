import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [CommonModule, NgxMaskDirective, FormsModule],
  providers: [provideNgxMask(), {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  },],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = "Digite aqui...";
  @Input() type: 'text' | 'currency' = 'text';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() value: any = '';
  @Input() mask: string = '';
  @Input() prefix: string = '';
  @Input() thousandSeparator: string = '.';
  @Input() decimalMarker: "." | "," | [".", ","] = ',';

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

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
