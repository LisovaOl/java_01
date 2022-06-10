// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

//     China - 100 кредитов
//     Chile - 250 кредитов
//     Australia - 170 кредитов
//     Jamaica - 120 кредитов

// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

function getShippingCost(country) {
  let message;
  // Change code below this line

  let country = 'China', 'Chile', 'Australia', 'Jamaica';

  switch (getShippingCost(country)) {
    case 'China':
      price = 100;
      message = 'Shipping to ${country} will cost ${price} credits';
      break;
  }
  // Change code above this line
  return message;
}
getShippingCost(country);
