// // console.log('hello');
// const shouldRenew = confirm('Do you like pizza?');
// // console.log(shouldRenew)


// let quantity = prompt('Введите количество товаров');
// quantity = Number(quantity);
// // console.log(quantity);
// // console.log(typeof quantity);


//         //parseInt (парсит только целые цифри, без точек и букв )
// let elementWidth = '50px'; //50
// elementWidth = '50.3px'; //50
// elementWidth = '50fsd666px'; //50

// elementWidth = 'g50px'; //nan
// elementWidth = '5d0fsd666px'; //5

// const result = Number.parseInt(elementWidth);
// // console.log(result);
// // console.log(typeof result)


//             //parseFloat (парсит числа с точками , без букв)
// let elementHeight = '200.74px' //200.74
// elementHeight = '20а0.74px' //20
// elementHeight = '200.74454564757px' // 200.74454564757

// const result = Number.parseFloat(elementHeight);
// // console.log(result);
// // console.log(typeof result)

//             //toFixed(2))); округлення

// let salary = 1300.483569;
// salary = salary.toFixed(2) //возвращает string (строку) 2 цифри после точки
// salary = Number(salary); //переводит в Number

// salary = Number(salary.toFixed(2)) // скорочений запис. замість двох рядків - один.


// // console.log(salary);

// // можна все записати в consol/log
// // console.log(Number(salary.toFixed(2)));

//             // Приведение(преоюразование) к числу с Number(value)
//             //  
// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';
// // console.log(Number(quantity)); //число 30
// // console.log(Number(value)) //NaN


//             //Возведение в степень
// const base = 2;
// const power = 5;
// const result = Math.pow(2, 5); // 2 в 5 степени
// // // console.log(result);
// // // console.log(Math.pow(2, 5)); // скорочений запис

// //         // запис з іменами змінних
// const result = Math.pow(base, power);
// // console.log(result);

// // console.log(Math.pow(base, power)); // скорочений запис

// // Оператор Exponent 
// // console.log(2 ** 5); // 2 в 5 степени оператор Exponent 
// // console.log(base ** power); // 2 в 5 степени оператор Exponent 


// // Генерим случайные числа
// //     - Math.random()
// //     - Math.round()

// // console.log(Math.random()); //генерит от 0 до 1.

// //Генерит нужный диапазон. (20-40)
// const max = 40;
// const min = 20;
// // console.log(Math.random() * (max - min) + min); //25.45845787454

// // // Чтобы округлить Math.round (ціле число)
// const result = Math.round(Math.random() * (max - min) + min);
// // console.log(result) 



// let number = 45589.54656265;
// // console.log(Math.round(number));

// const colors = ['tomato', 'green', 'red', 'blue', 'yellow'];
// const max = colors.length - 1;
// const min = 0;


// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];

// // console.log(color);
// // document.body.style.backgroundColor = color;