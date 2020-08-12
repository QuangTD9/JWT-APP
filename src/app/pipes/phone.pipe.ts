import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    if (phone.indexOf('x') !== -1) {
      phone = phone.substring(0, phone.indexOf('x')).trim();
    }
    const phoneStr = phone.replace(/\D/g, '');
    const match = phoneStr.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      const intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }

    return null;
  }

}
