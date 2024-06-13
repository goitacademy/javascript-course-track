/**
 * Nesneler
 *
 * - Nesne oluşturma
 * - İç içe geçmiş özellikler
 * - Bir nokta aracılığıyla özelliklere erişim
 * - İç içe geçmiş özelliklere erişim
 * - Köşeli parantezler aracılığıyla özelliklere erişim
 * - Bir özelliğin değerini değiştirme
 * - Özellik ekleme
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
};

/**
 * -----------------------------------
 */
const propertyName = "tracks";

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}
