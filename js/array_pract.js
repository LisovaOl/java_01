let fruits = ['Яблоко', {name: 'John'}, 'Апельсин', 'Слива'];
// console.log(fruits); 
// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[1]);

fruits[0] = 'Apple'; // замена 'Яблоко' на 'Apple'
// console.table(fruits); 

fruits[3] = 'Apple'; // добавление в конце 'Apple'
// console.table(fruits); 

fruits[5] = 'Apple'; // добавление 'Apple', пропустив 4 индекс
// console.table(fruits); 

fruits[4] = 'Apple'; // добавление 'Apple'
// console.table(fruits); 


// console.log(fruits.length); // количество елементов

// console.log(fruits[1].name)

// console.log(fruits[fruits.length - 1]) //последний елемент массива
// console.log(fruits[fruits.length - 2]) //предпоследний елемент массива

// console.log(fruits.at(- 1)) //последний елемент массива
// console.log(fruits.at(- 2)) //предпоследний елемент массива

fruits.push('Мандарин');
// console.table(fruits);
fruits.push('Вишня');
fruits.push('Огурец');
fruits.push('Морковь');
// console.table(fruits);

fruits.pop();
// console.table(fruits);

fruits.shift(); // удаляет первый елемент
// console.table(fruits);


fruits.unshift('Молоко'); // добавляет первый елемент
// console.table(fruits);

fruits.push('Апельсин', 'Груша'); // добавить несколько елементов в конец
fruits.unshift('Ананас', 'Лимон');// добавить несколько елементов в начало
// console.table(fruits);

let fruits2 = ['Banana']
// console.table(fruits2);
fruits2.push('Milk', 'Meat', 'Ananas')
let arr = fruits2; // копия по ссылке.
// console.table(arr);

// console.log(arr === fruits2); // true

arr.push('Lemon') // новый елемент добавляется в один и тотже массив
// console.log(arr);
// console.log(fruits2);

////////////////////// FOR ... /////////////////////

for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}

console.log(fruits2.length)

for (const fruit of fruits2) {
    console.log(fruit)
}


/////////// очистка массива ...............
// Этот процесс необратим, как мы можем понять из примера:
// самый простой способ очистить массив – это arr.length = 0;.
let arr1 = [1, 2, 3, 4, 5];

arr1.length = 2; // укорачиваем до двух элементов
console.log(arr1); // [1, 2]

arr1.length = 5; // возвращаем length как было
console.log(arr1[3]); // undefined: значения не восстановились

arr1.length = 0;
console.log(arr1) // массив пуст - очищен

// 
//     Свойство length отражает длину массива или, если точнее, его последний цифровой индекс плюс один. Длина корректируется автоматически методами массива.
//     Если мы уменьшаем length вручную, массив укорачивается.

// Получение элементов:

//     Мы можем получить элемент по его индексу, например arr[0].
//     Также мы можем использовать метод at(i) для получения элементов с отрицательным индексом, для отрицательных значений i, он отступает от конца массива. В остальном он работает так же, как arr[i], если i >= 0.

// Мы можем использовать массив как двустороннюю очередь, используя следующие операции:

//     push(...items)добавляет items в конец массива.
//     pop() удаляет элемент в конце массива и возвращает его.
//     shift() удаляет элемент в начале массива и возвращает его.
//     unshift(...items) добавляет items в начало массива.

// Чтобы пройтись по элементам массива:

//     for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
//     for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
//     for (let i in arr) – никогда не используйте для массивов!

// https://learn.javascript.ru/array - Array teoriya

/////////////////  Метод arr.splice(str) ....................

//– это универсальный «швейцарский нож» для работы с массивами.Умеет всё: добавлять, удалять и заменять элементы.


// arr.splice(index[, deleteCount, elem1, ..., elemN])

// Удаление 
let arr4 = ["Я", "изучаю", "JavaScript"];

arr4.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

console.log(arr4); // осталось ["Я", "JavaScript"]

let fruits3 = ['Яблоко', 'Апельсин', 'Слива'];
console.log(fruits3);

