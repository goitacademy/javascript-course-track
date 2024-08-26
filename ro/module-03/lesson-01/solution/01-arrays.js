/**
 * Array-uri
 *
 * - Crearea unui array
 * - Accesul la elemente
 * - Suprascrierea valorii unui element
 * - Lungimea unui array
 * - Indexul ultimului element
 * - Suprascrierea valorilor
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
