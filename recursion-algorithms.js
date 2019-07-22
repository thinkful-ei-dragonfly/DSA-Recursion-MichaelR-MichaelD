/* eslint-disable no-console */
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
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(6));


function factorial(n) {
  if (n === 0) return 1;
  return (factorial(n-1) * n );
}

// console.log(factorial(10));


// Question 8 
// Question 9 == //maze[row][column] = ' ';

let mySmallMaze = [
  [' ', ' ', ' '],  
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function findWayOut(maze, position = 0, row, column, direction = 'S', path) {
  if ( column < 0 || row < 0 ) return; 
  if ( column >= maze[0].length || row >= maze.length ) return;

  path[position] = direction;
  position++;

  if ( maze[row][column] === 'e') {
    console.log( 'found path :', path);
    return;
  }

  if (maze[row][column] === ' ') {
    maze[row][column] = 'x';
    findWayOut(maze, position, row, column -1, 'L', path);
    findWayOut(maze, position, row -1, column, 'U', path);
    findWayOut(maze, position, row, column +1, 'R', path);
    findWayOut(maze, position, row +1, column, 'D', path);
    maze[row][column] = ' ';
  }
  position--;
}

// findWayOut(maze, 0 , 0 , 0 , 'S' , [] );

function anagrams(pre, str) {
  if (str.length <= 1) {
    console.log(`Anagram is ${pre}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let current = str.substring(i, i + 1);
      let prev = str.substring(0, i);
      let after = str.substring(i + 1);
      anagrams(pre + current, prev + after);
    }
  }
}

// anagrams(' ', 'east');

function organizationChart(data, ind = 0) {
  const indent = ' '.repeat(ind);
  if (Array.isArray(data)) {
    data.map(name => {
      console.log(`${indent}${name}`);
    });
  } else {
    for (let key in data) {
      console.log(`${indent}${key}`);
      organizationChart(data[key], ind + 4);
    }
  }
}

const orgObj = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: ['Steve', 'Kyle', 'Andra'],
      Zhao: ['Richie', 'Sofia', 'Jen']
    },
    Schrage: {
      VanDyck: ['Sabrina', 'Michelle', 'Josh'],
      Swain: ['Blanch', 'Tom', 'Joe']
    },
    Sandberg: {
      Goler: ['Eddie', 'Julie', 'Annie'],
      Hernandez: ['Rowi', 'Inga', 'Morgan'],
      Moissinac: ['Amy', 'Chuck', 'Vinni'],
      Kelley: ['Eric', 'Ana', 'Wes']
    }
  }
};

// organizationChart(orgObj);

function binaryRepresentation(n) {
  if (n <= 0) {
    return '';
  }
  let binary = n % 2;
  return binaryRepresentation(Math.floor(n/2)) + binary;
}

console.log(binaryRepresentation(37));