import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Search');
  }

  async getHtml() {
    return `
    <h1>Welcome Search</h1>
    <p>fetch</p>
    <a href='/' class="nav__link" data-link>back to collection</a>
      `;
  }
}
