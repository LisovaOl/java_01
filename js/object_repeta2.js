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
// console.log(c);

////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////

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

// console.log(finalSettings);


////////////////////////////////////////////////////////////////
/////////  Деструктуризация /////////////////////////////
/////////////////////////////////////////////////////
// *
//  * Деструктуризация объекта
//  * - Значения по умолчанию
//  * - Имя переменной отличное от имени свойства
//  */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const {
//   rating,
//   tracks,
//   name,
//   trackCount: numberOfTracks = 0, //переменная + значение по умолчнию или замена
//   author = 'user', // добавит новое значение. Если его нету. или заменит значение
// } = playlist;

// console.log(numberOfTracks);

/*/////////////////////////////////////////////////
 * Глубокая деструктуризация
 */////////////////////////////////////////////////

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   avatar,
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

/*///////////////////////////////////////////
 * Деструктуризация массивов
 *///////////////////////////////////////////

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

// console.log(red, green, blue);
/////////////////////////////////////////////////////
const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};
// - entries - создает масив массивов. если надо вывести не только значение но и имя ключа
const entries = Object.entries(authors);

// console.log(entries); 

// Тогда на каждой итерации цикла получаем и ключ и значение
// for (const entry of entries) {
//   const name = entry[0]; // возьми 'нулевой` помести в переменную name
//   const rating = entry[1]; // возьми `первый` помести в переменную rating



//   console.log(name, rating);
// }
////////   Destructuration 1 - создание одной переменной //////// 

for (const entry of entries) {

  const [name, rating] = entry;
  
  // console.log(name, rating);
}

////////   Destructuration 1 - в цикле  //////// 

for (const [name, rating] of entries) { 

  // console.log(name, rating);
}








/*//////////////////////////////////////////
 * ////////////      Операция rest (сбор)   ////////////////////////
 *///////////////////////////////////////////

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// // name, tag, location  а все остальное (avatar, stats) в другой объект
// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/*/////////////////////////////////////////////////////
 * Паттерн «Обьект настроек» когда 3 и больше параметров объекта .....
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */
// 1:24 module 3//6 lesson

// const showProfileInfo = function (userProfile) {
//   const { name, tag, location, ...restProps } = userProfile;

//   // console.log(name, tag, location, avatar, followers, views, likes);
//   console.log(restProps);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);





// Change code below this line
function findMatches(args) {
  const matches = []; // Don't change this line
  let newArgs = [...args];
  for (const arg of args) {
    if (arg === arg) {
      matches.push(arg);
    }
  }
  // Change code above this line
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));