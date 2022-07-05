// перебор массива
const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for (let i = 0; i < arr.length; i += 1){
    console.log(arr[i])
}

let arr1 = [1, 2, 'a', 'b', null, true, false];
for (let i = 0; i < arr1.length; i += 1){
    console.log(arr1[i])
}
const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
for (let i = 0; i < planets.length; i += 1){
    console.log(planets[i])
}
console.log('\\');
console.log('\\ \\ \\\\ \\ \'"');
console.log('\n'); //устая строка в консоли
console.log('Dunsen');
console.log('Gregor Clegane\nDunsen\nPolliver\nChiswyck'); // перенос строки

console.log('Polliver');
console.log('Gregor Clegane');
console.log();
console.log('Chiswyck');
console.log('\n');
console.log('Dunsen');

console.log('Joffrey loves using \\n');

console.log('- Did Joffrey agree? \n- He did. He also said "I love using \\n".');

console.log(String.fromCharCode(63)); // вывод символа по кодировке


let info = "We couldn't verify your mother's maiden name.";
let intro = 'Here is important information about your account security.';

let firstName = 'Joffrey';
let greeting = 'Hello';

// BEGIN (write your solution here)
console.log(greeting + ' ' + firstName);
console.log();
console.log();

const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';

// BEGIN (write your solution here)
console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`);
// END


const text = 'Never forget what you are, for surely the world will not';

// BEGIN (write your solution here)
console.log(`First: ${text[0]}`);
console.log(`Last: ${text[text.length - 1]}`);
// END

const name = 'Tirion';
console.log(name.length.toString());

const name2 = 'Tirion';
const len = name2.length;
console.log(len.toString());


const text2 = 'When \t\n you play a \t\n game of thrones you win or you die.';

// BEGIN (write your solution here)
console.log(text2.slice(5,16).trim())
// END
const saveEmail = () => {
  // В реальности email приходит из формы
  const email = '  SuppORT@hexlet.IO';
  // обрезаем пробельные символы
  const trimmedEmail = email.trim();
  const preparedEmail = trimmedEmail.toLowerCase();
  console.log(preparedEmail);
  // здесь будет запись в базу данных
    return preparedEmail;
};
saveEmail();

const greetingWithReturnAndPrinting = () => {
  console.log('Я появлюсь в консоли');
  return 'Hello, Hexlet!';
};

// И напечатает текст на экран и вернет значение
const message = greetingWithReturnAndPrinting();




const getLastChar = text => {
  // Вычисляем индекс последнего символа как длина строки - 1
  return text[text.length - 1];
};
console.log(getLastChar('hello'));


const truncate = (text, length) => {
  // BEGIN (write your solution here)
//   const modText = text.slice(0, length);
//     const modTextIn = modText + '...';
//   return modTextIn;
  // END
 //or next 
    const result = `${text.slice(0, length)}...`;
    return result;
};

console.log(truncate('Вычисляем индекс последнего', 10));



// `Задание

// Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки (состоящий из 16 цифр) в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

const getHiddenCard = (number, repeat = 4) => {
    const newNumber = number.slice(-4);
    const newRepeat = '*'.repeat(repeat);

    return `${newRepeat}${newNumber}`;

}
// // Кредитка передается внутрь как строка
console.log(getHiddenCard('1234567812345678', 2));  // "**5678"

console.log(getHiddenCard('1234567812345678', 3));
console.log(getHiddenCard('1234567812345678'));

console.log(getHiddenCard('2034399002121100', 1));

// getHiddenCard('1234567812345678', 3); // "***5678"
// getHiddenCard('1234567812345678');    // "****5678"
// getHiddenCard('2034399002121100', 1); // "*1100"

// Для выполнения задания вам понадобится метод строки repeat(), который повторяет строку указанное количество раз

// '+'.repeat(5); // "+++++"
// 'o'.repeat(3); // "ooo"

const capitalize = (text) => {
    return `${text[0].toUpperCase()}${text.slice(1)}`;
};
console.log(capitalize('welkom'));
console.log(capitalize('понадобится'));
console.log(capitalize('Pадания'));


const isPensioner = (age) => age >= 60;
// END

export default isPensioner;
console.log(isPensioner(70));
console.log(isPensioner(45));


const isMister = str => str === 'Mister';
console.log(isMister('Mister'));
console.log(isMister('Mier'));

//Напишем функцию проверки чётности:

const isEven = (number) => number % 2 === 0;

console.log(isEven(10));
console.log(isEven(3));


// Другой пример: напишем функцию, которая принимает строку и проверяет, заглавная ли первая буква.

// Алгоритм:

//     Получим и запишем в переменную первый символ из строки-параметра
//     Сравним, равен ли символ своей большой (заглавной) версии
//     Вернём результат

const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0];
  return firstLetter.toUpperCase() === firstLetter;
};

console.log(isFirstLetterInUpperCase('marmont')); // false
console.log(isFirstLetterInUpperCase('Robb'));    // true


