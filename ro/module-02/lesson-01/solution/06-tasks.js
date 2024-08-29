/*
 * Scrie un script pentru a verifica accesul utilizatorului la conținut
 * - Există trei tipuri de abonamente: free, pro și vip.
 * - Accesul este permis doar utilizatorilor cu abonamente pro și vip.
 */

const sub = "free";

const canAccessContent = sub === "pro" || sub === "vip";
console.log("Există acces la conținut? ", canAccessContent);

/*
 * Scrie un script care verifică dacă se poate deschide un chat cu un utilizator.
 * Pentru aceasta, utilizatorul trebuie să fie:
 * - un prieten
 * - online
 * - fără modul "Do not disturb"
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log("Se poate deschide chat-ul? ", canOpenChat);
