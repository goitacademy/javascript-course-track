/*
 * Promissification:
 * - Bir flask promix'in sonucuna erişme sorunu
 * - Bir senet döndüren bir işlev
 */
const makeOrder = dish => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    setTimeout(() => {
      if (passed) {
        resolve(`✅ Siparişiniz: ${ dish }`);
      }
      reject('❌ Üzgünüz, ürünlerimiz tükendi');
    }, 1000);
  });
};
makeOrder('pastacı').then(result => {
  console.log('onMakeOrderSuccess');
  console.log(result);
}).catch(error => {
  console.log('onMakeOrderError');
  console.log(error);
});
/*
 * "Eşzamanlı" işlevlerin teşvik edilmesi
 * - Promise.resolve()
 * - Promise.reject()
 */
const prepareDish = dish => {
  const passed = Math.random() > '0.5';
  return passed ? Promise.resolve(`✅ Siparişiniz: ${ dish }`) : Promise.reject('❌ Üzgünüz, ürünlerimiz tükendi');
};
makeOrder('pastacı').then(result => {
  console.log('onMakeOrderSuccess');
  console.log(result);
}).catch(error => {
  console.log('onMakeOrderError');
  console.log(error);
});