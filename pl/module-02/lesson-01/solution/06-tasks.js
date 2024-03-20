/*
 * Napisz skrypt sprawdzający subskrypcję użytkownika podczas uzyskiwania dostępu do treści.
 * - Dostępne są trzy rodzaje subskrypcji: free, pro і vip.
 * - Uzyskać dostęp mogą tylko użytkownicy pro і vip.
 */

const sub = "free";

const canAccessContent = sub === "pro" || sub === "vip";
console.log("Czy masz dostęp do treści? ", canAccessContent);

/*
 * Napisz skrypt który sprawdzi możliwość otwarcia czatu z użytkownikiem.
 * By to zrobić, użytkownik musi być:
 * - znajomym
 * - online
 * - bez trybu "Nie przeszkadzać"
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log("Mogę otworzyć czat? ", canOpenChat);
