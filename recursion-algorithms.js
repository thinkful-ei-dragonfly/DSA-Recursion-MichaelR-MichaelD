'use strict';

function countSheep(sheep) {
  if (sheep === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(`${sheep}: Another sheep jump over the fence`);
  countSheep(sheep - 1);
}

// countSheep(3);

function powerCalculator(base, exp) {
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  if (exp === 0) {
    return 1;
  }
  return base * powerCalculator(base, exp - 1);
}

// console.log(powerCalculator(10, 2));

function reverseString(str) {
  if (!str.length) {
    return '';
  }
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

// console.log(reverseString('Hello'));

function triangularNumber(n) {
  if (n === 1) {
    return 1;
  }
  return n + triangularNumber(n - 1);
}

// console.log(triangularNumber(9));

function stringSplitter(str, seperator = '') {
  if (!seperator) {
    return str;
  }
  if (!str.length) {
    return '';
  }
  if (str[0] === seperator) {
    return '' + stringSplitter(str.slice(1), seperator);
  }
  return str[0] + stringSplitter(str.slice(1), seperator);
}

// console.log(stringSplitter('02/20/2020', '/'));

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));