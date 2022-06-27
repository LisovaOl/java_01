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
    for (const potion of this.potions) {
      if (newPotion.name === potion.name) {
        return `Error! Potion ${potion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
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
        const { potions } = this;
        for (const potion of potions) {
            if (potion.name === oldName) {
                potion.name = newName;
                return;
            }
        }
        return `Potion ${oldName} is not in inventory!`;
    }    
        // }
        
//     let potionIndex = -1;
    
//     for (i = 0; i < this.potions.length; i += 1) {
//       if (newName === this.potions[i].oldName) {
//         potionIndex = i;
//         break;
//       }
//     }
//     const potionIndex1 = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex1, 1, newName);
//   },
  // Change code above this line
};



// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`


// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]`