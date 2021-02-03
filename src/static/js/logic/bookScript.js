import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';
const bookScript = () => {
  console.log('this is your book');
  console.log(location.pathname.match('/book/(.+)$'));

  //   jesli nie ma takiej ksiazki w bazie to
  //   navigateTo('/nopagefound');
};

export { bookScript };
