// ===================  Модуль 2. Занятие 3. Массивы =========================
// ====== Example 1 - Базовые операции с массивом -----------------------

//     Создайте массив genres с элементами «Jazz» и «Blues».
//     Добавьте «Рок-н-ролл» в конец.
//     Выведите в консоль первый элемент массива.
//     Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
//     Удалите первый элемент и выведите его в консоль.
//     Вставьте «Country» и «Reggy» в начало массива.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-р-рол'); //     Добавьте «Рок-н-ролл» в конец.

// console.log(genres[0]); //     Выведите в консоль первый элемент массива.

// // console.log(genres[genres.length - 1]); //Останній елемент
// console.log(genres.at(-1)); //Останній елемент

// // const deleteGenres = genres.splice(0, 1); //     Удалите первый элемент и выведите его в консоль.
// const deleteGenres = genres.shift(); //     Удалите первый элемент и выведите его в консоль.

// console.log(deleteGenres); //     Удалите первый элемент и выведите его в консоль.
// genres.unshift('Country', 'Reggy'); //     Вставьте «Country» и «Reggy» в начало массива.

// console.table(genres);

// ===============       Example 2 - Массивы и строки          ===============

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';

// const arr = values.split(' '); //розділення на окремі символи
// console.log(arr);
// const width = Number(arr[0]); // Приведення до числового
// const height = Number(arr[1]); // Приведення до числового
// console.log(width * height); // обчислення

// скорочений запис обчислень

// console.log(values.split(' ').map(Number).reduce((a, b) => a * b, 1));

// ===============       Example 3 - Перебор массива           =================

// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1}: ${fruits[i]}`)
// };

// ==============    Example 4 - Массивы и циклы     ===============

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesMod = names.split(','); //розділення на окремі символи

const phonesMod = phones.split(','); //розділення на окремі символи
for (let i = 0; i < namesMod.length; i += 1) {
  console.log(`${namesMod[i]} -- ${phonesMod[i]}`);
}

// ==============  Example 5 - Массивы и строки ================

// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const listOfWords = string.split(' ');
// listOfWords.shift();
// listOfWords.pop();
// console.log(listOfWords.join(' ').trim());
// join(' ')  - зєднує в один рядок (не масив)
// .trim() - видаляє вссі пробіли на початку та вкінці

// ============= Example 6 - Массивы и строки =================

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

const string = 'Welcome to the future';
const listOfWords = string.split('').reverse().join('');
// console.log(listOfWords);

// ============== Example 7 - Сортировка массива с циклом =================

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs.sort()); // Сортує лише по першим літерам
// console.log(langs.sort((a, b) => a > b)); // Сортує більш коректно

// const numbers = [10, 2, 8, 11, 1, 20, 3, 30, 4, 40]
// console.log(numbers.sort()); // Сортує лише по першим літерам
// console.log(numbers.sort((a, b) => a > b)); // Сортує більш коректно

// ============== Example 8 - Поиск элемента ======================

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// // console.log(min); // 1
// console.log('min: ', min);


//++++++++ Багатомірні массиви ++++++

// Розкажіть про багатомірні масиви. Як з ними працювати? Додавати,  видаляти, замінювати елементи.Чи можливо копіювати чи видаляти його частини?
// Наприклад масив із числами [ [1, 2, 3], [44, 55, 66], [70,80,90] ]. Видалити число 55, Видалити частинку [70,80,90]. Зробити заміну одного числа (наприклад [3]) та частинки [1,2,3]. Додати нову частинку із трьох чисел або більше (якщо це можливо).
// Як це робити з багатомірними масива зі стрінгами?
const { log } = console;
const listExample = [[1, 2, 3], [44, 55, 66], [70, 80, 90]];
// listExample[1].splice(1, 1)  // Видалити число 55
 
// listExample.splice(2, 1);     // Видалити частинку [70,80,90]
// listExample.pop();  // Видалити частинку , вона остання [70,80,90]


// listExample[0][2] = 9 //Зробити заміну одного числа (наприклад [3]) 
listExample[0] = [9, 8, 7]; //та частинки [1,2,3]
listExample.push([0, 0, 0, 0, 0]);// Додати нову частинку із трьох чисел або більше

log(listExample);
