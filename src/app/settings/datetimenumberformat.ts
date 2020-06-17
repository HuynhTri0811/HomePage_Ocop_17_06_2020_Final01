import { Constants } from '../settings/config';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeNumberFormat'
})
export class DateTimeNumberFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var dateConvert = new Date(value * 1000);
    return super.transform(dateConvert, Constants.DATE_TIME_FMT);
  }
}
