// +++++++++++++  Tasks ++++++++++++++

// = = = = = = Task 1 = = = = = =

// Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];

//     // 2. create a variable 'total' with 0 BEFORE 'for'
// let total = 0;

// 1. Перебрать елементы цикла
// for (let i = 0; i < cart.length; i += 1){
//     //каждый елемент приплюсовать к total
//     total += cart[i];
// }

// 3 .Display
// console.log('Total:', total)

//======== Кращий варіант ==========    for...of

// for (const value of cart) {
//     total += value;
// }
// console.log('Total:', total);

// ==== додати до кожного елемента 10 %
// for (let i = 0; i < cart.length; i += 1){
// //     //каждый елемент увеличить на 10 % и округлить
//     cart[i] = Math.round(1.1 * cart[i]);

// }
// console.log('Цена выросла на 10%', cart);

// = = = = = = Task 1 = = = = = =

// Посчитать сумму всех четных чисел

const numbers = [1, 4, 5, 10, 9, 3, 2, 6];

// 1. total
let total = 0;
// 2. перебрать массив
// for (let i = 0; i < numbers.length; i += 1){
//     const number = numbers[i]; //создание локальной переменной, чтобы легче читать код
//     console.log(number);

// 3. остаток от деления
//   if (number % 2 === 0) {
//     console.log('Четное!!!');
//   }
//   // 4. если четное приплюсовать к тотал
//     total += number;

// }
// console.log('Total: ', total);

//++++++++ Varian 2 simple +++++++
// for (const number of numbers) {
//       console.log(number);

//   if (number % 2 === 0) {
//     console.log('Четное!!!');
//   }
//   // 4. если четное приплюсовать к тотал
//   total += number;
// }
// console.log('Total: ', total);

// +++++++++ Variant от обратного с использованием continue ++++++++++++

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log('эту операцию надо пропустить', number);
    continue;
  }
  console.log(`${number} - четное!`);
  total += number;
}
console.log('Total: ', total);
