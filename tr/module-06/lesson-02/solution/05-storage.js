/**
 * Mal deposunu yönetmek için nesneler oluşturan bir Storage sınıfı yazın.
 * Çağrıldığında, bir argüman alacaktır - malların ilk dizisi ve
 * items özelliğini yazın.
 *
 * Sınıfın yöntemlerini ekleyin:
 * - getItems() - Ürün dizisini döndürür.
 * - addItem(item) - Yeni bir ürün alır ve mevcut ürünlere ekler.
 * - removeItem(item) - Ürün alır ve varsa mevcut ürünlerden kaldırır.
 */
const storage = new Storage([
    '🍎',
    '🍋',
    '🍇',
    '🍑'
]);
const items = storage.getItems();
console.table(items);
// [ '🍎', '🍋', '🍇', '🍑' ]
storage.addItem('🍌');
console.table(storage.items);
// [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
storage.removeItem('🍋');
console.table(storage.items);    // [ '🍎', '🍇', '🍑', '🍌' ]
