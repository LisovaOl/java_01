// const friends = ['andrey', 'paul', 'nazar', 'alex', 'olena', 'yana', 'kira', 'nika'];
// // console.table(friends); //список с индексами // table в таблице
// console.log(friends.length); // количество елементов

// const lastIndex = friends.length - 1; //последний индекс номер 7
// console.log(lastIndex);

// console.log(friends[4]); //обращение к елементу массива по индексу

// friends[5] = 'ololo'; //замена елемента по индексу
// friends[2] = 'ddddd';
// friends[5] = 'yana';
// friends[2] = 'nazar';
// console.table(friends);

// ===========================================

//Передача по значению (копия) примитивный тип
// let a = 10
// let b = a //создается копия масива а
// console.log(a)
// console.log(b)

// a = 20 // при изменении значения в "а" значение "в" не меняеться
// console.log(a);
// console.log(b);

//===============================================

//Передача по ссылке (копия) cложный тип тип

// let a = [0, 1, 2, 3];

// let b = a; //создается копия масива а

// console.log('a', a);
// console.log('b', b);

// a[0] = 500; // при изменении значения в "а" значение "в" тоже меняеться
// console.log(a);
// console.log(b);
// console.log(a === b) //они одинаковые

//================================================

//====== Пепребор массива =================

// const friends = ['andrey', 'paul', 'nazar', 'alex', 'olena', 'yana', 'kira', 'nika'];
// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//   console.log(friends[i]);
// }


//=========== 2 variant ======

// const lastIndex = friends.length - 1;
// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += '-1'; //add "-1" for each element
// }

// console.log(friends);
// console.table(friends);


            //     Декларативный цикл. Когда не нужно ничего менять в массиве
            
// for (const friend of friends) {
//     console.log(friend); // display a list of friends one by one . 
// }


