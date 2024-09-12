import '..//scss/styles.scss'

class ProjectButton {

    constructor(name) {
        this.name = name,
        this.renderProjectButton();
        this.array = []
    }


    

    getTasksArray = () => this.array

    renderProjectButton = () => {
        
        const button = document.createElement('button')
        button.setAttribute('class', 'btn border border-secodary me-2 mb-2 flex-grow-1')
        button.textContent = this.name
        return button
    }

}

export default ProjectButton