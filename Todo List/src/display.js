import mainHandler from "./mainHandler"
import { editTodo, deleteTodo, changeCompleted } from "./buttonListeners.js";

export function projectDisplay() {
    let projects = document.querySelector(".projects");
    projects.textContent = "";
    let projectList = mainHandler.getProjectList();
    projectList.forEach(project => {
        let project_item = document.createElement("div");
        project_item.classList.add("project_item");

        let project_heading = document.createElement("button");
        project_heading.classList.add("project");
        project_heading.addEventListener("click", () => {
            let todos = document.querySelector(".todos");
            todos.textContent = "";
            showProjectTodo();
        });
        project_heading.textContent = project.name;
    
        project_item.appendChild(project_heading);
        projects.appendChild(project_item);
    });
}

export function todoDisplay(project,completed=null,important=null){
    let projectList = mainHandler.getProjectList();
    let index = projectList.findIndex(x => x.name == project);

    projectList[index].todosList.forEach(todo => {
        todoDisplayDOM(projectList[index].name, todo);
    });
}

export function allDisplay(){
    let todos = document.querySelector(".todos");
    todos.textContent = "";
    let projectList = mainHandler.getProjectList();
    projectList.forEach(project => todoDisplay(project.name));
    let todolist_heading = document.querySelector(".todolist_heading > p");
    todolist_heading.textContent = "All Tasks";
}

export function completedDisplay(){
    let projectList = mainHandler.getProjectList();
    let todolist_heading = document.querySelector(".todolist_heading > p");
    todolist_heading.textContent = "Completed Tasks";

    let todos = document.querySelector(".todos");
    todos.textContent = "";
    projectList.forEach(project => {
        project.todosList.forEach(todo => {
            if(todo.completed == true){
                todoDisplayDOM(project.name ,todo);
            }
        });
    });
}

export function importantDisplay(){
    let projectList = mainHandler.getProjectList();
    let todolist_heading = document.querySelector(".todolist_heading > p");
    todolist_heading.textContent = "Important Tasks";

    let todos = document.querySelector(".todos");
    todos.textContent = "";
    projectList.forEach(project => {
        project.todosList.forEach(todo => {
            if(todo.important == true){
                todoDisplayDOM(project.name, todo);
            }
        });
    });
}

function showProjectTodo() {
    let projectList = mainHandler.getProjectList();
    let index = projectList.findIndex(x => x.name == event.target.textContent);
    let todolist_heading = document.querySelector(".todolist_heading > p");

    todolist_heading.textContent = event.target.textContent;
    projectList[index].todosList.forEach(todo => {
        todoDisplayDOM(projectList[index].name, todo);
    });
}

export function todoDisplayDOM(project, todo){
    let todos = document.querySelector(".todos");
    let task = document.createElement("div");
    task.classList.add("task");
    task.classList.add(project);
    if(todo.completed)
        task.classList.add("completed");
    if(todo.important)
        task.classList.add("important");

    let todo_content = document.createElement("div");
    todo_content.classList.add("todo_content");
    let todo_rest = document.createElement("div");
    todo_rest.classList.add("todo_rest");

    let input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("check");
    input.checked = todo.completed;
    input.addEventListener("change", changeCompleted);
    let p = document.createElement("p");
    p.textContent = todo.title;

    todo_content.appendChild(input);
    todo_content.append(p);

    let date = document.createElement("p");
    date.textContent = todo.date;
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.addEventListener("click", deleteTodo);
    let editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.addEventListener("click", editTodo);

    todo_rest.appendChild(date);
    todo_rest.appendChild(deletebtn);
    todo_rest.appendChild(editbtn);

    task.appendChild(todo_content);
    task.appendChild(todo_rest);
    todos.appendChild(task);
}