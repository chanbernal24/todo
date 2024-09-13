import ProjectButtonModel from "../models/ProjectButton_Model"
import TaskModel from "../models/Task_Model"

class TaskController {
    constructor() {
        this.changeProjectTitle(),
        this.saveTask(),
        this.renderTasksLoad()
    }

    taskModel = new TaskModel()
    projectButtonModel = new ProjectButtonModel()

    renderTasksLoad = () => {
        window.addEventListener('load', () => {
            this.taskModel.renderTasks()
        })
    }

    changeProjectTitle = () => {
        let projectTitle = document.querySelector('#project-title');
        let buttons = document.querySelector('#button-container').children;

        let buttonsArray = Array.from(buttons);

        if(!this.projectButtonModel.isFirstTimeOpeningTheApp()) {
            projectTitle.textContent = "Default Project"
            buttonsArray.forEach(button => {
                button.addEventListener('click', () => {
                    projectTitle.textContent = button.textContent;
                });
            });
        } else if (this.projectButtonModel.isFirstTimeOpeningTheApp()) {
            projectTitle.textContent = "Default Project"

        }

    }

    saveTask = () => {
        let projectTitle = document.querySelector('#project-title');

        let taskSaveButton = document.querySelector('#task-save-button')
        let taskName = document.querySelector('#todo-name')
        let taskDueDate = document.querySelector('#todo-date')
        let taskDifficulty = document.querySelector('#todo-difficulty')

        taskSaveButton.addEventListener('click', () => {
            this.taskModel.addTaskToLocalStorage(taskName.value, taskDifficulty.value, taskDueDate.value, false)
        })

        
    }
}

export default TaskController