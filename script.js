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
    let read = '';
    let readStatus = document.querySelector('#read');
    readStatus.checked ? (read = 'Yes') : (read = 'No');
    let result = new Book(title, author, pages, read);
    myLibrary.push(result);
    display();
  });
}
addBookToLibrary();

div.classList.add('all-books');
function display() {
  div.innerHTML = `<h2>My Library</h2>`;
  myLibrary.forEach(element => {
    let p = document.createElement('p');
    p.innerHTML = `Title: ${element.title} <br> Author: ${element.author} <br> Pages: ${element.pages} <br> Read: ${element.read}`;
    p.setAttribute('class', 'book-shelf');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.setAttribute('class', 'delete-button');
    deleteBtn.addEventListener('click', function () {
      myLibrary.splice(myLibrary.indexOf(element), 1);
      display();
    });

    div.appendChild(p);
    p.appendChild(deleteBtn);
  });
  bookDetails.appendChild(div);
}
