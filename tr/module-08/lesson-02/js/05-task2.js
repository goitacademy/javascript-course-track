/**
 * Bir fonksiyon ekleyin, böylece her bir özellik
 * product nesnesinin bağımsız bir parametre olması
 */
const product = {
  name: 'Smart TV',
  price: 25000,
  category: 'Electronics',
  details: {
    brand: 'Samsung',
    color: 'Black',
    weight: '15.5'
  }
};
function displayProductInfo() {
  console.log(`Ürün adı: ${ name }`);
  console.log(`Fiyat: ${ price } try`);
  console.log(`Kategori: ${ category }`);
  console.log('Detaylar:');
  console.log(`- Marka: ${ brand }`);
  console.log(`- Renk: ${ color }`);
  console.log(`- Ağırlık: ${ weight } kg`);
}
displayProductInfo(product);