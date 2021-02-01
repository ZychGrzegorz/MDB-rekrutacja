import AbstractView from './AbstractView.js';

import { addToIndex } from '../index.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Register');
  }

  async getHtml() {
    addToIndex('ViewFromLogin');

    return `
    <h1>Welcome Register</h1>
      <div class="modal-body">
                    <form autocomplete="off" class="form-group" id="signup-form">
                        <label for="">Name</label>
                        <input type="text" class="form-control" id="name" required><br>
                        <label for="">Email</label>
                        <input type="email" class="form-control" id="email" required><br>
                        <label for="">Password</label>
                        <input type="password" class="form-control" id="password" required minlength="6"><br>
                        <button type="submit" class="btn btn-primary">REGISTER</button>
                    </form>
                </div>
                <div class="container error" id="signupError"></div>
                <div class="container error" id="signupError2"></div>
              
            </div>
      `;
  }
}