const isInternationalPhone = phoneNumber => {
  const firstNumOfNumber = phoneNumber[0];
  return firstNumOfNumber === '+';
};
 // or 
const isInternationalPhone2 = phone => phone[0] === '+';
 
console.log(isInternationalPhone('+363546582847')); // true
console.log(isInternationalPhone('34827532654367'));    // false

console.log(isInternationalPhone2('+363546582847')); // true
console.log(isInternationalPhone2('34827532654367'));    // false

const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && length < 20;
};

console.log(isStrongPassword('qwerty')); // false
console.log(isStrongPassword('qwerty1234')); // true
console.log(isStrongPassword('zxcvbnmasdfghjkqwertyui')); // false



const isLeapYear = year => {
  let result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return result;
}; 
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2022)); // false
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(2020)); // true


const getLetter = (name, index) => name[index - 1] || '';    // буква по порядковому номеру или пустая строка
console.log(getLetter('Получим', 5)); // true


const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  if (lastChar === '?') {
    return 'question';
  }

  return 'general';
};

console.log(getTypeOfSentence('Hodor'));  // general
console.log(getTypeOfSentence('Hodor?')); // question


const getTypeOfSentence2 = sentence => {
  // Объявляем переменную, в которую запишем тип предложения
  let sentenceType;
  // Предикат, проверяющий окончание текста
  // Если он оканчивается на символ '?', то вернётся true,
  // иначе false
  if (sentence.endsWith('?')) {
    // Если условие выше сработало,
    // то это вопросительное предложение.
    // Присваиваем sentenceType соответствующее значение.
    sentenceType = 'Question';
  } else {
    // Во всех остальных случаях предложение — обычное
    sentenceType = 'General';
  }

  // С помощью интерполяции формируем строку
  return `${sentenceType} sentence`;
};
console.log(getTypeOfSentence2('Объявляем переменную'));
console.log(getTypeOfSentence2('Объявляем переменную?'));


const normalizeUrl = (address) => {
  let addressHttps;
  if (address.startsWith('https://')) {
    addressHttps = address;
  } else {
    addressHttps = `https://${address}`;
  }
  return addressHttps;
};

console.log(normalizeUrl('Объявляем переменную?'));
console.log(normalizeUrl('https://Объявляем переменную?'));


const getTypeOfSentence3 = sentence => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;

  if (lastChar === '?') {
    sentenceType = 'question';
  } else if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }

  return `Sentence "${sentence}"is ${sentenceType}`;
};
console.log(getTypeOfSentence3('Who?')); // 'Sentence is question'
console.log(getTypeOfSentence3('No'));   // 'Sentence is normal'
console.log(getTypeOfSentence3('No!'));  // 'Sentence is exclamation'

const whoIsThisHouseToStarks = surname => {
  let surnameNew;
  if (surname === 'Karstark' || surname === 'Tally') {
    return `${surname} 'friend'`;
  } else if (surname === 'Lannister' || surname === 'Frey') {
    return `${surname} 'enemy'`;
  } else return `${surname} 'neutral'`;
};
console.log(whoIsThisHouseToStarks('Karstark')); // 'Sentence is question'
console.log(whoIsThisHouseToStarks('Tally')); // 'Sentence is question'
console.log(whoIsThisHouseToStarks('Lannister')); // 'Sentence is question'
console.log(whoIsThisHouseToStarks('Frey')); // 'Sentence is question'
console.log(whoIsThisHouseToStarks('Olena')); // 'Sentence is question'



// const printNumbers = lastNumber => {
  // i сокращение от index (порядковый номер)
  // используется по общему соглашению во множестве языков
  // как счетчик цикла
//   let i = 1;

//   while (i <= lastNumber) {
//     console.log(i);
//     i = i + 1;
//   }
//   console.log('finished!');
// // };

// printNumbers(3);
// // Инициализируется i
// let i = 1;

// // Предикат возвращает true, поэтому выполняется тело цикла
// while (1 <= 3)
//     // console.log(1);
//     // i = 1 + 1;

//     // Закончилось тело цикла, поэтому происходит возврат в начало
//     while (2 <= 3)
//         // console.log(2);
        // i = 2 + 1;

//         // Закончилось тело цикла, поэтому происходит возврат в начало
//         while (3 <= 3)
//             break;
// // console.log(3);
// i = 3 + 1;

// Предикат возвращает false, поэтому выполнение переходит за цикл
// while (4 <= 3)

// console.log('finished!');
// На этом этапе i равен 4, но он нам уже не нужен
// функция завершается

// 


const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  let i = 1;
    while (i <= initialNumber) {
            console.log(initialNumber);
        initialNumber = initialNumber - 1;

  }
    console.log('finished!');

  // END
};

printNumbers(4);


const sumNumbersFromRange = (start, finish) => {
  // Технически можно менять start
  // Но входные аргументы нужно оставлять в исходном значении
  // Это сделает код проще для анализа
  let i = start;
  let sum = 0; // Инициализация суммы

  while (i <= finish) {
    // Двигаемся до конца диапазона
    sum = sum + i; // Считаем сумму для каждого числа
    i = i + 1; // Переходим к следующему числу в диапазоне
  }

  // Возвращаем получившийся результат
  return sum;
};

