const todoList = document.querySelector('.todo-list');

const completeButtons = document.querySelectorAll('.button-complete');
const deleteButtons = document.querySelectorAll('.button-delete');

const formElement = document.querySelector('.add-todo-form');
formElement.addEventListener('submit', addTodoItem);

function createRevertButton(){
    const revertButton = document.createElement('button');
    revertButton.innerHTML = 'Revert';
    revertButton.classList.add('button-revert');
    revertButton.addEventListener('click', revertCompletedItem);
    return revertButton;
}

completeButtons.forEach(btn => {

    btn.addEventListener('click', completeItem);
});

deleteButtons.forEach(btn => {

    btn.addEventListener('click', deleteItem);
});

function addTodoItem(e){
    e.preventDefault();
    const inputField = document.querySelector('.add-todo-form > input');
    const inputValue = inputField.value;

    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = inputValue;
    newTodoItem.classList.add('todo-item');

    addCompleteAndDeleteButtons(newTodoItem);
   
    todoList.appendChild(newTodoItem);
    inputField.value = null;
}

function addCompleteAndDeleteButtons(element){
    // element.innerHTML += '<inside><button class="button-complete">Complete</button><button class="button-delete">Delete</button></inside>';
    const inside = document.createElement('inside');
    
    inside.appendChild(addButtonComplete());
    inside.appendChild(addButtonDelete());

    element.appendChild(inside);
}

function addButtonComplete(){
    const buttonComplete = document.createElement('button');
    buttonComplete.classList.add('button-complete');
    buttonComplete.textContent = 'Complete';
    buttonComplete.addEventListener('click', completeItem);
    return buttonComplete;
}

function addButtonDelete(){
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('button-delete');
    buttonDelete.textContent = 'Delete';
    buttonDelete.addEventListener('click', deleteItem);
    return buttonDelete;
}

function completeItem(e){
    e.target.parentElement.parentElement.classList.add('completed');
    e.target.parentElement.insertBefore(createRevertButton(), e.target.parentElement.lastChild);
    e.target.remove();
} 

function deleteItem(e){
    e.target.parentElement.parentElement.remove();
}

function revertCompletedItem(e){
    e.target.parentElement.parentElement.classList.remove('completed');
    e.target.parentElement.insertBefore(addButtonComplete(), e.target.parentElement.lastChild);
    e.target.remove();
}