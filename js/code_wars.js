

function squareSum(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number ** 2;
  }
  return total;
}

console.log(squareSum([1, 2, 2]));
console.log(squareSum([3, 3, 3]));

function findNeedle(haystack) {
  for (const el of haystack) {
    if (el === 'needle') {
      return `"found the needle at position ${haystack.indexOf(el)}" `;
    }
  }
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

const rps = (p1, p2) => {};

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  let positive = [];
  let negative = 0;
  for (const el of input) {
    if (el > 0) {
      positive.push(el);
    }
    if (el < 0) {
      negative += el;
    }
  }
  return [positive.length, negative];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 0]));

function invert(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      array[i] = array[i] * 1;
    }
    array[i] = array[i] * -1;
  }
  return array;
}
console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5, 0]));
console.log(invert([]));
console.log(invert([0]));

function DNAtoRNA(dna) {
  var newstr = dna.replace(/T/gi, 'U');
  return newstr;
}
console.log(DNAtoRNA('TEFN'));
console.log(DNAtoRNA('UTTT'));

function removeExclamationMarks(s) {
  var newstr = s.replace(/!/g, '');
  return newstr;
}

console.log(removeExclamationMarks('Tdfdfh!'));
console.log(removeExclamationMarks('!ooooo!'));

function repeatStr(n, s) {
    
    return s.repeat(n);
}
console.log(repeatStr(3, '*'));
console.log(repeatStr(5, '#'));
console.log(repeatStr(2, 'ha '));


const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w;
      
    } return (l + w) * 2;
};
console.log(areaOrPerimeter(4, 4)); //16
console.log(areaOrPerimeter(6, 10)); //32
console.log(areaOrPerimeter(3, 4)); //
console.log(areaOrPerimeter(3, 3)); //9

var countSheep = function (num) {
let result = '';
for (let i = 1; i <= num; i++) {
  result += `${i} sheep...`;
}
    return result;
}


console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
console.log(countSheep(0));

function betterThanAverage(classPoints, yourPoints) {

    const sum = classPoints.reduce((acc, number) => acc + number, 0);
    const average =  Math.round(sum / classPoints.length);
    if (average < yourPoints) {
        return true;
    } return false;
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));


function doubleChar(str) {
return str.replace(/./g, c => c + c);
    
}
console.log(doubleChar('abcd'));
console.log(doubleChar('Adidas'));
console.log(doubleChar('1337'));
console.log(doubleChar('illuminati'));
console.log(doubleChar('123456'));
console.log(doubleChar('%^&*('));

// --------------------------------------------------------------
const min = list => Math.min(...list);
const max = list => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([5]));

// -------------------------------------------------------------

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const carMpg = mpg * fuelLeft;
  if (carMpg >= distanceToPump) {
    return true;
  }
  return false;
};

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump; 

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

//--------------------------------------------
function updateLight(current, green, yellow, red) {
  if (current == 'green') {
    return 'yellow';
  } else if (current == 'yellow') {
    return 'red';
  } else {
    return 'green';
  }
}
// return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

console.log(updateLight('green'));
console.log(updateLight('yellow'));
console.log(updateLight('red'));

//--------------------------------------------------

function digitize(n) {
    // return String(n).split('').reverse().map(Number);
    return Array.from(String(n), Number).reverse();
}
console.log(digitize(35231));
console.log(digitize(0));
console.log(digitize(987654321));

//-------------------------------------------------
function litres(time) {

  return Math.floor(time * 0.5);
}
console.log(litres(2)) //, 1, 'should return 1 litre');
console.log(litres(1.4)) //, 0, 'should return 0 litres');
console.log(litres(12.3)) //, 6, 'should return 6 litres');
console.log(litres(0.82)) //, 0, 'should return 0 litres');
console.log(litres(11.8)) //, 5, 'should return 5 litres');
console.log(litres(1787)) //, 893, 'should return 893 litres');
console.log(litres(0)) //, 0, 'should return 0 litres');

//------------------------------------------------------------

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => [...word].reverse().join(''))
    .join(' ');
}
console.log(
  reverseWords('The quick brown fox jumps over the lazy dog')) //, 'ehT kciuq nworb xof spmuj revo eht yzal .god' );
console.log(reverseWords('apple')) //, 'elppa');
console.log(reverseWords('a b c d')) //, 'a b c d');
console.log(reverseWords('double  spaced  words')) //, 'elbuod  decaps  sdrow');

// ------------------------------------------------------------
function disemvowel(str) {
    const vowels = ['a', 'e', 'o' ]
    if (str.includes(vowels[i])) {
        return str -= vowels;
    }
}
console.log(disemvowel("This website is for losers LOL!")) //, "Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) //, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?")) //, "Wht r y,  cmmnst?")