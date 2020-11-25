let container = document.querySelector('.container');
let addBook = document.getElementById('add-book');
let form = document.querySelector('.add-book-form');
let submitForm = document.getElementById('submit-book');
let message = document.querySelector('.message');
let bookTitle = document.getElementById('book-title').value;
let bookAuthor = document.getElementById('book-author').value;
let bookPages = document.getElementById('book-pages').value;
let readChoice = document.getElementById('read-book').checked; 
let myLibrary = [];

let userBook = new Book(bookTitle, bookAuthor, bookPages, readChoice);

// hide form
form.style.display = 'none';

// display form
addBook.addEventListener('click', function() {
  form.style.display = 'block';
});

function Book(title, author, no_of_pages = 0, have_read = false) {
  this.title = title;
  this.author = author;
  this.no_of_pages = no_of_pages;
  this.have_read = have_read;
}

function addBookToLibrary(e)  {
  e.preventDefault();
  myLibrary.push(userBook);
}

function displayBook() {
  // create div el to contain the book object
  let bookParent = document.querySelector('#books');
  let book = document.createElement('div');
  let bookBody = document.createElement('div');
  let h3 = document.createElement('h3');
  let delBtn = document.createElement('button');
  let bookFooter = document.createElement('div');

  book.classList = 'card col-4';
  bookBody.classList = 'card-body';
  bookFooter.classList = 'card-footer';
  delBtn.classList = 'btn btn-md btn-danger';

  console.log('Here!');
  // for(let i = 0; i < myLibrary.length; i++) {
  //   console.log(myLibrary[i]);
  // }

  // for(let i = 0; i < myLibrary.length; i++) {
  //   h3.textContent = myLibrary[i][0];
  //   delBtn.textContent = 'Delete Book';
  //   bookBody.appendChild(h3);
  //   bookFooter.appendChild(delBtn);
  //   book.appendChild(book);
  //   book.appendChild(bookFooter);
  //   bookParent.appendChild(book);
  // }
}



submitForm.addEventListener('submit', addBookToLibrary);

displayBook();
