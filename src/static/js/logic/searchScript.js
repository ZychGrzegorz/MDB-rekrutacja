import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';

const searchScript = async () => {
  const creatingCards = () => {
    const booksCollectionContainer = document.querySelector('searchBooksCollectionContainer');
    const containerBook = document.createElement('div');
    containerBook.classList.add('containerBook');
    booksCollectionContainer.appendChild(containerBook);
    const bookData = document.createElement('div');
    bookData.classList.add('bookData');
    containerBook.appendChild(bookData);

    const spanTitle = document.createElement('span');
    spanTitle.classList.add('titleSpan');
    spanTitle.innerText = 'Title: ' + el.title;
    const spanAuthor = document.createElement('span');
    spanAuthor.classList.add('authorSpan');
    spanAuthor.innerText = el.author ? 'Author: ' + el.author : 'Author: no data';

    bookData.appendChild(spanTitle);
    bookData.appendChild(spanAuthor);

    const bookActionsContainer = document.createElement('div');
    bookActionsContainer.classList.add('bookActionsContainer');
    containerBook.appendChild(bookActionsContainer);
  };
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.searchInput');
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    searchBook(searchInput.value);
  });

  const searchBook = (book) => {
    const bookAddress = book.split(' ').join('+');

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://data.bn.org.pl/api/bibs.json?title=';
    fetch(proxyUrl + url + bookAddress) // https://cors-anywhere.herokuapp.com/https://example.com
      .then((response) => response.text())
      .then((contents) => () => {
        console.log('success');
        console.log(contents);
      })
      .catch(() =>
        console.log('Can’t access ' + url + bookAddress + ' response. Blocked by browser?')
      );
  };
  const btnAdd = document.querySelectorAll('.btnAdd');

  btnAdd.forEach((el) => {
    el.addEventListener('click', () => {
      alert('This book would be added to your collection');
      navigateTo('/');
    });
  });
};

export { searchScript };
