import { Pipe, PipeTransform } from '@angular/core';

// when pure is false data is calculated whenever it (data) changes
// when pure is true (which is the default) data is recalculated each time the pipe is triggered
// THERE IS A CASE FOR EACH ONE
@Pipe({ name: 'shorten', pure: false })
export class ShortenPipe implements PipeTransform {
  // transform this value into something
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, 7);
    }
    return value;
  }
}
