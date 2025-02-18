import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | string): string {
    if (!value) return 'R$ 0,00';


    let numericValue = typeof value === 'string' ? parseFloat(value) : value;


    return `R$ ${numericValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  }
}
