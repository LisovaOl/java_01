// // Работа с переменными

// // Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
// const num = 3
// console.log(num)

// // Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
// const a = 10
// const b = 2
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// // Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.

// const c = 15
// const d = 2
// let result = c + d
// console.log(result)

// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
// const a = 10
// const b = 2
// const c = 5
// console.log(a + b + c)

// Создайте переменные a = 17 и b = 10. Отнимите от a переменную b и результат присвойте переменной c.Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result.Выведите на экран значение переменной result.
// const a = 17;
// const b = 10;
// let c = a - b;
// const d = 7;
// let result = c + d;

// console.log(result);

// Работа со строками

// Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
// const str = 'Hello, World!'
// console.log(str)

// Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
// const str1 = 'Hello,'
// const str2 = 'World!'
// let result = str1 + ' ' + str2
// console.log(result)
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
// const str1 = 'Hello, ';
// const name = 'Olena!';
// let result = str1 + ' ' + name;
// console.log(result);

// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
// const str1 = 'Hello, ';
// const name = 'Olena!';
// const age = 40;
// let result = `Мне ${age} лет`;
// console.log(result);
// Функция prompt

// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
// const userName = prompt('What is your name?');
// alert(`Your name ${userName}`);

// Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
// Обращение к символам строки
// const num = prompt('Enter the number.');
// let num2 = num ** 2;

// alert(`Your number ${num2}`);

// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
// const str = "abcde"
// console.log(str[0])
// console.log(str[2]);
// console.log(str[4]);

// Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
// const num = 12345;
// let num2 = 1 * 2 * 3 * 4 * 5;

// console.log(num2);

// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let nameMy = '354';
console.log((nameMy));
// console.log(name);
 //-------------------5%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 // let userName = prompt('What is your name?', 'John');
// alert(`Your name is ${userName}`)

// let apples = "2";
// let oranges = "3";

// console.log(apples + oranges); // "23", так как бинарный плюс объединяет строки

// console.log( Number(apples) + Number(oranges) ); // 5//преобразование к числу.
// console.log(+apples + +oranges); //преобразование к числу короткий метод



const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];

const keys = Object.keys(apartment);
console.log(keys)


for (const value of apartment) {
    console.log(value);
    console.log(apartment[value]);
}



// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     console.log(key);
//     keys.push(key);
//     values.push(apartment[key]);

// };
// console.log(keys);
//     console.log(values)

// // for (const value in apartment) {
// //     console.log(value);
// //         values.push(value);

// // // };
// //     console.log(values);


