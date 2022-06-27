// const playList = {
//   name: 'My playlist',
//   rate: 5,
//   tracks: ['track-1', 'track - 2', 'track - 3'],
//   trackCount: 3,
// };
// console.log(playList.tracks); // вывести свойство
// console.log(playList.name);
// console.log(playList.rate);

// const propertyName = 'tracks'; //если свойство нахожится в переменнойб, то тогда

// console.log(playList[propertyName]); // запись через [...] = РЕДКО ИСПОЛЬЗУЕТСЯ =

// // .
// // добавить новое свойство
// // .

// ---- добавать новий объект с свойствами; 
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;

//     country - країна, рядок "Jamaica";
//     city - місто, рядок "Kingston".


// apartment.location = {country: "Jamaica", city: "Kingston"};


// book.genres.push("drama"); // добавить елемент массива

// playList.author = 'singer-1'; // если такого значения нету, то оно добавиться.
// console.log(playList);

// playList.rate = 10; // если такое значение есть, то оно перезапишется.
// console.log(playList);

// // .
// // // короткая запись
// // .

// const userName = 'Mango';
// const email = 'mango@gmail.com';

// const singUpData = {
//   userName,
//   email,
// };
// console.log(singUpData);

// // .
// // вычисляемые
// // .

// // <input name='color', value='tomato'>

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue, // взять значение из переменной
// };
// console.log(colorPickerData);   // object {color: 'tomato'}

// // .
// // ссылочный тип
// // .
// // при сравнении два объекта (как и массивы) не равны.
// console.log([] === []); //false
// console.log({} === {}); //false

// const a = { x: 1, y: 2 };
// const b = a;
// console.log(a === b); //true. потому что это ссылки на один объект. 'b' это копия 'а'

// a.c = 100;
// console.log(a); //{x:1, x:2, c:100}
// console.log(b);  //{x:1, x:2, c:100}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\     методы объекта       \\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// getName: function () {
//   console.log('This is Get Name'); // старый способ записи
// }
//   getName() {
//     console.log('This is Get Name'); // современный способ записи метода объекта
//   },

// const playList = {
//   name: 'My playlist',
//   rate: 5,
//   tracks: ['track-1', 'track - 2', 'track - 3'],
//   trackCount: 3,

//   getName(newName) {
//     this.name = newName; //'this' указывает на метод именно в этом объекте
//   },
//   addTrack(newTrack) {
//       this.tracks.push(newTrack); //'this' указывает на метод именно в этом объекте
//       this.trackCount = this.tracks.length; // обновление всего количества треков. При .push автоматически обновляется TrackCount. 
//       // это плохое решение

//   },
//   updaterate(newRate) {
//     this.rate = newRate; //'this' указывает на метод именно в этом объекте
//     },
  
//     //   Подсчет количества треков
//     getTrackCount() {
//     return this.tracks.length; // возврат количества треков
//   },
// };
// console.log(playList);
// playList.getName('New playlist'); // изменить имя NewName
// // console.log(playList);
// console.log(playList.getTrackCount());


// playList.addTrack('Track - 4'); // add track в массив с треками
// // console.log(playList);
// console.log(playList.getTrackCount());



// playList.updaterate(10); // update rating
// // console.log(playList);

// playList.addTrack('Track - 5'); // add track в массив с треками
// // console.log(playList);

// console.log(playList.getTrackCount());

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\   Итерация - перебор массива   \\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\  Перебор через for...in и Object.keys|values|entries   \\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;
// --------- 1 способ --------------
// const keys = Object.keys(feedback); // пойди в feedback и принеси мне ключи

// console.log(keys); //['good', 'neutral', 'bad']


// for (const key of keys) {
//   console.log(key); // выводит имя ключа .. good
//   console.log(feedback[key]); // выводит значение ключа  .. 5 

//   totalFeedback += feedback[key]; //сумма всех feedback
// }

// console.log('totalFeedback: ', totalFeedback);

// -------- 2 способ ----------

// const values = Object.values(feedback); // values выводит набор значений

// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\   Работа с коллекцией (массивом объектов)  \\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// console.table(friends);

/*
 * Ищем друга по имени
 */

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.name);

//     if (friend.name === friendName) {
//       return 'НАШЛИ!!!';
//     }
//   }

//   return 'НЕ НАШЛИ :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// /*
//  * Получаем имена всех друзей
//  */

const getAllNames = function (allFriends) {
  const names = []; //создаем массив для того чтобы складывать туда имена друзей

  for (const friend of allFriends) {
    // console.log(friend); //получили доступ к списку друзей
    // console.log(friend.name);  // получили доступ к именам друзей

    names.push(friend.name); // каждое имя пушим в новый массив
  }

  return names; // возвращаем сформированый массив
};

// console.log(getAllNames(friends));

// /*
//  * Получаем имена только друзей которые онлайн
//  */


const getOnlineFriends = function (allFriends) {
  const onlineFriends = []; //новый массив для друзей онлайн

  for (const friend of allFriends) {
    // console.log(friend); // перебираем друзей
    // console.log(friend.online); // перебираем друзей онлайн

    if (friend.online) {
      onlineFriends.push(friend); // если друг онлайн добавить в новый массив
    }
  }

  return onlineFriends; // вернуть новый массив
};

// console.log(getOnlineFriends(friends));

//////// пошук друзей офлайн
// 
const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

// // создать 2 массива онлайн и офлайн?
// // если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = { //Создаем объект с двумя массивами
    online: [],
    offline: [],
  };

  for (const friend of allFriends) { // перебираем друзей 
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

// console.log(getFriendsByStatus(friends));


const x = {
    a: 1,
    b: 23,
    c: 32,
    d: 43,
    
}
//подсчет количества ключей

// console.log(Object.keys(x).length);


////////////////////////////////////////////////////////////////
/////////////// cart - Корзина товаров  //////////////////////////
//////////////////////////////////////////////////////////////
/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());


/////////////////////////////////////////////////////
////////////////////////////////////////////////////
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
