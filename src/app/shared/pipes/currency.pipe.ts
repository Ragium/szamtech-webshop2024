import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu'

registerLocaleData(localeHu);

@Pipe({
  name: 'customcurrency'
})
export class CustomCurrencyPipe extends CurrencyPipe implements PipeTransform {

  override transform(value: any, currencyCode: string = 'HUF', display: string = 'symbol-narrow', digitsInfo: string = '1.0-0', locale: string ='hu-HU'): any {
    const formattedValue = super.transform(value, currencyCode, display, digitsInfo, locale);

    // Check if the formatted value has a leading zero and the value is less than 1000
    if (formattedValue?.startsWith('0 ') && value < 1000) {
      // Remove the leading zero and add a space before the currency symbol
      return ` ${formattedValue.substring(1)}`;
    }

    return formattedValue;
  }

}
