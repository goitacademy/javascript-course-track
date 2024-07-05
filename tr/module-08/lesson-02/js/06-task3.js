/**
 * calculateHousePerimeter fonksiyonunun yeniden düzenlenmesi gerekmektedir,
 * böylece evin parametrelerini içeren bir nesneyi kabul eder,
 * Evin kenar uzunlukları da dahil olmak üzere.
 * Fonksiyon evin çevresini hesaplamalı ve döndürmelidir.
 */
function calculateHousePerimeter(a, b, c, d) {
  const perimeter = a + b + c + d;
  return perimeter;
}
const perimeter = calculateHousePerimeter(10, 15, 10, 15);
console.log(`Ev Perimeter: ${ perimeter }`);