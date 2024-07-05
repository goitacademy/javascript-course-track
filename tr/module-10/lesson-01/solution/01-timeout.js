/*
 * window.setTimeout(callback, delay, args) Yöntem
 */
console.log('setTimeout çağrısından önce');
setTimeout(() => {
  console.log('1 - setTimeout için geri çağrı içinde');
}, 2000);
setTimeout(() => {
  console.log('2 - setTimeout için geri çağrı içinde');
}, 1000);
console.log('setTimeout çağrısından sonra');
/*
 * clearTimeout(timeoutId) kullanarak zaman aşımını temizleme
 */
const logger = time => {
    console.log(`Zaman aşımı iptal edilmediği için ${ time } ms sonra çıkış yapıldı`);
};
const timerId = setTimeout(logger, 2000, 2000);
console.log(timerId);
clearTimeout(timerId);
/**
 * Geribildirim için parametreleri iletebilme olasılığı
 */
const id = setTimeout((name, country) => {
  console.log(`Hello, my name is ${ name }, I'm from ${ country }`);
}, 1000, 'Alice', 'Ukraine');