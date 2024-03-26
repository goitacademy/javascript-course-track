/**
 * Napisz klasę Storage, która tworzy obiekty do zarządzania magazynem towarów.
 * Po wywołaniu będzie ona pobierać jeden argument - początkową tablicę towarów i
 * zapisywać jej właściwość items.
 *
 * Dodaj metody klasy:
 * - getItems() - zwraca tablicę elementów.
 * - addItem(item) - pobiera nowy element i dodaje go do bieżących.
 * - removeItem(item) - pobiera element i, jeśli istnieje, usuwa go z bieżących.
 */
const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
