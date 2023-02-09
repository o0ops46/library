'use strict';

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// create a new book
let book1 = new Book('ahile', 'morar', 201, true);
// add the new book to the myLibrary array
function addBookToLibrary() {
  myLibrary.push(book1);
}
//call addBookToLibrary
addBookToLibrary();
//
myLibrary.forEach(element => {
  let div = document.createElement('div');
  document.body.appendChild(div);
});
