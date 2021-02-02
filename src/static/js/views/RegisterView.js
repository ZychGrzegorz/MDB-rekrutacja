import AbstractView from './AbstractView.js';

import {} from '../index.js';

export default class extends AbstractView {
  constructor(params, licznik) {
    super(params);
  }

  async getHtml() {
    return await `
    

    <div class="container register-box mt-3 formContainer">
      <h1>Sign up</h1>
      <form autocomplete="off" class="form-group register-form" id="signup-form">
        <div class='inputField userInput'>
          <label for="Name" class='nameLbl inputLbl'>Name</label>
          <input type="text" class="input inputName" id="name" required><br>
        </div>
        <div class='inputField userInput'>
          <label for="Email" class='emailLbl inputLbl'>Email</label>
          <input type="email" class="input inputEmail" id="email" required><br>
        </div>
        <div class='inputField userInput'>
          <label for="Password" class='passwordLbl inputLbl'>Password</label>
          <input type="password" class="input inputPassword" id="password" required minlength="6"><br>
        </div>
        <div class=" error signup-error  errorInfo" id="signupError"></div>
        <div class=" error signup-error2 errorInfo" id="signupError2"></div>
        <div class='inputField userInput'>
          <button type="submit" class="btn btnForm btnSignUp">Sign up</button>
        </div>    
      </form>
    </div>
           
      `;
  }
}
