import AbstractView from './AbstractView.js';
import { indexConst } from '../index.js';
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Books View');
  }
  indexConst = indexConst + 'trolrol';

  async getHtml() {
    console.log(indexConst + 'bababab');
    console.log(this.params.id);
    return `
    <h1>Welcome Books</h1>
    <p>POOOOOOOOOOST</p>
    <a href='/books' class="nav__link" data-link>books</a>
      `;
  }
}
