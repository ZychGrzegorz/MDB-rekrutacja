import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';

const searchScript = async () => {
  let searchResult;
  //   navigateTo('/nopagefound');
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
    const spanCategory = document.createElement('span');
    spanCategory.classList.add('categorySpan');
    spanCategory.innerText = 'Category: ' + el.category;
    const spanPriority = document.createElement('span');
    spanPriority.classList.add('prioritySpan');
    spanPriority.innerText = 'Priority: ' + el.priority;

    bookData.appendChild(spanTitle);
    bookData.appendChild(spanAuthor);
    bookData.appendChild(spanCategory);
    bookData.appendChild(spanPriority);

    const bookActionsContainer = document.createElement('div');
    bookActionsContainer.classList.add('bookActionsContainer');
    containerBook.appendChild(bookActionsContainer);
  };
  const searchBook = () => {
    console.log('search');
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://data.bn.org.pl/api/bibs.json?title=harry'; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then((response) => response.text())
      .then((contents) => () => {
        console.log('success');
        console.log(contents);
      })
      .catch(() => console.log('Can’t access ' + url + ' response. Blocked by browser?'));
  };

  searchBook();
};

export { searchScript };
