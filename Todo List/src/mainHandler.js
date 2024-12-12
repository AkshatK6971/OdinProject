import createProject from "./projectClass";
import createTodos from "./todoClass";

const mainHandler = (function (){
    let projectList = JSON.parse(localStorage.getItem("projectList"));
    
    if(projectList == null){
        projectList = [];
        let project = createProject("MyProject");
        projectList.push(project);
        localStorage.setItem("projectList",JSON.stringify(projectList));
    }

    const getProjectList = () => {
        let plainObject = JSON.parse(localStorage.getItem("projectList"));
        projectList = [];
        plainObject.forEach(project => {
            let temp_project = Object.assign(createProject(),project);
            temp_project.todosList.forEach(todo => {
                let temp_todo = Object.assign(createTodos(), todo);
                todo = temp_todo;
            });
            projectList.push(temp_project);
        });
        return projectList;
    }

    const addProject = (project_item) => {
        let temp_projectList = getProjectList();
        temp_projectList.push(project_item);
        localStorage.setItem("projectList",JSON.stringify(temp_projectList));
    }

    return{
        getProjectList,
        addProject,
    }
})();

export default mainHandler;