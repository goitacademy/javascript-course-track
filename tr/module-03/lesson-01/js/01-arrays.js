/**
 * Diziler
 *
 * - Dizi oluşturma
 * - Unsurlara erişim
 * - Bir öğenin değerini geçersiz kılma
 * - Dizinin uzunluğu
 * - Son öğenin dizini
 * - Geçersiz kılmalar
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
console.table(courses);
console.log([0]);
console.log([1]);
console.log([2]);
console.log([3]);

courses[1] = "Jacob";
courses[3] = "Adrian";
console.table(courses);

console.log(courses.length);

const lastIndex = courses.length - 1;
console.log(lastIndex);
