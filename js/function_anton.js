// ================ Модуль 2. Занятие 4. Функции
// ================= Example 1 - Индекс массы тела

// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

function calcBMI(weight, height) {
  weight = weight.replaceAll(',', '.'); // заміна коми на крапку
  height = height.replaceAll(',', '.');

  return Number((weight / (height * height)).toFixed(2)); // округлення до 2 чисел. toFixed повертає стрінгб тому перед функцією ставимо Number
}

const bmi = calcBMI('88,3', '1.75');
const bmi1 = calcBMI('8,3', '15,8');
const bmi2 = calcBMI('68,3', '1,5');

console.log(bmi); // 28.8
console.log(bmi1); // 28.8
console.log(bmi2); // 28.8

// ================== Example 2 - Меньшее из чисел

// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function getMin(a, b) {
//     // if (a < b) {
//     //     return a;
//     // }
//     //     return b;
//     return a < b ? a : b; // короткий запис
// }
// console.log(getMin(2, 5)); // 2
// console.log(getMin(3, -1)); // -1
// console.log(getMin(1, 1)); // 1

// =================== Example 3 - Площадь прямоугольника

// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

function getRectArea(dimensions) {
  const numbersDimensions = dimensions.split(' '); //розділення массиву на два елементи
  return numbersDimensions[0] * numbersDimensions[1]; // перемноження їх
}

console.log(getRectArea('8 11'));

// ================= Example 4 - Логирование элементов

// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

function logItems(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ============== Example 5 - Логирование контактов

// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

function printContactsInfo(names, phones) {
  const namesMod = names.split(','); //розділення на окремі символи
  const phonesMod = phones.split(','); //розділення на окремі символи

  for (let i = 0; i < namesMod.length; i += 1) {
    console.log(`${namesMod[i]} -- ${phonesMod[i]}`);
  }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);

// ==========  Example 6 - Поиск наибольшего элемента

// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

function findLargestNumber(numbers) {
  // перевірка чи не пустий масив
  if (numbers.length === 0) {
    return 0;
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    max = max > numbers[i] ? max : numbers[i];
  }
  return max;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
console.log(findLargestNumber([])); // 83

// ==========  Example 7 - Среднее значение

// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

function calAverage() {
  if (!arguments.length) {
    // перевіркаб якщо аргументів в массиві немає, то повернути 0
    return 0;
  }
  let sum = 0;
  for (let i = 1; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  return Number((sum / arguments.length).toFixed(1));
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
console.log(calAverage()); // 23.2

// ============ Example 8 - Форматирование времени

// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.


function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const doubleDigitHours = String(hours).padStart(2, 0);
  const doubleDigitMinutes = String(minutes).padStart(2, 0);
  return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"

// ============== Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)

// Напишите функции для работы с коллекцией обучающих курсов courses:

    // addCourse(name) - добавляет курс в конец коллекции
    // removeCourse(name) - удаляет курс из коллекции
    // updateCourse(oldName, newName) - изменяет имя на новое

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(name) {
    if (courses.includes(name)){
        return 'Такой курс уже добавлен';
    }
  courses.push(name);
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такой курс'

function removeCourse(name) {
  if (!courses.includes(name)) {
    return 'Курс с таким имененем не найден';
  }
    
    courses.splice(courses.indexOf(name), 1) // знайти індекс курса, який потрібно видалити, 1 вказує, що потрібно видалити один елемент

}


removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким имененем не найден'
console.log(removeCourse('Vue'));


function updateCourse(oldName, newName) {
  if (!courses.includes(oldName)) {
    return 'Курс с таким имененем не найден';
  }

  courses[courses.indexOf(oldName)] = newName; // знайти індекс курса, який потрібно замінити на нове імя
}

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

