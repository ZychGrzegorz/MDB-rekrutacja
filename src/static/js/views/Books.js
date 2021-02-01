import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Books');
  }

  async getHtml() {
    return `
    <h1>Welcome Books</h1>
    <p>POOOOOOOOOOST</p>
    <a href='/books' class="nav__link" data-link>books</a>
      `;
  }
}
