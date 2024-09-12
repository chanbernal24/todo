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

                // Add the default project
                this.projectButtonModel.addButtonNameToLocalStorage("Default Project");
                this.projectButtonModel.renderButtons()
                this.taskController.changeProjectTitle()
            } else {
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
            this.projectButtonModel.addProject(projectName.value)
            this.projectButtonModel.addButtonNameToLocalStorage(projectName.value)
            this.projectButtonModel.update()
            // console.log(this.projectButtonModel.projectButtonsArray)


            projectName.value = ""
        })
    }

}

export default ProjectButtonController