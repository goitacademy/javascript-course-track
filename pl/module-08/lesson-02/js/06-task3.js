/**
 * Przeprowadź refaktoryzację funkcji calculateHousePerimeter,
 * aby pobierała ona obiekt z parametrami domu, w tym 
 * długościami jego boków.
 * Funkcja powinna obliczyć i zwrócić obwód domu.
 */

function calculateHousePerimeter(a, b, c, d) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const perimeter = calculateHousePerimeter(10, 15, 10, 15);
console.log(`Obwód domu: ${perimeter}`);
