import ProjectButton from "../components/Project_Button_Component";
import TaskComponent from "../components/Task_Component"
import ProjectButtonModel from "./ProjectButton_Model";

class TaskModel {

    projectButtonModel = new ProjectButtonModel()

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
        // console.log(projects[0]['name'] === projectTitle)
    }

    renderTasks = () => {
        let projectTitle = document.querySelector('#project-title').textContent
        let tasksContainer = document.querySelector('#tasks-container')
        let storedProjects = JSON.parse(window.localStorage.getItem("projectButtons"))
        this.projectButtonModel.projectButtonsArray = storedProjects


        this.projectButtonModel.projectButtonsArray.map(projectButton => {
            if (projectButton.name === projectTitle) {
                projectButton.array.map(button => {
                    let task = new TaskComponent(button["name"], button.difficulty, button.dueDate, button.isDone)
                    let taskNode = task.renderTaskComponent()
                    tasksContainer.appendChild(taskNode)
                } )
                
            } else {
                return
            }

            console.log(projectButton.array['name'])

        })
    }


}

export default TaskModel