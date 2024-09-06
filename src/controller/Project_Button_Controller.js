import ProjectButton from "../components/Project_Button_Component"

class ProjectButtonController {
    projectButtonsArray = []

    addProject = (name) => {
        const newProjectButton = new ProjectButton(name)
        this.projectButtonsArray.push(newProjectButton)
    }

    renderButtons = () => {
        const buttonContainer = document.querySelector('#button-container');

        this.projectButtonsArray.map(projectButton => {
            const buttonNode = projectButton.renderProjectButton()

            buttonContainer.appendChild(buttonNode)

        })
    }

    removeNodesInsideButtonContainerThenRender = () => {
        const buttonContainer = document.querySelector('#button-container');
        while(buttonContainer.firstChild) {
            buttonContainer.removeChild(buttonContainer.lastChild)
        }

        this.renderButtons()
    }
}

export default ProjectButtonController