import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';
const booksScript = () => {
  console.log('tu ma byc wyszukiwarka ksiazek');
  //   console.log('this is your book');
  //   console.log(location.pathname.match('/book/(.+)$'));
  //   jesli nie ma takiej ksiazki w bazie to
  //   navigateTo('/nopagefound');
};

export { booksScript };
