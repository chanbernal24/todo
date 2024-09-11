import ProjectButton from "../components/Project_Button_Component"
import TaskComponent from "../components/Task_Component"

class ProjectButtonModel {

    // array of PROJECT BUTTONS
    projectButtonsArray = [
        
    ]

    isFirstTimeOpeningTheApp = () => {
        let localStorages = window.localStorage

        let storedProjects = localStorages.getItem("projectButtons")

        // if first time opening the web
        return storedProjects ? false : true

    }

    addButtonNameToLocalStorage = (buttonName) => {
        let localStorages = window.localStorage
        let storedProjects = localStorages.getItem("projectButtons")

        let project = new ProjectButton(buttonName)
        let projectButtonsArray = storedProjects ? JSON.parse(localStorages.getItem("projectButtons")) : []
        projectButtonsArray.push(project)

        projectButtonsArray.map(button => {
            this.projectButtonsArray.push(button)
        })

        let obj = JSON.stringify(projectButtonsArray)

        localStorages.setItem("projectButtons", obj)
    }

    addProject = (name) => {
        const newProjectButton = new ProjectButton(name)
        this.projectButtonsArray.push(newProjectButton)
        // console.log(this.projectButtonsArray)
    }

    addTaskToProject = (projectName, taskName, taskDifficulty, taskDueDate, taskIsDone) => {
        const project = this.projectButtonsArray.find(projectButon => projectButon.name === projectName)
        if (project) {
            project.addTask(taskName, taskDifficulty, taskDueDate, taskIsDone)
        }
    }

    renderButtons = () => {
        const buttonContainer = document.querySelector('#button-container');

        
        // let localStorages = window.localStorage
        // let projectButtonsArray = localStorages.getItem("projectButtons")
        // let buttonsArray = JSON.parse(projectButtonsArray)
        // console.log(buttonsArray)

        this.projectButtonsArray.forEach(projectButton => {
            const button = new ProjectButton(projectButton.name);
            const buttonNode = button.renderProjectButton();
            buttonContainer.appendChild(buttonNode);
        });
    }

    update = () => {
        const buttonContainer = document.querySelector('#button-container');

        // let localStorages = window.localStorage
        // let projectButtonsArray = localStorages.getItem("projectButtons")
        // let buttonsArray = JSON.parse(projectButtonsArray)


        while (buttonContainer.firstChild) {
            buttonContainer.removeChild(buttonContainer.lastChild)
        }

        this.renderButtons()
    }
}

export default ProjectButtonModel
