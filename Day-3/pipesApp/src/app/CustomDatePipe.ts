import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {

  constructor() {
    super('en-US');  // Locale parameter required for DatePipe
  }

  override transform(value: any, format: string = 'MMM d, y'): any {
    return super.transform(value, format);
  }
}
