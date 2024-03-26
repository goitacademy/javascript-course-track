/*
 * Promisyfikacja:
 * - Problem dostępu do wyniku obietnicy z wywołaniem zwrotnym
 * - Funkcja zwracająca obietnicę
 */

const makeOrder = (dish) => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve(`✅ Twoje zamówienie: ${dish}`);
      }

      reject("❌ Ups, skończyły się nam produkty");
    }, 1000);
  });
};

makeOrder("pieróg")
  .then((result) => {
    console.log("onMakeOrderSuccess");
    console.log(result);
  })
  .catch((error) => {
    console.log("onMakeOrderError");
    console.log(error);
  });

/*
 * Promisyfikacja fukcji «synchronicznych»
 * - Promise.resolve()
 * - Promise.reject()
 */

const prepareDish = (dish) => {
  const passed = Math.random() > 0.5;
  return passed
    ? Promise.resolve(`✅ Twoje zamówienie: ${dish}`)
    : Promise.reject("❌ Ups, skończyły się nam produkty");
};

makeOrder("pieróg")
  .then((result) => {
    console.log("onMakeOrderSuccess");
    console.log(result);
  })
  .catch((error) => {
    console.log("onMakeOrderError");
    console.log(error);
  });
