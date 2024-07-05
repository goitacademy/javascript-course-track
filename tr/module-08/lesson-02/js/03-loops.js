/**
 * Bir nesneyi döngü içinde yok etme
const users = [
    { name: 'Kate' },
    { name: 'Alex' },
    { name: 'Mark' }
];
/**
 * Yeniden yapılandırma olmadan
 */
const names = [];
for (const user of users) {
    names.push(user.name);
}
console.log(names);    /**
 * Yeniden yapılandırma ile
 */