// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
// const message = 'JavaScript is in my blood';
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  const result = message.split(' ');
  return result.length * pricePerWord;

  // Change code above this line
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
calculateEngravingPrice('JavaScript is in my blood', 20);
