/**
 * - input olayı
 * - blur olayı
 *
 * Kullanıcının input alanına girdiği her şeyi konsola yazdırın
 */
const userName = document.querySelector('.js-user-name');
userName.addEventListener('input', handleInput);
function handleInput(evt) {
  console.log(evt.currentTarget.value);
}
/**
 * Kullanıcı kaybettikten sonra ismini input alanına girer
 * Odakta olduğunda bir alert ile selamlaşan bir ileti alır
 */
userName.addEventListener('blur', handlerGreeting);
function handlerGreeting(evt) {
  const name = evt.currentTarget.value;
  alert(`${ name }, I'm very glad to see you`);
}