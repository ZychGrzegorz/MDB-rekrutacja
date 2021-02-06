import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Book id: ' + location.pathname.slice(6));
    this.number = location.pathname.slice(6);
  }

  async getHtml() {
    return `
    <div class="container searchBooksCollectionContainer">
    <h1 class='pageTitle'>This is Book: ${this.number}</h1>
    <div class="container" id="1612397143542">
    <div class="bookData">
        <h4>Book details: </h4>
        <form class='editBookForm' id='editBookForm'>

           <div class='editInfoRow'>
            <span class="titleSpan bookTitle">Title:</span>
            <input type="text" class="input editTitleInput" id="searchInput" required>
           </div>

           <div class='editInfoRow'>
            <span class="authorSpan bookAuthor">Author:</span>
            <input type="text" class="input editAuthorInput" id="searchInput" required>
            </div>
           
            <div class='editInfoRow'>
            <span class="categorySpan bookCategory">Category:</span>
              <select name="category" id="category" class="editSelectCategory">
              </select>
              </div>

           <div class='editInfoRow'>
            <span class="prioritySpan bookPriority">Priority:</span><select name="priority" id="priority" class="editSelectPriority">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>

          <div class='inputField userInput'>
             <button type="submit" class="btn btnForm btnSubmitEdit ">Save</button>
          </div>    
           
          </div>
          <p>Go back to your <a href='/' class="nav__link" data-link>collection</a></p>
          </form>
        </div>
      </div>
    </div>
      `;
  }
}
