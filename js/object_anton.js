//          Модуль 3. Занятие 1. Объекты

////////////////////////////////////////////////////////////////
//  /////////////      Example 1 - Основы обьектов //////////////
////////////////////////////////////////////////////////////////

// Напиши скрипт, который, для объекта user, последовательно:

//     добавляет поле mood со значением 'happy'
//     заменяет значение hobby на 'skydiving'
//     заменяет значение premium на false
//     выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// //or
// // user['mood'] = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user); // пойди в user и принеси мне ключи
// // console.log(keys);

// for (const key of keys) {
//     console.log(key,':', user[key]); // выводит имя ключа : и значение
// }

//         //or simple variant

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[keys]}`)
//    // выводит имя ключа : и значение
// }

/////////////////////////////////////////////////////////////
//////////// Example 2 - метод Object.values() //////////////
////////////////////////////////////////////////////////////

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
// Код

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// for..of перебирає значення МАССИВА
// for..in перебирає ключі ОБʼЄКТА. Через ключі можна вийняти значення.
let sum = 0;
for (const name in salaries) {
  console.log(name);
  sum += salaries[name];
}
  console.log(salaries[name]);

// let sum = 0;
// // const values = Object.values(salaries);
// for (const value of Object.values(salaries)) {
//   sum += value;
// }
// console.log(sum);

/////////////////////////////////////////////////////////////
// Example 3 - Массив объектов
/////////////////////////////////////////////////////////////

// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
// Код

const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  let totalPrice = 0;
  for (const stone of stones) {
    if (stone.name === stoneName) {
      totalPrice += stone.price * stone.quantity;
    }
  }
  return totalPrice;
}

console.log(calcTotalPrice(stones, 'Сапфир'));

/////////////////////////////////////////////////////////////
// Example 4 - Комплексные задачи
/////////////////////////////////////////////////////////////

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */
const transactionsExample = {
  id: 1,
  type: Transaction.DEPOSIT,
  amount: 100,
  

}
const account = {
  // Текущий баланс счета
  balance: 0,

//   // История транзакций
  transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
  createTransaction(amount, type) {
    const transactionObject = {
      id: this.transactions.length + 1,
      
      type,
      amount,
    }
    return transactionObject;
  },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
  deposit(amount) {
    this.balance += amount;
    const transactionObject = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transactionObject);
  },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів для зняття");
      return;
    }
    this.balance -= amount;
      const transactionObject = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transactionObject);

  },

//   /*
//    * Метод возвращает текущий баланс
//    */
  getBalance() {
    return this.balance;
  },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
  getTransactionDetails(id) {
    let transaction;
    for (const itemTransaction of this.transactions) {
      if (itemTransaction.id === id) {
        transaction = itemTransaction;
        break;
      }
    }
    return transaction;
  },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
  getTransactionTotal(type) {
    let sum = 0;
        for (const itemTransaction of this.transactions) {
          if (itemTransaction.type === type) {
            sum += itemTransaction.amount;
            
          }
        }
        return sum;

  },

};

account.withdraw(100);
console.log(account.balance);

account.deposit(1000);
account.deposit(1000);
console.log(account.balance);

account.withdraw(500);
account.withdraw(300);
account.withdraw(200);

console.log(account.balance);

console.log(account.transactions);

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));


// console.log(account.getTransactionDetails(3));
// console.log(account);
// console.log('У вас на рахунку:', account.balance);
// console.log(`У вас на рахунку: ${account.balance}`);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Массив обʼєктвів ...........................
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const arrOfObject = [
  { a: 1, b: 2, c: 3 },
  { a: 11, b: 12, c: 13 },
  { a: 21, b: 22, c: 23 },
  { a: 31, b: 32, c: 33 },
];
console.table(arrOfObject); // початкові значення 

// зміна окремого елемента, якщо відомо його індекс.
arrOfObject[0].a = 'hello';

// зміна елемента всіх елементів ʼаʼ 
for (const item of arrOfObject) {
  item.a += 10;
  item.b += 100;
  item.c += 1000;
  
};
console.table(arrOfObject) 

console.log(arrOfObject);