'use strict';

// ELEMENT SELECTION
const input = document.querySelector('.todo-input');
const listContainer = document.querySelector('.todo-list-container');
const addButton = document.querySelector('.add-todo-button');

// TODO LIST
const addTask = () => {
  if (input.value !== '') {
    const li = document.createElement('li');
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span)
  }

  input.value = '';
  saveData();
};

addButton.addEventListener('click', addTask);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

const modifyTasks = (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
    saveData();
  } else if (event.target.tagName === 'SPAN') {
    event.target.parentElement.remove();
    saveData();
  }
};

listContainer.addEventListener('click', modifyTasks);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data")
};

showTask();