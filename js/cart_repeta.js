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
  getItems() {
    return this.items;
  },
  add(product) {
    // console.table(this.items);

    // нужно перебрать массив. Узнать есть ли такой продукт
    for (const item of this.items) {
      if (item.name === product.name) {
        // console.log('Такой уже есть', product.name);
        item.quantity += 1;
        return;
      }
    }

    // Добавить счетчик количества продуктов. Создается пустой объект. Распыляется значения
    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    // 1:42:00 module 3 , lesson 6, Objects много инфы про методы
    ///////// удаление через перебор массива...........
    //   const { items } = this; // деструктуризация this. Тогда его надо удалить в цикле for
    for (let i = 0; i < this.items.length; i += 1) {
      //   console.log(this.items[i]);
      if (productName === this.items[i].name) {
        console.log('Find', productName);
        console.log('индекс', i);
        this.items.splice(i, 1); // удалить елемент
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    // деструктуризация  1:50:00 module 3 , lesson 6,

    let total = 0;
    for (const item of this.items) {
      // деструктуризация  1:50:00 module 3 , lesson 6,

        total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍎', price: 50 });



console.table(cart.getItems());

// cart.remove('🍎');
// cart.remove('🍋');
// cart.remove('🍇');
// cart.remove('🍓');

// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());
