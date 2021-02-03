import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Collection');
  }

  async getHtml() {
    return `
    <div class="container dashboard-box mt-3 collectionContainer formContainer">
      <h1>Your collection</h1>
      <div class="row">
        <div class='col-md-6'>
            <form class='collectionForm' id='collectionForm'>
              <h4 class='formTitle'>Add a new book</h4>
              <div class='inputField userInput'>
                <label for='title' class='titleLbl inputLbl'>Title:</label>
                <input type='text' id='title' class='input inputTitle' required>
              </div>
              <div class='inputField userInput'>
                <label for='author' class='authorLbl inputLbl'>Author:</label>
                <input type='text' id='author' class='input inputAuthor'>
              </div>
              <div class='inputField userInput'>
              <label for='category' class='selectLbl inputLbl'>Category:</label>
                <select name="category" id="category" class='selectCategory'></select>
                <div class='containerNewCategory'>
                    <label for='selectNewCategory' class='newCatLbl inputLbl '>Add category: </label>
                    <input type='text' id='selectNewCategory' class='input inputNewCat '>
                    <button type='button'  class="btn btnAddCategory">Add category</button>
                    </div>                  
              </div>
              <div class='inputField userInput lastUserInput'>
              <label for='priority' class='priorityLbl inputLbl'>Priority:</label>
                <select name="priority" id="priority" class='selectPriority'>
                  <option value=1>1</option>
                  <option value=2>2</option>
                  <option value=3>3</option>
                  <option value=4>4</option>
                  <option value=5 selected>5</option>
                </select>
              </div>
              <div class='inputField userInput'>
                  <button type="submit" class="btn btnForm btnNewBook">Add book</button>
              </div>    
          </form>
          </div>
          <div class='col-md-6'>
          <h4 class='formTitle'>Your collection</h4>
            <p>druga</p>
          </div>
      </div>
  </div>
      `;
  }
}
