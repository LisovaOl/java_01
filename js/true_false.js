// Интересно

// Запомните 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании:
//     0,
//     NaN,
//     null,
//     undefined,
//     пустая строка
//     false.
    
//     Абсолютно все остальное приводится к true.



// Логическое «И»
// Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд если его можно привести к false, и правый в остальных случаях.


            // // Запинается 
            // - на первом false и 
            //     - выводит  его 
            // - или последнюю true
// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"



                // То есть логическое «ИЛИ» 
                // -запинается на правде и 
                //     - возвращает то на чём запнулось 
                // -или последний операнд.
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

            // Оператор! приводит операнд к булю, если необходимо,
            //     -затем делает инверсию - заменяет его на противоположный
            //     - true -> false или false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false


//         Задачи 
// Напиши скрипт которій проверяет вхождение числа в отрезок обозначеній х1 и х2.
//     - До х1
//     - После х2
//     - От х1 до х2
//     - До х1 или После х2

const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1); // До х1 --> false

console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2); // После х2 --> true


console.log(`Число ${number} попадает в отрезок от ${x1} и до ${x2}?`, number > x1 && number < x2 ); // - От х1 до х2


// number > x1 && number < x2;
// 50 > 10 && 50 < 30;
// true && false;   && запинается на лжи и выводит его
// false;

// 5 > 10 && 5 < 30;
// false && true;   && запинается на лжи и выводит его
// false;

// 15 > 10 && 15 < 30;
// true && true;   && оба правда 
// true;


console.log(`Число ${number} попадает в отрезок от ${x1} и до ${x2}?`, number < x1 || number > x2); // - До х1 или после х2

// number < x1 || number > x2
// // 50 < 10 || 50 > 30;
// false || true           // запинается на правде true и выводит
// true

// // 25 < 10 || 25 > 30;
// false || false           // true нету  и выводит false
// false

// // 5 < 10 || 5 > 30;
// true || false           // true нету  и выводит false
// true



    // ЗАДАЧА -- Ч А Т ---

    // Напиши скрипт который проверяет возможность отурыть чат с пользователем. 
    // Для этого пользователь должен быть:
    // - другом
    // - онлайн
    // - без режима не беспокоить
    
// const isOnline = true;
// const isFfriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFfriend && !isDnd; // Проверка значений -- !isDnd - - не включен режим небеспокоить
// //true && true && true
// console.log(`МОжно открыть чат?`, canOpenChat); //true

    // ЗАДАЧА -- ПОДПИСКА ---
// Напиши скрипт который проверяет возможность подписки. 
// 
// - есть три типа подпсики: free , pro , vip
// - получить доступ могут только pro & vip

// const sub = 'pro';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// //true || false // возвращает первый true
// console.log(`Есть доступ к контету?`, canAccessContent); //true