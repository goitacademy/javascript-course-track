/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const sub = "free";

const canAccessContent = sub === "pro" || sub === "vip";
console.log("Есть доступ к контенту? ", canAccessContent);

/*
 * Напиши скрипт который проверяет возможность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - другом
 * - онлайн
 * - без режима не беспокоить
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log("Можно открыть чат? ", canOpenChat);
