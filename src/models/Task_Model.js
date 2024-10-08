import TaskComponent from "../components/Task_Component"

class TaskModel {


    addTaskToLocalStorage = (name, difficulty, dueDate, isDone) => {
        let projectTitle = document.querySelector('#project-title').textContent
        let storedProjects = window.localStorage.getItem('projectButtons');

        let projects = JSON.parse(storedProjects)
        
        for (let i = 0; i < projects.length; i++) {
            if (projects[i]['name'] === projectTitle) {
                const task = new TaskComponent(name, difficulty, dueDate, isDone)

                projects[i]['array'].push(task)
                break
            }
        }

        let obj = JSON.stringify(projects)
        window.localStorage.setItem('projectButtons', obj)
        console.log(projects[0]['name'] === projectTitle)


    }
}

export default TaskModel