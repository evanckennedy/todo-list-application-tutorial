## To-Do List Application
In this tutorial, you will learn how to create a basic to-do list application using HTML, CSS, and JavaScript.

### Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- A text editor or code editor (like VS Code, Sublime Text, or Notepad++).
- A web browser to view your results.

### Setting Up the HTML Structure
The core structure of our to-do list is defined within the body of your HTML file:

```html
<div class="todo-container">
    <!-- Title of the to-do list -->
    <h2>To-Do List</h2>
    <!-- Input field and add button -->
    <div class="row">
        <!-- Input field for adding new tasks -->
        <input type="text" class="todo-input" placeholder="Add new task">
        <!-- Button to add new tasks -->
        <button class="add-todo-button">Add</button>
    </div>
    <!-- List of tasks -->
    <ul class="todo-list-container">
        <!-- List items will be dynamically added here -->
    </ul>
</div>
```
- We have a main container (todo-container) to hold everything.
- An input field (todo-input) to type in tasks.
- An "Add" button (add-todo-button).
- An unordered list (todo-list-container) to display tasks.

### Styling with CSS (Optional)
The most important parts of styling are ensuring the list items display 
correctly and adding a bit of style to the button. (Be sure to modify the padding 
and margin to suit your preference.)

```css
.todo-container {
    max-width: 500px;      /* Limits the maximum width of the container */
    width: 100%;           /* Takes up full available width */
    margin-inline: auto;   /* Centers the container horizontally */
    border-radius: 10px;   /* Adds rounded corners */
    padding: 25px 25px 60px; /* Creates space around content */
}

.todo-container h2 {
    margin-bottom: 13px;   /* Adds space between the title and the input row */
}

.row {
    display: flex;          /* Arranges input and button side-by-side */
    align-items: center;    /* Vertically centers input and button */
    justify-content: space-between; /* Adds space between input and button */
    border-radius: 25px;    /* Rounded corners for the input row */
    padding-left: 17px;     /* Adds left padding to the input row */
    margin-bottom: 20px;    /* Adds space below the input row */
}

.todo-input {
    flex: 1;                /* Input field takes up available space */
    padding: 8px;           /* Adds padding around the input text */
}

button {
    cursor: pointer;        /* Changes cursor to a hand on hover */ 
    border-radius: 25px;    /* Rounded button corners */
    padding: 8px 20px;      /* Adds spacing around button text */
}

ul {
    list-style-type: none;  /* Removes default bullet points */
}

ul li {
    padding: 0 10px;        /* Adds a small padding to list items */
    cursor: pointer;        /* Changes cursor on hover */
    position: relative;     /* For positioning the delete 'x' */
}

ul li.completed {
    text-decoration: line-through; /* Adds a line through completed tasks */
}

ul li span { 
    position: absolute;     
    height: 35px; 
    width: 35px;
    border-radius: 50%;     /* Makes the 'x' button circular */
    font-size: 20px;
    top: -6px;              /* Positions the 'x' slightly above  */
    right: 0;               /* Positions the 'x' on the right */
    line-height: 35px;      /* Centers the 'x' vertically  */
    text-align: center;     /* Centers the 'x' horizontally */ 
}

```

This is a very basic styling. Refer to main.css for more!

### Implement JavaScript Functionality
The following JavaScript code makes your to-do list functional:

- Select the input field, button, and list container
```javascript
const input = document.querySelector('.todo-input');
const listContainer = document.querySelector('.todo-list-container');
const addButton = document.querySelector('.add-todo-button');
```

- Create a function to add that displays the inputted taks below the input-field
```javascript
const addTask = () => {
  if (input.value !== '') { // Check if there's any text in the input
    const li = document.createElement('li'); // Create a list item 
    li.innerHTML = input.value; // Set the text of the list item
    listContainer.appendChild(li); // Add the item to the list

    const span = document.createElement('span'); // Create delete button
    span.innerHTML = '\u00d7'; // 'x' symbol 
    li.appendChild(span) // Add delete button to the item
  }

  input.value = ''; // Clear the input field 
};
```

- Call the addTask function if the add button is clicked or the "enter" key is
pressed
```javascript
addButton.addEventListener('click', addTask);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
```

- Create a function This function handles the logic for clicking on list items 
and the 'x' delete button.
```javascript
const modifyTasks = (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed'); // Toggle 'completed' class for styling
  } else if (event.target.tagName === 'SPAN') {
    event.target.parentElement.remove(); // Remove the task item
  }
};
```
- Add the Event Listener
```javascript
listContainer.addEventListener('click', modifyTasks); 
```

To summarize the JavaScript implemntation: 
- We select the input field, button, and list container.
- The addTask function handles creating new list items and adding them to the list.
- Event listeners trigger addTask when the button is clicked or Enter is pressed.
- Clicking on list items will toggle the completed class, and clicking the 'x' 
will delete them.

### Customization and Further Development
This is a very basic foundation! Here are some ideas to enhance your project:

- Local Storage: Explore using JavaScript's localStorage to save tasks even after you close the browser.
- More Styling: Use CSS to make your to-do list visually appealing.
- Task Editing: Add the ability to edit existing tasks.

### Demo
Click [here](https://evanckennedy.github.io/todo-list-application-tutorial/) to test the application