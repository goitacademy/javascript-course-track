/**
 * calculateHousePerimeter fonksiyonunun yeniden düzenlenmesi gerekmektedir,
 * böylece evin parametrelerini içeren bir nesneyi kabul eder,
 * Evin kenar uzunlukları da dahil olmak üzere.
 * Fonksiyon evin çevresini hesaplamalı ve döndürmelidir.
 */
function calculateHousePerimeter({sideA, sideB, sideC, sideD}) {
  const perimeter = sideA + sideB + sideC + sideD;
  return perimeter;
}
const house = {
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15
};
const perimeter = calculateHousePerimeter(house);
console.log(`Ev Perimeter: ${ perimeter }`);