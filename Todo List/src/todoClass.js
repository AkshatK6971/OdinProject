import mainHandler from "./mainHandler";

class Todos {
    constructor(project, title, description, dueDate, important) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.date = dueDate;
        this.important = important;
        this.completed = false;
    }
}


const createTodos = (project, title, description, dueDate, important) => {
    return new Todos(project, title, description, dueDate, important);
}   

export default createTodos;