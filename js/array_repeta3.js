/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// video массивы 1:35:00

// const numbers = [51, 18, 13, 24, 7, 85, 1, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }


// console.log('smallestNumber: ', smallestNumber);


// max number\

// const numbers = [51, 18, 13, 24, 7, 85, 1, 190];
// let maxNumber = numbers[0];

// for (const number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// }

// console.log('MaxNumber: ', maxNumber);



//+++++++++++++++++++++++++++++++++++++++++

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// const string = friends.join(',');
// console.log(friends);
// console.log(string);

// Должно получиться 'Mango,Poly,Kiwi,Ajax'


//+++++++++++++++++++++++++++++++++++++++++


/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// const letters = string.split(''); // разбивает строку посимвольно
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

  // if (letter === letter.toLowerCase()) {
  //   console.log('Эта буква в нижнем регистре!!! - ', letter);

  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Эта буква в верхнет регистре!!! - ', letter);
  //   invertedString += letter.toLowerCase();
  // }

//   const isEqual = letter === letter.toLowerCase();

//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
    
// }

// console.log('invertedString: ', invertedString);



//+++++++++++++++++++++++++++++++++++++++++



/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const words = normalizedTitle.split(' '); //разбитие по словам
// console.log(words);

const slug = words.join('-'); //вставка тире между словами
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-'); //скорочений запис виконується по черзі зліва направо

console.log(slug1);



//+++++++++++++++++++++++++++++++++++++++++


/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2); // слияние двух массивов в один

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);


//+++++++++++++++++++++++++++++++++++++++++
/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);


/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove); //поиск индекса нужного елемента
// console.log(index);

// cards.splice(index, 1); // удаление елемента из массива

// console.table(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'Обновленная карточка-4'); //на место індекс(карточка 4 с индексом 3) , удали (1) и поставь новую (обновленная)

console.table(cards);

