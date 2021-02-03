import AbstractView from './AbstractView.js';
import {} from '../index.js';
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Book id');
    this.number = location.pathname.slice(6);
  }

  async getHtml() {
    return `
    <h1>This is Book ${this.number}</h1>
    <p>Book details </p>
    <p>Go back to your <a href='/' class="nav__link" data-link>collection</a></p>
      `;
  }
}
