import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('You have been signed out');
  }

  async getHtml() {
    return `
    <div class=" container login-box mt-3 formContainer">
        <h1>You have been signed out</h1>
        
    </div>
      `;
  }
}