console.log(sumNumbersFromRange(3, 10));


const multiplyNumbersFromRange = (start, end) => {
  let i = start;
  let multiply = 1;
  while (i <= end) {
    multiply = i * start;
    i = i + 1;
  }
  return multiply;
}; 
console.log(multiplyNumbersFromRange(3, 10));
console.log(multiplyNumbersFromRange(3, 3));
console.log(multiplyNumbersFromRange(1, 1));
console.log(multiplyNumbersFromRange(2, 2));


const printNameBySymbol = (name2) => {
  let i = 0;
  // Такая проверка будет выполняться до конца строки
  // включая последний символ. Его индекс `length - 1`.
  while (i < name2.length) {
    // Обращаемся к символу по индексу
    console.log(name2[i]);
    i = i + 1;
  }
};

// const name2 = 'Arya';
// console.log(printNameBySymbol('Arya'));
// console.log(printNameBySymbol('индексу'));

// => 'A'
// => 'r'
// => 'y'
// => 'a'

const printReversedWordBySymbol = (text) => {
  let i = 1;
  while (i <= text.length) {
    console.log(text[text.length - i]);
    i = i + 1;
  }
    return
};

console.log(printReversedWordBySymbol('multiply'));

const countChars = (str, char) => {
  let i = 0;
    let count = 0;
    // str = str.toLowerCase();
    // char = char.toLowerCase();
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      // Считаем только подходящие символы
      count = count + 1;
    }
    // Счетчик увеличивается в любом случае
    i = i + 1;
  }

  return count;
};
console.log(countChars('Считаем только подходящие символы', 'о'));
console.log(countChars('Считаем тОлько пОдходящие символы', 'о'));
console.log(countChars('СчиТаем только подходящие символы', 'Т'));


const reverse = (str) => {
  let i = 0;
  // Нейтральный элемент для строк это пустая строка
  let result = '';
  while (i < str.length) {
    // Соединяем в обратном порядке
    result = `${str[i]}${result}`;
    // То же самое через конкатенацию
    // result = str[i] + result;
    i = i + 1;
  }

  return result;
};

console.log(reverse('Bran')); // 'narB'
console.log(reverse('Соединяем')); // 
console.log(reverse('конкатенацию')); // 

const reverseBack = str => {
  let i = str.length - 1;
  let result = '';
  while (i >= 0) {
    result = `${result}${str[i]}`;
    i = i - 1;
  }

  return result;
};
console.log(reverseBack('Bran')); // 'narB'
console.log(reverseBack('Соединяем')); // 
console.log(reverseBack('конкатенацию')); // 




const filterString = (text, char) => {
  let i = 0;
  let result = '';

  while (i < text.length) {
    if (text[i].toLowerCase() !== char.toLowerCase()) {
      result = result + text[i];
    }
    i = i + 1;
  }

  return result;
};
console.log(filterString('Считаем только подходящие символы', 'и')); 
console.log(filterString('Счетчик увЕличивается в любом случае', 'Е'));  
console.log(filterString('Счетчик увеЛичивается в любом случае', 'л')); 



const makeItFunny = (text, num) => {
  let i = 0;
  let result = '';
  let counter = num;
  while (i < text.length) {
    if (counter - 1 !== i) {
      result = `${result}${text[i]}`;
      i++;
    } else {
      result = `${result}${text[i].toUpperCase()}`;
      counter = counter + num;
      i++;
    }
  }
  return result;
};
console.log(makeItFunny('Считаем только подходящие символы', 3));
console.log(makeItFunny('Счетчик увличивается в любом случае', 5));  


const hasChar = (string, letter) => {
  if (string.includes(letter)) {
    return true;
  }
  return false;
};
console.log(hasChar('Считаем', 'а'));
console.log(hasChar('Считаем', 'А'));
console.log(hasChar('Считаем', 'а'));

const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if ((str[i] % 2) === 0) {
      result = `${str[i]}${result}`;
    }
    return result;
  }

  return result;
};
// console.log(encrypt('Считаем'));


const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, makePizza, onOrderError) {
        if (this.pizzas.includes(pizzaName)) {
            return makePizza(pizzaName);
        } 
        const error = `There is no pizza with a name ${pizzaName} in the assortment.`
        return onOrderError(error);
    }
    
    };
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));


function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

   orderedItems.forEach(function (orderedItems) {
       totalPrice += orderedItems;
   }); 
//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

  // Change code above this line
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));


function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line

    numbers.forEach(function (elem) {
        console.log(elem);
        if (elem > value) {
            filteredNumbers.push(elem);
        }
    });
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

  // Change code above this line
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));






function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
    firstArray.forEach(function (elem) {
      console.log(elem);
          if (secondArray.includes(elem)) {
            commonElements.push(elem);
          }
    })
//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));