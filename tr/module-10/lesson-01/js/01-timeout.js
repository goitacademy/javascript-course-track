/*
 * window.setTimeout(callback, delay, args) Yöntem
 */
console.log('setTimeout çağrısından önce');
console.log('1 - setTimeout için geri çağrı içinde');
console.log('2 - setTimeout için geri çağrı içinde');
console.log('setTimeout çağrısından sonra');
/*
 * clearTimeout(timeoutId) kullanarak zaman aşımını temizleme
 */
const logger = time => {
  console.log(`Zaman aşımı iptal edilmediği için ${ time } ms sonra çıkış yapıldı`);
};
/**
 * Geribildirim için parametreleri iletebilme olasılığı
 */
const id = setTimeout((name, country) => {
  console.log(`Hello, my name is ${ name }, I'm from ${ country }`);
}, 1000);