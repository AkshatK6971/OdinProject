import createProject from "./projectClass.js";
import createTodos from "./todoClass.js";
import "./styles.css";
import mainHandler from "./mainHandler.js";
import {allDisplay, projectDisplay, todoDisplay, completedDisplay, importantDisplay} from "./display.js"

let createprojectbtn = document.querySelector("#createproject");
let modalproject = document.querySelector(".modal_project");
let projectname = document.querySelector("#project_name");
let addprojectbtn = document.querySelector("#addproject");
let closeprojectbtn = document.querySelector("#closeprojectmodal");

createprojectbtn.addEventListener("click" ,() => {
    modalproject.showModal();
});

addprojectbtn.addEventListener("click" , (event) => {
    event.preventDefault();
    let name = projectname.value;
    let newProject = createProject(name);
    mainHandler.addProject(newProject);
    projectname.value = "";
    modalproject.close();
    projectDisplay();
});

closeprojectbtn.addEventListener("click" ,() => {
    event.preventDefault();
    modalproject.close();
});

let createtodobtn = document.querySelector("#createtodo");
let modaltodo = document.querySelector(".todo_modal");
let addtodobtn = document.querySelector("#addtodo");
let closetodobtn = document.querySelector("#closetodomodal");
let title = document.querySelector("#todo_name");
let description = document.querySelector("#description");
let date = document.querySelector("#date");
let important = document.querySelector("#important");
let todolist_heading = document.querySelector(".todolist_heading > p");

createtodobtn.addEventListener("click" ,() => {
    modaltodo.showModal();
});

addtodobtn.addEventListener("click" ,() => {
    event.preventDefault();
    let project;
    if(todolist_heading.textContent == "All Tasks" || todolist_heading.textContent == "Completed Tasks" || todolist_heading.textContent == "Important Tasks")
        project = "MyProject";
    else
        project = todolist_heading.textContent;

    let newTodo = createTodos(project,title.value,description.value,date.value,important.checked);
    let projectList = mainHandler.getProjectList()
    let index = projectList.findIndex(x => x.name == project);
    projectList[index].addTodos(newTodo);
    localStorage.setItem("projectList",JSON.stringify(projectList));

    title.value = "";
    description.value = ""
    date.value = "";
    important.checked = false;
    modaltodo.close();

    let todos = document.querySelector(".todos");
    todos.textContent = "";
    todolist_heading.textContent = project;
    todoDisplay(project);
});

closetodobtn.addEventListener("click" ,() => {
    event.preventDefault();
    modaltodo.close();
});

let allbtn = document.querySelector("#all_but");
let completed_btn = document.querySelector("#completed_but");
let important_btn = document.querySelector("#important_but");

allbtn.addEventListener("click", allDisplay);
completed_btn.addEventListener("click", completedDisplay);
important_btn.addEventListener("click", importantDisplay);

projectDisplay();
allDisplay();

