const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];
// Example 1 - Метод map

// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = cars => cars.map(car => car.model);
// console.table(getModels(cars));
// // const getPrice = cars => cars.map(car => car.price);
// console.table(getPrice(cars));

// const getHighPrice = cars => cars.map (car => car.price + 10000)
// console.table(getHighPrice(cars)
// );

// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

const makeCarsWithDiscount = (cars, discount) => 
    cars.map(car => ({ ...car, price: car.price * (1-discount) }
))
    

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// Example 3 - Метод filter

// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

const filterByPrice = (cars, threshold) =>
    // cars.filter(car => (car.price < threshold));
cars.filter(({price}) => price < threshold) // деструктуризацыя

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 - Метод filter

// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = cars =>
// cars.filter(car => car.onSale);

// console.table(getCarsWithDiscount(cars));

// const getCarsWithoutDiscount = cars => cars.filter(car => !car.onSale);

// console.table(getCarsWithoutDiscount(cars));

// Example 5 - Метод filter

// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
console.table(getCarsWithType(cars, 'truck'));

// Example 6 - Метод find

const getCarByModel = (cars, model) =>
cars.find(car => car.model === model);

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
console.log(getCarByModel(cars, 'Mazda 6'));


// Example 7 - Метод sort

// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

const sortByAscendingAmount = cars => [...cars].sort((car1, car2) => car1.amount - car2.amount);

// console.table(sortByAscendingAmount(cars));

const sortByPrice = cars => [...cars].sort((car1, car2) => car2.price - car1.price)
// console.table(sortByPrice(cars))

// Example 9 - Метод sort

// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

const sortByModel = (cars, order) => {
    const value = order === 'asc' ? 1 : -1;
    return [...cars].sort((car1, car2) => car1.model > car2.model ? value : -value);
}

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// Example 10 - Метод reduce

// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

const getTotalAmount = cars => 
// cars.reduce((total, { amount: current }) => total + current, 0);
cars.reduce((total, car) => total + car.amount, 0);

console.log(getTotalAmount(cars));

// Example 11 - Цепочки методов

// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

const getModelsOnSale = cars => cars.filter(car => car.onSale)
    .map(car => car.model)

console.table(getModelsOnSale(cars));

// Example 12 - Цепочки методов

// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

const getSortedCarsOnSale = cars => cars
    .filter(car => car.onSale)
.sort((car1, car2) => car1.price - car2.price);

console.table(getSortedCarsOnSale(cars));