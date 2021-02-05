import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Search');
  }

  async getHtml() {
    return `
    <div class="container dashboard-box mt-3 collectionContainer formContainer">
      <h4 class='searchTitle'>Search:</h1>
      <div class="row">
        <div class='col-md-6'>
        <form autocomplete="off" class=" form-group search-form" id="signup-form">
          <div class='inputField searchInput'>
            <label for="searchInput" class='searchLbl inputLbl'>Search book:</label>
            <input type="text" class="input searchInput" id="searchInput" required><br>
          </div>
        <button type="submit" class="btn btnForm btnSearchBook">Search</button>
        </form>
        <p>Back to <a href='/' class="nav__link" data-link>Collection</a></p>
        </div>
        <div class='col-md-6'>
        <div class="container searchBooksCollectionContainer">
          <div class="containerBook" id="1612397143542">
            <div class="bookData">
              <span class="titleSpan">Title: zzz</span>
              <span class="authorSpan">Author: zzz</span>
              <span class="categorySpan">Category: Crime story</span>
              <span class="prioritySpan">Priority: 5</span></div>
                <div class="bookActionsContainer">
                  <input class="btnEdit" type="image" src="/static/img/edit.svg">
                  <input class="btnDelete" type="image" src="/static/img/x.svg">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}
