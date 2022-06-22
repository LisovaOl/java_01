// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
