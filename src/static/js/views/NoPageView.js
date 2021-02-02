import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Books');
  }

  async getHtml() {
    return `
    <h1>No page found</h1>
    <p>error 404</p>
      `;
  }
}
