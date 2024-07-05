const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');
class Timer {
  constructor({onTick}) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init();
  }
  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  /*
   * - Zamanı milisaniye cinsinden alır 
   * - Saat / dakika / saniye cinsinden içinde ne kadar sığabileceğini hesaplar 
   * - hours, mins, secs özelliklerine sahip bir nesneyi döndürür 
   * - stackoverflow'dan cehennem kopyala yapıştır 💩
   */
  getTimeComponents(time) {
    const hours = this.pad(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor(time % (1000 * 60 * 60) / (1000 * 60)));
    const secs = this.pad(Math.floor(time % (1000 * 60) / 1000));
    return {
      hours,
      mins,
      secs
    };
  }
  /*
   * Verilen sayıyı alır, onu bir dizeye dönüştürür ve sayı 2 haneden küçükse başına 0 ekler
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}
const timer = new Timer({ onTick: updateClockface });
startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));
/*
 * - Milisaniye cinsinden zaman alır
 * - Kaç saat/dakika/saniye sığabileceğini hesaplar
 * - Arayüzü çizer
 */
function updateClockface({hours, mins, secs}) {
  clockface.textContent = `${ hours }:${ mins }:${ secs }`;
}