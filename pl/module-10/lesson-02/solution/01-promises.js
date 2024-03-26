/**
 * Tworzenie i przetwarzanie obietnicy
 * - klasa Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve(
        "Obietnica została wykonana pomyślnie, z wynikiem (spełniona, fulfilled)"
      );
    }

    reject("Obietnica została wykonana z błędem (odrzucona, rejected)");
  }, 1000);
});

promise
  .then((result) => {
    console.log(`✅ spełniona - ${result}`);
  })
  .catch((error) => {
    console.log(`❌ odrzucona - ${error}`);
  })
  .finally(() => {
    console.log("W każdym razie zostanę spełniona");
  });

/**
 * Łańcuchy obietnic
 * - kilka następujących po sobie then
 * - then zwraca obietnicę
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
    console.log("W każdym razie zostanę spełniona");
  });
