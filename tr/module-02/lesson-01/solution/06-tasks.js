/*
 * İçeriğe erişirken kullanıcının aboneliğini kontrol etmek için bir komut dosyası yazın
 * - Üç tür abonelik vardır: free, pro ve vip.
 * - Sadece pro ve vip kullanıcılar erişim sağlayabilir
 */

const sub = "free";

const canAccessContent = sub === "pro" || sub === "vip";
console.log("Есть доступ к контенту? ", canAccessContent);

/*
 * Bir kullanıcıyla sohbet açıp açamayacağınızı kontrol eden bir komut dosyası yazın.
 * Bunu yapmak için, kullanıcı olmalıdır:
 * - bir arkadaş
 * - çevrimiçi
 * - rahatsız etmeyin modu olmadan
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log("Sohbet odası açabilir miyiz? ", canOpenChat);
