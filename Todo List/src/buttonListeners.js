import { allDisplay, completedDisplay, importantDisplay, todoDisplay } from "./display";
import mainHandler from "./mainHandler";

export function editTodo(){
    let project = event.target.parentNode.parentNode.classList[1];
    let title = event.target.parentNode.parentNode.childNodes[0].childNodes[1].textContent;

    let modaltodoedit = document.querySelector(".todo_modal_edit");
    let edittodobtn = document.querySelector("#edittodo");
    let closeedittodobtn = document.querySelector("#closetodomodal_edit");
    let todo_name_edit = document.querySelector("#todo_name_edit");
    let description_edit = document.querySelector("#description_edit");
    let date_edit = document.querySelector("#date_edit");
    let important_edit = document.querySelector("#important_edit");

    let projectList = mainHandler.getProjectList();
    let index = projectList.findIndex(x => x.name == project);
    let todo_index = projectList[index].todosList.findIndex(x => x.title == title);

    todo_name_edit.value = projectList[index].todosList[todo_index].title;
    description_edit.value = projectList[index].todosList[todo_index].description;
    date_edit.value = projectList[index].todosList[todo_index].date;
    important_edit.checked = projectList[index].todosList[todo_index].important;

    closeedittodobtn.addEventListener("click", () => {
        event.preventDefault();
        modaltodoedit.close();
    });

    edittodobtn.addEventListener("click", () => {
        event.preventDefault();
        projectList[index].todosList[todo_index].title = todo_name_edit.value;
        projectList[index].todosList[todo_index].description = description_edit.value;
        projectList[index].todosList[todo_index].date = date_edit.value;
        projectList[index].todosList[todo_index].important = important_edit.checked;
        localStorage.setItem("projectList",JSON.stringify(projectList));
        modaltodoedit.close();
        selectedDisplay();
    });

    modaltodoedit.showModal();
}

export function deleteTodo(){
    let project = event.target.parentNode.parentNode.classList[1];
    let title = event.target.parentNode.parentNode.childNodes[0].childNodes[1].textContent;

    let projectList = mainHandler.getProjectList();
    let index = projectList.findIndex(x => x.name == project);
    let todo_index = projectList[index].todosList.findIndex(x => x.title == title);
    projectList[index].todosList.splice(todo_index,1);
    localStorage.setItem("projectList",JSON.stringify(projectList));
    selectedDisplay();    
}

export function changeCompleted(){
    let project = event.target.parentNode.parentNode.classList[1];
    let title = event.target.parentNode.childNodes[1].textContent;

    let projectList = mainHandler.getProjectList();
    let index = projectList.findIndex(x => x.name == project);
    let todo_index = projectList[index].todosList.findIndex(x => x.title == title);

    projectList[index].todosList[todo_index].completed = event.target.checked;
    localStorage.setItem("projectList", JSON.stringify(projectList));
    selectedDisplay();
}

function selectedDisplay(){
    let todolist_heading = document.querySelector(".todolist_heading > p");
    let todos = document.querySelector(".todos");
    todos.textContent = "";
    if(todolist_heading.textContent == "All Tasks")
        allDisplay();
    else if(todolist_heading.textContent == "Completed Tasks")
        completedDisplay();
    else if(todolist_heading.textContent == "Important Tasks")
        importantDisplay();
    else{
        let name = todolist_heading.textContent;
        todoDisplay(name);
    }
}