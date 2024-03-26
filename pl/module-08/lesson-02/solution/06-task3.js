/**
 * Przeprowadź refaktoryzację funkcji calculateHousePerimeter,
 * aby pobierała ona obiekt z parametrami domu, w tym 
 * długościami jego boków.
 * Funkcja powinna obliczyć i zwrócić obwód domu.
 */

function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
  const perimeter = sideA + sideB + sideC + sideD;
  return perimeter;
}

const house = {
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
};

const perimeter = calculateHousePerimeter(house);
console.log(`Obwód domu: ${perimeter}`);
