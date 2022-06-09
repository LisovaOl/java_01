// Длинна строки, количество символов

const message = 'Доброго вечора, ми з України!'
// console.log(message.length)

// Конкатениция строк

const firstWord = 'Доброго';
const secondWord = 'вечора';
const full = firstWord + ' ' + secondWord;
// console.log(firstWord + ' ' + secondWord);
// console.log(full);

//Шаблонные строки (template strings) `Ви замовили 5 булочок`

const quantity = 505;
const orderMsg = `Ви замовили ${quantity} булочок`;
// console.log(orderMsg);


        // Нормализация методом toLowerCase()

// let brand = 'SaMSunG';

// brand = brand.toLowerCase();
// console.log(brand);

// З вікном
// let brand = prompt('Давай бренд!');

// brand = brand.toLowerCase();
// console.log(brand);

let brand = 'SaMSunG'; // '0-1-2-3-4-5-6"
console.log(brand[2]); //индекация - вывод индекса буквы = M
console.log(brand.slice(2)); //индекация - вывод после нужной буквы = MSunG
console.log(brand.slice(2).toLowerCase()); //нормализация остальных букв в нижний регистр = msung

//Вывод первой буквы заглавной, а остальные нормализация

brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);


            //Поиск в строке includes()
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион';
const string2 = 'Самая большая РАСПРОДАЖА этой нежели, не пропустите!!!';
const string3 = 'Рекламная компания #fltlivesmaster';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));

//нормализация toLowerCase(). 
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));
