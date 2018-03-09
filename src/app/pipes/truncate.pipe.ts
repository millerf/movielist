import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

/**
 * Truncate pip for description
 *
 * retrieved from https://stackoverflow.com/questions/44669340/how-to-truncate-text-in-angular2
 *
 * It has been tweaked as there was a small bug
 *
 */
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (value === null) {
      return null;
    }
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }

}
