/**
 * Tablice
 *
 * - Tworzenie tablicy
 * - Dostęp do elementów
 * - Nadpisywanie wartości elementu
 * - Długość tablicy
 * - Indeks ostatniego elementu
 * - Nadpisywanie
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
console.table(courses);
console.log([0]);
console.log([1]);
console.log([2]);
console.log([3]);

courses[1] = "Node.js";
courses[3] = "Next.js";
console.table(courses);

console.log(courses.length);

const lastIndex = courses.length - 1;
console.log(lastIndex);
