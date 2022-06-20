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

console.log(getAllNames(friends));

// /*
//  * Получаем имена только друзей которые онлайн
//  */
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// // console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//   return offlineFriends;
// };

// // console.log(getOfflineFriends(friends));

// // создать 2 массива онлайн и офлайн?
// // если тру - в первый, если нет - во второй

// const getFriendsByStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }

//     friendsByStatus.offline.push(friend);

//     // const key = friend.online ? 'online' : 'offline';
//     // friendsByStatus[key].push(friend);
//   }

//   return friendsByStatus;
// };

// console.log(getFriendsByStatus(friends));

