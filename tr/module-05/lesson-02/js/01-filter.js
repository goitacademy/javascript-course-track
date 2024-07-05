/**
 * Filter Metodu
 *
 * - Orijinal diziyi eleman eleman geçer
 * - Yeni bir dizi döndürür (elemanlarla dolu ya da boş)
 * - Geri dönen diziye, geriçağırma işlevinin koşullarını sağlayan elemanları ekler
 *    - Geriçağırma işlevi true döndürürse, eleman geri dönen diziye eklenir
 *    - Geriçağırma işlevi false döndürürse, eleman geri dönen diziye eklenmez
 *
 */
const numbers = [
    5,
    10,
    15,
    20,
    25
];
const filteredNumbers = numbers;
console.log(filteredNumbers);
/**
 * ---------------------------
 */
const allCars = [
    {
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false
    }
];
/**
 * filterByPrice işlevi, fiyatı aşağıdakilerden daha düşük olan araçların bir dizisini döndürsün
 * threshold parametresinin değeri.
 */
const filterByPrice = (cars, threshold) => {
};
// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));
/**
 * İndirimli arabaların dizisini döndüren getCarsWithDiscount fonksiyonu
 * Satışta olanların onSale özelliği true.
 */
const getCarsWithDiscount = cars => {
};
// console.table(getCarsWithDiscount(allCars));
/**
 * getCarsWithType işlevinin,
 * type parametresinin değeriyle eşleşen araçlar dizisini döndürdüğünden emin olun.
 */
const getCarsWithType = (cars, type) => {
};    // console.table(getCarsWithType(allCars, "suv"));
      // console.table(getCarsWithType(allCars, "sedan"));
