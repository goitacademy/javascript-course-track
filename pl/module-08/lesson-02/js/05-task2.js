/**
 * Uzupełnij funkcję tak, aby każda właściwość
 * obiektu product była niezależnym parametrem
 */

const product = {
  name: "Smart TV",
  price: 25000,
  category: "Electronics",
  details: {
    brand: "Samsung",
    color: "Black",
    weight: "15.5",
  },
};

function displayProductInfo() {
  console.log(`Nazwa produktu: ${name}`);
  console.log(`Cena: ${price} uah`);
  console.log(`Kategoria: ${category}`);
  console.log("Szczegóły:");
  console.log(`- Brand: ${brand}`);
  console.log(`- Kolor: ${color}`);
  console.log(`- waga: ${weight} kg`);
}

displayProductInfo(product);
