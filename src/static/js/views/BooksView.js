import AbstractView from './AbstractView.js';
import { addToIndex } from '../index.js';
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Books View');
  }
  //   indexConst = indexConst + 'trolrol';

  async getHtml() {
    addToIndex('ViewFromBooksView');
    return `
    <h1>Welcome Books</h1>
    <p>POOOOOOOOOOST</p>
    <a href='/books' class="nav__link" data-link>books</a>
      `;
  }
}
