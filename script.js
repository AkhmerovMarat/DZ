const totalAmount = 3051;

// totalAmount - Сумма покупки в рублях

const bonusAmount = 1000;

// С каждой полной 1000 рублей начисляется 100 бонусов

const bonuses = (totalAmount / bonusAmount - (totalAmount % bonusAmount) / 1000) * 100;

const resultStr = bonuses;

console.log(bonuses);



