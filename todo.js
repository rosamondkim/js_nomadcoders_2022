const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const toDos = []

function saveToDos(){
    localStorage.setItem("todos",toDos);
}

function deleteTodo(event){
    const deleteLi =event.target.parentElement;
    deleteLi.remove();
}

function paintTodo(tomato){
   const listItem = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = tomato;

    const btn = document.createElement("button");
    btn.innerText= "❌"
    btn.addEventListener("click",deleteTodo);
    listItem.appendChild(span);
    listItem.prepend(btn);
 
    todoList.appendChild(listItem);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos()
};

todoForm.addEventListener("submit",handleTodoSubmit);

