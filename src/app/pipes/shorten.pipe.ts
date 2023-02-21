import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
  // transform this value into something
  transform(value: any) {
    return value.substr(0, 4);
  }
}
