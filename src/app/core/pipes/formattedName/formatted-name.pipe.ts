import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedName',
})
export class FormattedNamePipe implements PipeTransform {
  transform(name: string): string {
    if (name.length > 15) {
      const parts = name.split(' ');
      if (parts.length > 1) {

        return `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`;
      }
    }
    return name;
  }
}