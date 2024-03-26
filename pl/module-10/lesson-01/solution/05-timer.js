const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".js-clockface");

class Timer {
  constructor({ onTick }) {
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
   * - Przyjmuje czas w milisekundach
   * - Oblicza ile mogą zawierać godzin/minut/sekund
   * - Zwraca obiekt z właściwościami hours, mins, secs
   * - Piekielne copy-paste ze stackoverflow 💩
   */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  /*
   * Pobiera liczbę, konwertuje ją na ciąg znaków i dodaje 0 na początku, jeśli liczba jest mniejsza niż 2 cyfry.
   */
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));

/*
 * - Przyjmuje czas w milisekundach
 * - Oblicza ile mogą zawierać godzin/minut/sekund
 * - Wyświetla interfejs
 */
function updateClockface({ hours, mins, secs }) {
  clockface.textContent = `${hours}:${mins}:${secs}`;
}
