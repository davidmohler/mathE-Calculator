// Simple mathE reversed-digit calculator
function formatNumber(n) {
  const negative = n < 0;
  const s = Math.abs(n).toString();
  const [intPart, fracPart] = s.split('.');
  const intFormatted = Number(intPart).toLocaleString('en-US');
  return (negative ? '-' : '') + (fracPart ? intFormatted + '.' + fracPart : intFormatted);
}

function reverseNumberString(n) {
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

function reverseString(s) {
  return s.split('').reverse().join('');
}

function evaluateExpression(expr) {
  try {
    // Evaluate basic arithmetic expressions
    // eslint-disable-next-line no-new-func
    const value = Function('"use strict"; return (' + expr + ')')();
    return value;
  } catch (e) {
    return null;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('expr');
  const original = document.getElementById('original');
  const reversed = document.getElementById('reversed');
  const evalBtn = document.getElementById('evalBtn');
  const clearBtn = document.getElementById('clearBtn');

  evalBtn.addEventListener('click', () => {
    const expr = input.value.trim();
    if (!expr) return;
    const val = evaluateExpression(expr);
    if (val === null || typeof val === 'undefined' || Number.isNaN(val)) {
      original.textContent = 'Error';
      reversed.textContent = 'Error';
      return;
    }

    if (typeof val === 'number' && isFinite(val)) {
      original.textContent = formatNumber(val);
      reversed.textContent = reverseNumberString(val);
    } else {
      original.textContent = String(val);
      reversed.textContent = reverseString(String(val));
    }
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    original.textContent = '—';
    reversed.textContent = '—';
    input.focus();
  });
});
