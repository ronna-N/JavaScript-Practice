const todoArray = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
},
{
  name: 'make dishes',
  dueDate: '2022-12-22'
}];
console.log(todoArray);

renderTodoList(); //to display the default values of array

function renderTodoList() {

  let todoArrayHTML = '';

  todoArray.forEach((todoObject, index) => {

    const { name, dueDate } = todoObject;
    console.log(index, todoObject)

    const html =
      `
      <div>${name}</div>
      <div >${dueDate}</div>
      <button class="deleteButton js-delete-todo">Delete</button>

    ` //here use to generate html code by loops
    todoArrayHTML += html;

  });
  document.querySelector('.js-addTodoList').innerHTML = todoArrayHTML;
  //we create delete Event here bc the line above is where the todo list HTML generate so we also create class .js-delete-todo here then we do addEventListener here
  //we use forEach to loop all of the .js-delete-todo that select by document.querySelectorAll
  document.querySelectorAll('.js-delete-todo').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoArray.splice(index, 1);
      renderTodoList();
    })
  })
}

function Enter(event) {
  console.log(event.key);
  if (event.key === 'Enter') {
    addTodos();
  }
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => { addTodos(); })


function addTodos() {
  const todosElement = document.querySelector('.js-input');
  const dueDateElement = document.querySelector('.js-input-dueDate');
  let name = todosElement.value;
  let dueDate = dueDateElement.value;

  todoArray.push({
    name,
    dueDate,
    //short hand properties
    //name: todos,
    //dueDate: dueDate,
  });
  //console.log(todoArray);
  todosElement.value = '';
  //use to display an array value after adding the values to the array if we don't use the new values will not be appear
  //localStorage.setItem('todoArray1', JSON.stringify(todo1Array));
  renderTodoList();

}
