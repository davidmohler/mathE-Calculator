import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathE Calculator';
  expression = '';
  originalResult = '';
  reversedResult = '';

  evaluate() {
    try {
      // Evaluate arithmetic expression safely-ish
      // eslint-disable-next-line no-new-func
      const value = Function('"use strict"; return (' + this.expression + ')')();
      if (typeof value === 'number' && isFinite(value)) {
        this.originalResult = this.formatNumber(value);
        this.reversedResult = this.reverseNumberString(value);
      } else {
        this.originalResult = String(value);
        this.reversedResult = this.reverseString(String(value));
      }
    } catch (e) {
      this.originalResult = 'Error';
      this.reversedResult = 'Error';
    }
  }

  formatNumber(n: number) {
    const negative = n < 0;
    const s = Math.abs(n).toString();
    const [intPart, fracPart] = s.split('.');
    const intFormatted = Number(intPart).toLocaleString('en-US');
    return (negative ? '-' : '') + (fracPart ? intFormatted + '.' + fracPart : intFormatted);
  }

  reverseNumberString(n: number) {
    const negative = n < 0;
    const s = Math.abs(n).toString();
    const [intPart, fracPart] = s.split('.');
    const revInt = intPart.split('').reverse().join('');
    const revIntFormatted = Number(revInt).toLocaleString('en-US');
    let out = revIntFormatted;
    if (fracPart !== undefined) {
      const revFrac = fracPart.split('').reverse().join('');
      out += '.' + revFrac;
    }
    return (negative ? '-' : '') + out;
  }

  reverseString(s: string) {
    return s.split('').reverse().join('');
  }
}
