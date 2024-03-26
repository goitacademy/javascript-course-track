/**
 * Napisz oprogramowanie dla automatu do gier.
 * Do rozwiązania zadania użyj gotowych znaczników HTML i podstawowych stylów.
 *
 * Po kliknięciu przycisku "Start game"
 * w każdym oknie powinna pojawić się
 * emotikona z 1-sekundowym opóźnieniem ('🤑' lub '👿')
 *
 * Podczas przetwarzania każdego okna utwórz tablicę z obietnicami
 * w której każde okno będzie odpowiedzialne za własne okno,
 * a następnie przetwarzaj tę tablicę za pomocą metody Promise.allSettled.
 *
 * Po wypełnieniu wszystkich pól skrypt musi
 * automatycznie określić, czy gracz wygrał, czy nie.
 * Jeśli każde okno ma taką samą emotikonę, oznacza to, że użytkownik wygrał.
 *
 * Pole result wyświetla komunikat o statusie gry ('Winner' lub 'Loser')
 *
 * Po ponownym kliknięciu przycisku "Start game"
 * pole powinno zostać wyczyszczone, a gra powinna rozpocząć się od początku.
 */

const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");
