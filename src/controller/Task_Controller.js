import ProjectButtonModel from "../models/ProjectButton_Model"

class TaskController {
    // constructor() {
    //     this.projectButtonModel = new ProjectButtonModel()
    // }

    projectButtonModel = new ProjectButtonModel()

    changeProjectTitle = () => {
        let projectTitle = document.querySelector('#project-title');
        let buttons = document.querySelector('#button-container').children;

        // Convert HTMLCollection to an array
        let buttonsArray = Array.from(buttons);

        buttonsArray.forEach(button => {
            button.addEventListener('click', () => {
                projectTitle.textContent = button.textContent;
            });
        });


    }
}

export default TaskController