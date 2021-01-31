import AbstractView from './AbstractView.js';
// import { indexConst } from '../index.js';
import { addToIndex } from '../index.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Login');
  }
  // indexConst = indexConst + 'trolrol';

  async getHtml() {
    // console.log(indexConst + 'login login');
    addToIndex('ViewFromLogin');

    return `
    <h1>Welcome Login</h1>
    <p>bla bla bla</p>
    <a href='/books' class="nav__link" data-link>books</a>
      `;
  }
}
