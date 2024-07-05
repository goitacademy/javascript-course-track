/**
 * Promise oluşturma ve işleme alma
 * - Promise Sınıfı
 * - resolve
 * - reject
 * - then, catch, finally
 */
const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfill) {
      resolve('Test başarıyla tamamlandı ve sonuç (fulfilled)');
    }
    reject('Test bir hata ile reddedildi (rejected)');
  }, 1000);
});
promise.then(result => {
  console.log(`✅ tamamlandı - ${ result }`);
}).catch(error => {
  console.log(`❌ reddedildi - ${ error }`);
}).finally(() => {
  console.log('Her durumda gerçekleştirilecektir');
});
/**
 * Karışıklığın zincirleri
 * - birkaç ardışık then
 * - then bir promise döndürür
 */
promise.then(result => {
  console.log(result);
  return result;
}).then(x => {
  console.log(x);
  return 10;
}).then(y => {
  console.log(y);
}).then(z => {
  console.log(z);
}).catch(error => {
  console.log(error);
}).finally(() => {
  console.log('Her durumda gerçekleştirilecektir');
});