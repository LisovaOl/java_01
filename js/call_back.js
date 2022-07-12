// 
const each = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], (value) => value * 2),
);
console.log(
    each([64, 49, 36, 25, 16], (value) => value - 10),

);
console.log(
  each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)),
);

// Example 7 - Метод forEach

// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

function logItems(items) {
    console.log(items);
    items.forEach((items, index) => {
        console.log(`${index + 1} - ${items}`);

    });
//   for (let i = 0; i < items.length; i += 1) {
//   }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 8 - Метод forEach

// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
    const phoneList = phones.split(',');
    nameList.forEach( (name, indexOfName) => {
            console.log(`${name}: ${phoneList[indexOfName]}`);

    })
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

// Example 9 - Метод forEach

// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

function calсulateAverage(...args) {
    let total = 0;
    args.forEach(function (element) {
        total += element
    })
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// arra.forEach(function (elem) {
//   sum += elem; // переміщує результат в змінну sum
// });
