/*
 * setInterval(callback, delay, args) Metodu
 */
const logger = time => {
  console.log(`Her ${ time } ms - ${ Date.now() }`);
};
console.log('setInterval çağrısından önce');
setInterval(logger, 2000, 2000);
console.log('setInterval çağrısından sonra');
/*
 * clearInterval(intervalId) ile aralığın temizlenmesi
 */
const intervalId = setInterval(logger, 2000, 2000);
clearInterval(intervalId);