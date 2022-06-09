if (5 < 2) {
    console.log('ok');
};

console.log('next');


if (5 < 10) {
    console.log('ok');
};

console.log('next');

    // if ... else

if (5 > 20) {
    console.log('x > y');
}
else {
  console.log('x < y');
  
}

//много условий

const salary = 10000;
if (salary < 500) {
    console.log('Уровень 1');
}
else if (salary > 500 && salary < 1500) {
    console.log('Уровень 2');
 } 
else if (salary > 1500 && salary < 3500) {
    console.log('Уровень 3');

 } 
else {
    console.log('Уровень 4');

} 
 
// =>
let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500


        //Тернарный оператор
        // <условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно></выражение_если_условие_ложно>
const balance = 1000;
// let message;
// if (balance >= 0) {
//     message = 'Позитивный баланс';
// }
// else {
//     message = 'Негативный баланс';
//  } 

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
console.log(message);


        //Тернарный оператор 2

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"

// Выполним рефакторинг заменив if...else тернарным оператором.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"


        //Тернарный оператор 3

// Запишем операцию поиска большего числа.

const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10

// Код работает верно, получаем большее число из двух, но это решение кажется слишком громоздким, учитывая, насколько проста проблема. Используем тернарный оператор.

const num1 = 5;
const num2 = 10;
const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber); // 10