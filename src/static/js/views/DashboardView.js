import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
    <h1>Welcome Dashboard</h1>
    <p>bla bla bla</p>
    <a href='/books' class="nav__link" data-link>books</a>
      `;
  }
}
