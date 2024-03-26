/*
 * Bąbelkowe wywoływanie zdarzeń
 * event.target - element docelowy (źródłowy)
 * event.currentTarget - bieżący element, na którego nasłuchiwaczu zdarzenie zostało przechwycone
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");
