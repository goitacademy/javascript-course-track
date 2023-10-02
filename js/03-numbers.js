/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);

// let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

/*
 * - Приведение к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
// let quantity = "30";
// let value = "Эту строку невозможно привести к числу";

// console.log(Number(quantity));
// console.log(Number(value));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(base ** power);

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.
// const value = 27.5;
