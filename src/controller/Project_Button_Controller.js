import ProjectButtonModel from "../models/ProjectButton_Model"

class ProjectButtonController {
    constructor() {
        this.saveProject(),
            this.renderDefaultButton()
    }

    projectButtonModel = new ProjectButtonModel();

    renderDefaultButton = () => {
        window.addEventListener('load', () => {
            if (this.projectButtonModel.isFirstTimeOpeningTheApp) {
                this.projectButtonModel.addButtonNameToLocalStorage("Default Project")
            } else {
                this.projectButtonModel.removeNodesInsideButtonContainerThenRender()

            }
            
        })
    }


    saveProject = () => {
        let saveProjectButton = document.querySelector('#save-project')
        saveProjectButton.addEventListener('click', () => {
            let projectName = document.querySelector('#project-name')
            this.projectButtonModel.addProject(projectName.value)
            this.projectButtonModel.removeNodesInsideButtonContainerThenRender()
            this.projectButtonModel.addButtonNameToLocalStorage(projectName.value)


            projectName.value = ""
        })
    }

}

export default ProjectButtonController