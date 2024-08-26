/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve(
        "Проміс виконався успішно, із результатом (виконаний, fulfilled)"
      );
    }

    reject("Проміс виконався з помилкою (відхилений, rejected)");
  }, 1000);
});

promise
  .then((result) => {
    console.log(`✅ виконаний - ${result}`);
  })
  .catch((error) => {
    console.log(`❌ відхилений - ${error}`);
  })
  .finally(() => {
    console.log("Я буду виконаний у будь-якому випадку");
  });

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

promise
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((x) => {
    console.log(x);
    return 10;
  })
  .then((y) => {
    console.log(y);
  })
  .then((z) => {
    console.log(z);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Я буду виконаний у будь-якому випадку");
  });
