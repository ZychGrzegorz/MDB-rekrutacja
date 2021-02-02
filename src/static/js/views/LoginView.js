import AbstractView from './AbstractView.js';

import {} from '../index.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Login');
  }

  async getHtml() {
    return `
    <div class=" container login-box mt-3 formContainer">
        <h1>Sign in</h1>
        <form class="signInForm login-form" id="login-form">
          <div class='inputField userInput'>
              <label for="email" class='emailLbl inputLbl'>Email</label>
              <input type="email" id="login-email" class="input inputEmail" required>
          </div>
          <div class='inputField userInput'>
              <label for="password" class='passwordLbl inputLbl'>Password</label>
              <input type="password" id="login-password" class="input inputPassword" required>
          </div>
          <div class="error login-error errorInfo" id="loginError"></div>
          <div class='inputField userInput'>
              <button type="submit" class="btn btnForm btnSignIn">Sign in</button>
          </div>
        </form>
    </div>
      `;
  }
}
