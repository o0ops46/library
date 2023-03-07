'use strict';
const bookDetails = document.querySelector('.myLibrary');
const addBookBtn = document.querySelector('.addBookBtn');
let div = document.createElement('div');
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
    console.log(myLibrary);
    display();
  });
}
addBookToLibrary();

div.classList.add('all-books');
function display() {
  div.innerHTML = '';
  myLibrary.forEach(element => {
    let p = document.createElement('p');
    p.innerHTML = `${element.title} ${element.author} ${element.pages} ${element.read}`;
    div.appendChild(p);
  });
  bookDetails.appendChild(div);
}
