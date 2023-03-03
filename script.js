'use strict';
// select elements
const bookDetails = document.querySelector('.myLibrary');
//select the button that is adding the books
const addBookBtn = document.querySelector('.addBookBtn');
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
  let title = prompt('what is the title?');
  let author = prompt('what is the author?');
  let pages = prompt('how many pages?');
  let read = prompt('Have you read it?');
  let result = new Book(title, author, pages, read);
  myLibrary.push(result);
}
//call addBookToLibrary
// addBookToLibrary();
//
function display() {
  myLibrary.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('all-books');
    div.innerHTML = `${element.title} ${element.author} ${element.pages} ${element.read}`;
    document.body.appendChild(div);
  });
}
