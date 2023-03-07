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
function addBookToLibrary() {
  addBookBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    let result = new Book(title, author, pages, read);
    myLibrary.push(result);
    display();
  });
}
//call addBookToLibrary
addBookToLibrary();
//
function display() {
  myLibrary.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('all-books');
    div.innerHTML = '';
    div.innerHTML = `${element.title} ${element.author} ${element.pages} ${element.read}`;
    document.body.appendChild(div);
  });
}
