// /*
//  * Функция обратного вызова (callback)
//  * - Функция может принимать другие функции как параметры
//  * - Функция которая передаётся другой функции как аргумент называетс
//  *   «функцией обратного (отложенного) вызова» (callback-функция)
//  * - Функция которая принимает другую функцию как параметр
//  *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
//  */

// const fnA = function (message, callback) { // функция высшего порядка
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {  // функция callback (обратногоб отложеного вызова)
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('Hello', fnB);
// console.log(fnA('qweqwe', fnB));

// /*
//  * функция doMath(a, b, callback)
//  */

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
  
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 3, add);
// doMath(10, 8, sub);

// // инлайн функция. можно передавать много функция через запятую
// doMath(2, 3, function (x, y) { // литерал функциии. Когда функция анонимная ее можно вставить в параметр. а не присваивать в переменную

//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });

// /*
//  * Отложенный вызов: регистрация событий
//  */

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//   console.log('Клик по кнопке ' + Date.now());
// };

// // buttonRef.addEventListener('click', handleBtnClick);

// /*
//  * Отложенный вызов: геолокация
//  */

// const onGetPositionSuccess = function (position) {
//   console.log('Это вызов onGetPositionSuccess');
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log('Это вызов onGetPositionError');
//   console.log(error);
// };

// // window.navigator.geolocation.getCurrentPosition(
// //     onGetPositionSuccess,
// //     onGetPositionError,
// // );

// /*
//  * Отложенный вызов: интервалы
//  */

// const callback = function () {
//   console.log('Через 2 секунды внутри колбека в таймауте');
// };

// // console.log('В коде перед таймаутом');
// // setTimeout(callback, 2000);
// // console.log('В коде после таймаута');

// /*
//  * Отложенный вызов: http-запрос
//  * - API URL: https://pokeapi.co/api/v2/pokemon
//  */

// const onRequestSuccess = function (response) {
//   console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
//   console.log(response);
// };

// // fetch('https://pokeapi.co/api/v2/pokemon')
// //     .then(res => res.json())
// //     .then(onRequestSuccess);

// /*
//  * Фильтр
//  */

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// // 1. надо передать функцию
// // 2. функция получает элемент массива
// // 3. если элемент массива удовлетворяет условию то функция вернет true
// // 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);


// const filter1 = function (array, test) {
//     const filteredArray = [];

//     for (const item of array) {
//         // console.log(item);
//         const passed = test(item);

//         if (passed) {
//             filteredArray.push(item);
//         }
//     }
//             return filteredArray;

// }

// const callback10 = function (value) {
//    return value <= 10;
    
// }

// const callback11 = function (value) {
//     return value >= 10 && value <= 40;
    
// };
// const callback12 = function (value) {
//   return value >= 41;
// };

// const a = filter1([1, 5, 2, 7, 10, 54, 87, 32], callback10);
// console.log(a);

// const b = filter1([1, 5, 2, 7, 10, 54, 87, 32], callback11);
// console.log(b);

// const c = filter1([1, 5, 2, 7, 10, 54, 87, 32], callback12);
// console.log(c);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const newFilter = function (array, test) {
    const newFilterArray = [];
    for (const item of array) {
        // console.log(item);
        const passed = test(item);
        if (passed) {
            newFilterArray.push(item);
        }
    }
    return newFilterArray;
}
const getFruitsName = function (fruit) {
    return (fruit.name === 'apples');
};
const getFruitsQuant = function (fruit) {
  return fruit.quantity >=120;
};
const getFruitsFresh = function (fruit) {
  return fruit.isFresh;
};

const fName = newFilter(fruits, getFruitsName);
console.log(fName);

const fQuant = newFilter(fruits, getFruitsQuant);
console.log(fQuant);

const fFresh = newFilter(fruits, getFruitsFresh);
console.log(fFresh);
