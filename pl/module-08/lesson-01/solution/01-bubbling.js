/*
 * Bąbelkowe wywoływanie zdarzeń
 * event.target - element docelowy (źródłowy)
 * event.currentTarget - bieżący element, na którego nasłuchiwaczu zdarzenie zostało przechwycone
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

parent.addEventListener("click", onParentClick);
child.addEventListener("click", onChildClick);
innerChild.addEventListener("click", onInnerChildClick);

function onParentClick(evt) {
  console.log("onParentClick");
  console.log("onParentClick -> evt.target", evt.target);
  console.log("onParentClick -> evt.currentTarget", evt.currentTarget);
}

function onChildClick(evt) {
  console.log("onChildClick");
  console.log("onChildClick -> evt.target", evt.target);
  console.log("onChildClick -> evt.currentTarget", evt.currentTarget);
}

function onInnerChildClick(evt) {
  console.log("onInnerChildClick");
  console.log("onInnerChildClick -> evt.target", evt.target);
  console.log("onInnerChildClick -> evt.currentTarget", evt.currentTarget);
}
