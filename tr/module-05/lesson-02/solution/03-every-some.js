const players = [
    {
        id: 'player-1',
        name: 'Mango',
        timePlayed: 310,
        points: 54,
        online: true
    },
    {
        id: 'player-2',
        name: 'Poly',
        timePlayed: 470,
        points: 92,
        online: false
    },
    {
        id: 'player-3',
        name: 'Kiwi',
        timePlayed: 230,
        points: 48,
        online: true
    },
    {
        id: 'player-4',
        name: 'Ajax',
        timePlayed: 150,
        points: 71,
        online: false
    },
    {
        id: 'player-5',
        name: 'Chelsy',
        timePlayed: 280,
        points: 48,
        online: true
    }
];
/**
 * Every Metodu
 *
 * - Orijinal dizi boyunca eleman eleman döngüler
 * - Dizinin tüm elemanları koşulu sağlıyorsa true değerini döndürür
 */
const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);
/**
 * some Metodu
 *
 * - Orijinal diziyi eleman eleman geçer
 * - Koşulu karşılayan en az bir eleman varsa true döndürür
 */
const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline: ', isAnyOnline);
const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers);