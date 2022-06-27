// // Task 36-41
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     // this.potions.indexOf(potionName);
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//   },

//   updatePotionName(oldName, newName) {
//     // this.potions.indexOf(oldName);
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);

//   },
// };
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }

// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

//     getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
//     addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
//     removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
//     updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

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
        for (const item of this.items) {
          if (this.potion.name === this.potions.name) {
            return `Error! Potion ${this.potions.name} is already in your inventory!`;
          }
        }

    this.potions.push(newPotion);
  },
  removePotion(potionName) { // работает 
    let potionIndex = -1;
    for (i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        potionIndex = i;
        break;
      }
    }
    const potionIndex1 = this.potions.indexOf(potionName);
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.potion.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
// console.log(atTheOldToad.getPotions());
// console.table(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: 'Speed potion', price: 40 });

console.table(atTheOldToad.getPotions());

atTheOldToad.updatePotionName('Dragon breath');


console.table(atTheOldToad.getPotions());
