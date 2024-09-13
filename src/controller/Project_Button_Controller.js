import ProjectButtonModel from "../models/ProjectButton_Model"
import TaskController from "./Task_Controller";

class ProjectButtonController {
    constructor() {
        this.saveProject(),
            this.renderDefaultButton()
    }
    
    taskController = new TaskController()

    projectButtonModel = new ProjectButtonModel();

    renderDefaultButton = () => {
        window.addEventListener('load', () => {
            if (this.projectButtonModel.isFirstTimeOpeningTheApp()) {
                console.log("first time opening the app")
                // Add the default project
                this.projectButtonModel.addButtonNameToLocalStorage("Default Project");
                this.projectButtonModel.renderButtons()
                this.taskController.changeProjectTitle()
            } else {
                console.log("NOT the first time opening the app")

                this.projectButtonModel.renderButtons()

                this.projectButtonModel.update();
                this.taskController.changeProjectTitle()


            }
        });
    }


    saveProject = () => {
        let saveProjectButton = document.querySelector('#save-project')
        saveProjectButton.addEventListener('click', () => {
            let projectName = document.querySelector('#project-name')
            // this.projectButtonModel.addProject(projectName.value)
            this.projectButtonModel.addButtonNameToLocalStorage(projectName.value)
            this.projectButtonModel.update()
            // console.log(this.projectButtonModel.projectButtonsArray)
            this.taskController.changeProjectTitle()


            projectName.value = ""
        })
    }

}

export default ProjectButtonController