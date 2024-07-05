/**
 * İşlev parametrelerinde bir nesnenin yeniden yapılandırılması
 */
const user = {
  username: 'Jacob name',
  skills: {
    html: true,
    css: false,
    js: true
  }
};
// Yeniden yapılandırma olmadan
function getUserName(obj) {
  console.log(`Hello my name is ${ obj.name }, I know html - ${ obj.skills.html }, css - ${ obj.skills.css } and js -${ obj.skills.js }`);
}
// Yeniden yapılandırma ile
getUserName(user);