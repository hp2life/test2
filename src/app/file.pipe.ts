import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'file'
})
export class FilePipe implements PipeTransform {

  transform(size: number, extension: string = 'MB') {
    return (size / (1024 * 1024)).toFixed(3) + extension;
  }

}
