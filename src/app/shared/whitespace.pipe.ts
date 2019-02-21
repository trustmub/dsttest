import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'removeWhiteSpace'
})
export class RemoveWhiteSpace implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace(' ', '');
  }

}