fruits3.splice(1, 1) // удалить второй Апельсин
console.log(fruits3)

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array);
array.splice(2, 5) // начиная со втрого индекса УДАЛИ пять (5 шт) елементов 
console.log(array);

// замена 
array.splice(0, 2, 'Я', 'изучаю', 'JavaScript'); // начиная с 0 удали 2 елемента и замени их на новые

console.log(array);

// вывод массива из удаленных елементов..................

let arr6 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 2 первых элемента
let removed = arr6.splice(0, 2);

console.log(removed); // "Я", "изучаю" <-- массив из удалённых элементов

// вставка без удадения ......................
let arr7 = ["Я", "изучаю", "JavaScript"];

// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr7.splice(2, 0, "сложный", "язык");

console.log(arr7); // "Я", "изучаю", "сложный", "язык", "JavaScript"

// отрицательный индекс 
let arr8 = [1, 2, 5];
console.log(arr8); 
// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr8.splice(-1, 0, 3, 4);

console.log(arr8); // 1,2,3,4,5



//   метод arr.slice([start], [end])................
// создает новый массив

let arr9 = ["0", "1", "2", "3"];

console.log(arr9.slice(1, 3)); // 1,2 (копирует с 1 до 3 (не включает третий))

console.log(arr9.slice(-2)); // 2,3 (копирует с -2 до конца)

//  slice без аргументов: arr.slice() создаёт копию массива arr.

let arr10 = arr9.slice()
console.log(arr10); // новый независимый массив

//   concat  ................
//Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.


// console.log(arr)
const newArray = arr.concat(arr1, arr4, arr10, )
// console.table(newArray)
// newArray.concat([21, 22], 100, 101); // так не додає елементи
console.table(newArray.concat([21, 22], 100, 101)); // а так додає але не записує в змінну newArray, лише відображає на екрані.
console.log(newArray)

let newArr = newArray.concat([21, 22], 100, 101); // якщо помістити в змінну, то все додає
console.log(newArr)


// forEach ............
// не возвращает измененный массив, а просто вызывает функцию-коллбэк для каждого элемента массива. 
newArr.forEach(function (elem) {
  console.log(elem); // виводить перелік елементів
});
newArr.forEach(function (elem, index) {
  console.log(index + ' - ' + elem); // виводить перелік елементів + індекси
});

// сума елементів масиву
let arra = [1, 2, 3, 4, 5];
let sum = 0; // змінна для суми

arra.forEach(function (elem) {
  sum += elem; // переміщує результат в змінну sum
});

console.log(sum);

// Пошук в массиві ...... arr.indexOf, arr.lastIndexOf и arr.includes .................
// newArrr
// arr.indexOf(item, from) - ищет елемент по имени и возвращает его индекс

console.log(newArr.indexOf(21))// число 21 имеет индекс 11
console.log(newArr.indexOf('1'))// строка  1 имеет индекс 8
console.log(newArr.indexOf('Lemon'))// строка  Lemon имеет индекс 4

//arr.indexOf(item, from);
console.log(newArr.indexOf(21, 12))// ищи число 1 начиная с  12 индекс .. -1(не найдено)
console.log(newArr.indexOf('1', 10))// строка  1 начиная с индекса 10 ..-1 (не найдено)
console.log(newArr.indexOf('Lemon', 5))// строка  Lemon с индекса 5 ..-1 (не найдено)

// arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.

console.log(newArr.lastIndexOf(21))// число 21 имеет индекс 11
console.log(newArr.lastIndexOf('1'));// строка  1 имеет индекс 8
console.log(newArr.lastIndexOf('Lemon'));// строка  Lemon имеет индекс 4

console.log(newArr.lastIndexOf(21, 12));// ищи число 1 начиная с  12 индекс  найдено
console.log(newArr.lastIndexOf('1', 10));// строка  1 начиная с индекса 10 .. найдено
console.log(newArr.lastIndexOf('Lemon', 5));// строка  Lemon с индекса 5 .. найдено


// arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
console.log(newArr.includes(21));//  true
console.log(newArr.includes('1'));//  true
console.log(newArr.includes('Lemon'));// true

console.log(newArr.includes(21, 12));// false
console.log(newArr.includes('1', 10));// false
console.log(newArr.includes('Lemon', 5));// false

// find и findIndex ....................

//let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
  // возвращает первый попавшийся и прикращает поиск
//});

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let user = users.find(item => item.id === 1);

console.log(user.name); // Вася

// findIndex - если надо найти несколько елементом. он возвращает их в отдельный массив
let users2 = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers2 = users2.filter(item => item.id < 3);

console.log(someUsers2.length); // 2

console.log(someUsers2); // названия елементов

let users3 = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Маша' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Маша' },
  { id: 2, name: 'Петя' },
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers3 = users3.filter(item => item.id === 2);

console.log(someUsers3.length); // 3
console.log(someUsers3); // 3 объекта с `Петя` в отдельном массиве

// Проеобразование массива 
// .map - toUpperCase(), toLowerCase(), item.length, математ.опрерации и т.д.

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6 - массив преобрахзовывается в количество букв в слове

//-------------------------------------------------------------
 
const planets = ["Земля", "Марс", "Венера", "Юпітер"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// Оригінальний масив не змінився
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// -----------------------------------------------------------
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// -----------------------------------------------------------
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt); // квадратный корень
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]
console.log(roots)
// -----------------------------------------------------------
const numbers2 = [1, 4, 9];
const doubles = numbers2.map((num) => num * 2);
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]
console.log(doubles);
// ----------------------------------------------------------
// переворачивание строки
const string = '12345';
const reversed = Array.prototype.map
    .call(string, (x) => x)
    .reverse()
    .join('');

// reversed равен '54321'
// Бонус: используйте '===' для проверки того, является ли строка палиндромом
console.log(reversed);

// ---------------------------------------------------------
// при работе с массивом ставит елементы в обратном порядке
const reversedPlanets = Array.prototype.map
    .call(planets, x => x)
    .reverse(); // [ "Юпітер", "Венера", "Марс", "Земля" ]
//   .join(''); // ЮпітерВенераМарсЗемля
console.log(reversedPlanets); 


// ------ sort(fn)

// Вызов arr.sort() сортирует массив на МЕСТЕ, меняя в нём порядок элементов.
// По умолчанию элементы сортируются как строки.

var fruit = ['арбузы', 'бананы', 'Вишня'];
console.log(fruit.sort()); // ['Вишня', 'арбузы', 'бананы']

var scores = [1, 2, 10, 21];
console.log(scores.sort()); // [1, 10, 2, 21]

var things = ['слово', 'Слово', '1 Слово', '2 Слова'];
console.log(things.sort()); // ['1 Слово', '2 Слова', 'Слово', 'слово']
// В Unicode, числа находятся перед буквами в верхнем регистре,
// а те, в свою очередь, перед буквами в нижнем регистре.

// Чтобы не изменять исходный массив надо создать копию и с ней работать
const scores2 = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores2].sort();

console.log(scores2); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// --- свой порядок сортировки есть в конспекте

// -- reverse

let ar = [1, 2, 3, 4, 5];
ar.reverse();

console.log( ar ); // 5,4,3,2,1
// Он также возвращает массив arr с изменённым порядком элементов.

const scores3 = [1, 3, 5, 7, 9, 11];

const reverseAr = [...scores3].reverse();
console.log(reverseAr) // [ 11, 9, 7, 5, 3, 1 ]
console.log(scores3) // [ 1, 3, 5, 7, 9, 11 ]

// Методи split() і join() ===============

// Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter. Якщо роздільник - це порожній рядок, то створиться масив окремих символів. Роздільником може бути один або декілька символів.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// -----------------------------------------

const message = "JavaScript - це цікаво";
console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// --------------------------------------
const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"

// ------------------------------------------

let namesOf= 'Вася, Петя, Маша';

let arrOf = namesOf.split(', ');

