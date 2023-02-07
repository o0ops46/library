'use strict';

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let form = document.createElement('form');
  //style the form
  form.setAttribute(
    'style',
    'display: flex; flex-direction: column; width: 300px;'
  );
  //getting the title
  let titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.placeholder = 'Please enter the title for this book';

  // append to the form
  form.appendChild(titleInput);
  //getting the author
  let authorInput = document.createElement('input');
  authorInput.type = 'text';
  authorInput.placeholder = 'Please enter the author for this book';
  form.appendChild(authorInput);
  //get the number of pages
  let pagesInput = document.createElement('input');
  pagesInput.type = 'number';
  pagesInput.placeholder = 'How many pages has this book?';
  form.appendChild(pagesInput);
  // get the read status
  let readInput = document.createElement('input');
  readInput.type = 'text';
  readInput.placeholder = 'Have you read this book?';
  form.appendChild(readInput);
  // create submit button
  let submitButton = document.createElement('button');
  submitButton.setAttribute(
    'style',
    'width: 70px; margin-top: 5px;margin-left: 30%;'
  );
  submitButton.innerHTML = 'Submit';
  form.appendChild(submitButton);

  //get the library container
  let libraryContainer = document.getElementById('library-container');
  libraryContainer.appendChild(form);
  //push the new book to the myLibrary array
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.value;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayLibrary();
  });
}

//  display myLibrary
function displayLibrary() {
  let table = document.querySelector('table');
  let headerRow = document.querySelector('.headerRow');
  let titleHeader = document.querySelector('.titleHeader');
  titleHeader.innerHTML = 'Title';
  headerRow.appendChild(titleHeader);
  let authorHeader = document.querySelector('.authorHeader');
  authorHeader.innerHTML = 'Author';
  headerRow.appendChild(authorHeader);
  let pagesHeader = document.querySelector('.pagesHeader');
  pagesHeader.innerHTML = 'Pages';
  headerRow.appendChild(pagesHeader);
  let readHeader = document.querySelector('.readHeader');
  readHeader.innerHTML = 'Read';
  headerRow.appendChild(readHeader);
  table.appendChild(headerRow);
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookRow = document.createElement('tr');
    let titleData = document.createElement('td');
    titleData.innerHTML = book.title;
    bookRow.appendChild(titleData);
    let authorData = document.createElement('td');
    authorData.innerHTML = book.author;
    let pagesData = document.createElement('td');
    pagesData.innerHTML = book.pages;
    bookRow.appendChild(pagesData);
    let readData = document.createElement('td');
    readData.innerHTML = book.read;
    bookRow.appendChild(readData);
    table.appendChild(bookRow);
  }
}
addBookToLibrary();
displayLibrary();
