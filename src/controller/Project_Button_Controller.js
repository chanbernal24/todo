import ProjectButtonModel from "../models/ProjectButton_Model"

class ProjectButtonController {
    constructor() {
        this.saveProject(),
            this.renderDefaultButton()
    }

    projectButtonModel = new ProjectButtonModel();

    renderDefaultButton = () => {
        window.addEventListener('load', () => {
            if (this.projectButtonModel.isFirstTimeOpeningTheApp()) {
                console.log("First time opening the app");
                // Add the default project
                this.projectButtonModel.addButtonNameToLocalStorage("Default Project");
                this.projectButtonModel.renderButtons()
            } else {
                console.log("Not the first time");
                this.projectButtonModel.renderButtons()

                this.projectButtonModel.update();

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