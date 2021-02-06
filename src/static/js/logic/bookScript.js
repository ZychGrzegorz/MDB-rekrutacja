import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';

const bookScript = () => {
  let thisBook;
  let book;
  let userBooksCategory;
  let userData;
  let booksId = [];

  const title = document.querySelector('.editTitleInput');
  const author = document.querySelector('.editAuthorInput');
  const categorySelect = document.querySelector('.editSelectCategory');
  const prioritySelect = document.querySelector('.editSelectPriority');
  const btnSubmitEdit = document.querySelector('.editBookForm');

  auth.onAuthStateChanged((user) => {
    const renderSelect = () => {
      db.collection('users')
        .doc(user.uid)
        .get()
        .then((snapshot) => {
          userData = snapshot.data();
          userBooksCategory = snapshot.data().BooksCategory;
          for (let book in userData.BooksCollection) {
            booksId.push(userData.BooksCollection[book].id);
          }
          if (!booksId.includes(+location.pathname.split('/')[2])) {
            console.log('not in data base');
            navigateTo('/nopagefound');
          }
          if (userBooksCategory) {
            for (let el in userBooksCategory) {
              const option = document.createElement('option');
              option.value = userBooksCategory[el];
              option.textContent = userBooksCategory[el];
              categorySelect.appendChild(option);
            }
          }
        });
    };
    renderSelect();

    db.collection('users')
      .doc(user.uid)
      .get()
      .then((snapshot) => {
        book = snapshot.data().BooksCollection;
        thisBook = book.filter((el) => el.id == location.pathname.match('/book/(.+)$')[1]);
        if (!thisBook) {
          navigateTo('/nopagefound');
        }
        if ((title, author, categorySelect, prioritySelect)) {
          title.value = thisBook[0].title;
          author.value = thisBook[0].author;

          const catSel = categorySelect.getElementsByTagName('option');
          for (let el of catSel) {
            if (el.value == thisBook[0].category) {
              el.selected = 'selected';
            }
          }

          const prioritySel = prioritySelect.getElementsByTagName('option');
          for (let el of prioritySel) {
            if (el.value == thisBook[0].priority) {
              el.selected = 'selected';
            }
          }

          btnSubmitEdit.addEventListener('submit', async (e) => {
            e.preventDefault();
            userData.BooksCollection.forEach((el) => {
              if (el.id == thisBook[0].id) {
                el.title = title.value;
                el.author = author.value;
                el.category = categorySelect.value;
                el.priority = prioritySelect.value;
              }
            });
            await db
              .collection('users')
              .doc(user.uid)
              .update({
                BooksCollection: userData.BooksCollection,
              })
              .then(() => {
                console.log('Book updated');
                navigateTo('/');
              });
          });
        }
      });
  });
};

export { bookScript };
