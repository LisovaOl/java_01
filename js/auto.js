// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// let array1 = [1, 2, 3];
// let array2 = [2, 1, 17, 19] // повертає[1, 2]
    
    
function getCommonElements(array1, array2) {
  // Change code below this line
    let result = [];
    for (i = 0; i < array1.length; i += 1){
        if (array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    return result
  // Change code above this line
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));



for (const arrays of array) {
    if (arrays === value) {
       arrays === value;
    console.log(arrays === value);
    return arrays === value; 
    }
    console.log(false);
    return false;
}