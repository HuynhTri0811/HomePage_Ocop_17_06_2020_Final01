import { Constants } from '../settings/config';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateNumberFormat'
})
export class DateNumberFormatPipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        var dateConvert = new Date(value * 1000);
        return super.transform(dateConvert, Constants.DATE_FMT);
    }
}
