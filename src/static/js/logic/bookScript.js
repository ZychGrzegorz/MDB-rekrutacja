import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';
const bookScript = () => {
  let book;
  console.log('this is your book');
  console.log(location.pathname.match('/book/(.+)$'));

  //   jesli nie ma takiej ksiazki w bazie to
  //   navigateTo('/nopagefound');
  auth.onAuthStateChanged((user) => {
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((snapshot) => {
        book = snapshot.data().BooksCollection;
        console.log(location.pathname.match('/book/(.+)$')[1]);
        const thisBook = book.filter((el) => el.id == location.pathname.match('/book/(.+)$')[1]);
        console.log(thisBook);
      });
  });
};

export { bookScript };
