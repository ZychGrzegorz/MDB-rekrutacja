import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Search');
  }

  async getHtml() {
    return `
    <div class="container dashboard-box mt-3 collectionContainer formContainer">
      <h1 class='pageTitle'>Search:</h1>
      <div class="row">
        <div class='col-md-6'>
        <form autocomplete="off" class=" form-group search-form" id="signup-form">
          <div class='inputField searchInputContainer'>
            <label for="searchInput" class='searchLbl inputLbl'>Search book:</label>
            <input type="text" class="input searchInput" id="searchInput" value='Harry' required><br>
          </div>
        <button type="submit" class="btn btnForm btnSearchBook">Search</button>
        </form>
        
        </div>
        <div class='col-md-6'>
        <div class="container searchBooksCollectionContainer">
          <div class="containerBook">
            <div class="bookData">
              <span class="titleSpan">Title: Harry Potter</span>
              <span class="authorSpan">Author: J. K. Rowling</span>     
            </div>        
            <div class="bookActionsContainer">
              <input class="btnAdd" type="image" src="/static/img/plus.svg">
            </div>        
          </div>
          <div class="containerBook">
            <div class="bookData">
              <span class="titleSpan">Title: Harry.JS</span>
              <span class="authorSpan">Author: JS Community</span>     
            </div>        
            <div class="bookActionsContainer">
              <input class="btnAdd" type="image" src="/static/img/plus.svg">
            </div>        
          </div>
          <div class="containerBook">
            <div class="bookData">
              <span class="titleSpan">Title: Skyharry in the mountains</span>
              <span class="authorSpan">Author: H. Thomas</span>     
            </div>        
            <div class="bookActionsContainer">
              <input class="btnAdd" type="image" src="/static/img/plus.svg">
            </div>        
          </div>
        </div>
        </div>
        
        <p class='searchLink' style='color: red'>This section is not working. I did not find any apropriate book API for this section.</p>
      </div>
    
    </div>
      `;
  }
}
