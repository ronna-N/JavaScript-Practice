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

  for (let i = 0; i < todoArray.length; i++) {

    const todoObject = todoArray[i];

    //deconstruction method for object by taking out the property out of the object and put its in the variable calls name
    const { name } = todoObject;
    //const name = todoObject.name;
    const { dueDate } = todoObject;
    //const dueDate = todoObject.dueDate;

    console.log(i, todoObject)

    const html = `

      <div>${name}</div>
      <div >${dueDate}</div>
      <button class="deleteButton" onClick="
      todoArray.splice(${i}, 1);
      renderTodoList();">Delete</button>

    ` //here use to generate html code by loops
    todoArrayHTML += html;
  }
  document.querySelector('.js-addTodoList').innerHTML = todoArrayHTML;
}

function Enter(event) {
  console.log(event.key);
  if (event.key === 'Enter') {
    addTodos();
  }
}

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
