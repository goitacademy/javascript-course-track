/*
 * Promisyfikacja:
 * - Problem dostępu do wyniku obietnicy z wywołaniem zwrotnym
 * - Funkcja zwracająca obietnicę
 */

const makeOrder = (dish, onSuccess, onError) => {
  const passed = Math.random() > 0.5;

  setTimeout(() => {
    if (passed) {
      onSuccess(`✅ Twoje zamówienie: ${dish}`);
    }

    onError("❌ Ups, skończyły się nam produkty");
  }, 1000);
};

makeOrder(
  "pieróg",
  (result) => {
    console.log("onMakeOrderSuccess");
    console.log(result);
  },
  (error) => {
    console.log("onMakeOrderError");
    console.log(error);
  }
);

/*
 * Promisyfikacja fukcji «synchronicznych»
 * - Promise.resolve()
 * - Promise.reject()
 */

const prepareDish = (dish, onSuccess, onError) => {
  const passed = Math.random() > 0.5;

  if (passed) {
    onSuccess(`✅ Twoje zamówienie: ${dish}`);
  }

  onError("❌ Ups, skończyły się nam produkty");
};

makeOrder(
  "pieróg",
  (result) => {
    console.log("onMakeOrderSuccess");
    console.log(result);
  },
  (error) => {
    console.log("onMakeOrderError");
    console.log(error);
  }
);
