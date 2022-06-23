/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

 // возьми массив и распыли его

// const numbers = [1000, ...[2, 2, 2], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9], 9000];


// console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];
//Math не умеет искать в переменной. Нужно ставить распылением(... name)
// console.log(Math.min(temps)); ---- вот так не найдет
// console.log(Math.min(...temps)); ---- вот так найдет 


// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.min(...temps));
// console.log(temps);

// const a = [1, 2, 3];
// const b = [...a]; // создается независимая копия массива 'a'(примитивный тип) 
// a[0] = 5; // замена происходит только в массиве -а-

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a]; // создается копия ссылкин на массив 'a' (сложный тип)

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000; // замена происходит и в массиве -а- и в массиве -b-

// console.log('a: ', a);
// console.log('b: ', b);

/* ///////////////////////////////////////////////////////////
 * Сшиваем несколько массивов в один через concat() и spread
 *////////////////////////////////////////////////////////////

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*//////////////////////////////////////////////////////
 * Распыление объектов
 * - Object.prototype.assign() и spread
 *////////////////////////////////////////////////////

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({name: 'Mango' }, a, b);  ==> // oldshcool метод где {name: 'Mango' }- это куда надо распылить объект. - а, b - это то что распыляют


const c = {
  ...a,
  x: 10,
  ...b,
  y: 20, 
};
/// ВАЖНО!!!! одинаковыйе свойства перезаписываются
console.log(c);

////////////////////////////////////////////////////////////////
/////////

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
