import { Pipe, PipeTransform } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    
    value = value.toLocaleLowerCase();
    let string = value.split(' ');
    
    string = string.map( string => {
      return string[0].toUpperCase() + string.substring(1);
    });

    return string.join(' ')
    
  }

}
