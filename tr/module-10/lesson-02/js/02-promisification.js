/*
 * Promissification:
 * - Bir flask promix'in sonucuna erişme sorunu
 * - Bir senet döndüren bir işlev
 */
const makeOrder = (dish, onSuccess, onError) => {
  const passed = Math.random() > '0.5';
  setTimeout(() => {
    if (passed) {
      onSuccess(`✅ Siparişiniz: ${ dish }`);
    }
    onError('❌ Üzgünüz, ürünlerimiz tükendi');
  }, 1000);
};
makeOrder('pastacı', result => {
  console.log('onMakeOrderSuccess');
  console.log(result);
}, error => {
  console.log('onMakeOrderError');
  console.log(error);
});
/*
 * "Eşzamanlı" işlevlerin teşvik edilmesi
 * - Promise.resolve()
 * - Promise.reject()
 */
const prepareDish = (dish, onSuccess, onError) => {
  const passed = Math.random() > '0.5';
  if (passed) {
    onSuccess(`✅ Siparişiniz: ${ dish }`);
  }
  onError('❌ Üzgünüz, ürünlerimiz tükendi');
};
makeOrder('pastacı', result => {
  console.log('onMakeOrderSuccess');
  console.log(result);
}, error => {
  console.log('onMakeOrderError');
  console.log(error);
});