for (let name of arrOf) {
  console.log(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}

// -----------------------------------------------

//Метод масивів join(delimiter) об'єднує елементи масиву у рядок. У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter. Тобто ця операція протилежна методу рядків split(delimiter).

const wordsOf = ["JavaScript", "це", "цікаво"];
console.log(wordsOf.join("")); // "JavaScriptцецікаво"
console.log(wordsOf.join(" ")); // "JavaScript це цікаво"
console.log(wordsOf.join("-")); // "JavaScript-це-цікаво"//

// -------------------------------------------
let arrOf1 = ['Вася', 'Петя', 'Маша'];

let str = arrOf1.join(';'); // объединить массив в строку через ;

console.log(str); // Вася;Петя;Маша


// ---- reduce/reduceRight ------------
// Методы arr.reduce и arr.reduceRight похожи на методы выше, но они немного сложнее. Они используются для вычисления какого-нибудь единого значения на основе всего массива.

// Синтаксис:

// let value = arr.reduce(function(previousValue, item, index, array) {
//   // ...
// }, [initial]);

// Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.

// Аргументы:

//      - previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
//     - item – очередной элемент массива,
//     - index – его индекс,
//     - array – сам массив.

// При вызове функции результат её вызова на предыдущем элементе массива передаётся как первый аргумент.

// ---------------------------------
// Тут мы получим сумму всех элементов массива всего одной строкой:

let arr01 = [1, 2, 3, 4, 5];

let result01 = arr01.reduce((sum, current) => sum + current, 0);

console.log(result01); // 15

// -----------------------------------------------------
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const myArrray = [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 0); // початкове значення 0
console.log(myArrray)

// -------------------------------------------------------

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
console.log(total) // == 6

// -----------------------------------------

const myArrray2 = [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10); // початкове значення 10
console.log(myArrray2);


// -------------------------------------------

// Разворачивание массива массивов

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
// flattened равен [0, 1, 2, 3, 4, 5]
console.log(flattened)

// -------------------------------------------

// Суммирование значений в массиве объектов
var initialValue = 0;
var sum1 = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, initialValue)
// sum == 6
console.log(sum1)

// --------------------------------------------
// Тоже самое, но со стрелочной функцией: 

var initialValue = 10;
var sum2 = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    initialValue
);
// sum == 6
console.log(sum2);

//
// Итого

// Шпаргалка по методам массива:

//     Для добавления/удаления элементов:
//         push (...items) – добавляет элементы в конец,
//         pop() – извлекает элемент с конца,
//         shift() – извлекает элемент с начала,
//         unshift(...items) – добавляет элементы в начало.
//         splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
//         slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
//         concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

//     Для поиска среди элементов:
//         indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
//         includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
//         find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
//         findIndex похож на find, но возвращает индекс вместо значения.

//     Для перебора элементов:
//         forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

//     Для преобразования массива:
//         map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
//         sort(func) – сортирует массив «на месте», а потом возвращает его.
//         reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
//         split/join – преобразует строку в массив и обратно.
//         reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

//     Дополнительно:
//         Array.isArray(arr) проверяет, является ли arr массивом.

// Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.

// Изученных нами методов достаточно в 99% случаев, но существуют и другие.

//     arr.some(fn)/arr.every(fn) проверяет массив.

//     Функция fn вызывается для каждого элемента массива аналогично map. Если какие-либо/все результаты вызовов являются true, то метод возвращает true, иначе false.

//     arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.

//     arr.copyWithin(target, start, end) – копирует свои элементы, начиная со start и заканчивая end, в собственную позицию target (перезаписывает существующие).

// https://learn.javascript.ru/array-methods


// TasK1 
let arrd = [5, 2, 1, -10, 8];
const filterRange = function (arr) {
    return arr.sort((a, b) => b - a); // по убыванию
} 

console.log(filterRange(arrd));

const arrw = ['HTML', 'JavaScript', 'CSS'];
console.log(arrw);

const copySorted = [...arrw].sort();
// function copySorted(arr) {
//   return arr.slice().sort();
// }

console.log(arrw);

console.log(copySorted);


