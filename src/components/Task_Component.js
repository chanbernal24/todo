class TaskComponent {
    constructor(name, difficuty, dueDate, isDone) {
        this.name = name,
            this.difficuty = difficuty,
            this.dueDate = dueDate,
            this.isDone = isDone,
            this.renderTaskComponent()
    }

    renderTaskComponent = () => {
        // initialize task container
        const taskContainer = document.createElement('div')
        taskContainer.setAttribute('class', 'bg-light d-flex justify-content-between px-3 py-2 align-items-center rounded mb-2')

        // initialize container for the name and checkbox
        const nameAndCheckboxContainer = document.createElement('div')
        nameAndCheckboxContainer.setAttribute('class', 'd-flex align-items-center')

        // checkbox
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('id', 'task')
        checkBox.setAttribute('class', 'd-flex align-items-center')

        // task name
        const taskName = document.createElement('label')
        taskName.setAttribute('for', 'task')
        taskName.setAttribute('class', 'ms-2')
        taskName.textContent = this.name

        // append checkbox and task name inside its container
        nameAndCheckboxContainer.append(checkBox, taskName)

        // initialize container for the task details (difficulty, due date, edit)
        const detailsContainer = document.createElement('div')
        detailsContainer.setAttribute('class', 'd-flex justify-content-center align-items-center')

        // small text container for the difficulty
        const taskDifficultyContainer = document.createElement('p')

        // small text
        const taskDifficulty = document.createElement('small')
        taskDifficulty.textContent = this.difficuty

        // append taskDifficulty text to container
        taskDifficultyContainer.appendChild(taskDifficulty)

        // small text container for the difficulty
        const taskDateContainer = document.createElement('p')
        taskDateContainer.setAttribute('class', 'm-0 px-2 py-1 ms-2 bg-secondary-subtle text-secondary rounded')



        // small text
        const taskDate = document.createElement('small')
        taskDate.textContent = this.dueDate

        // append taskDate text to container
        taskDateContainer.appendChild(taskDate)

        // initialize anchor tag for options to EDIT or DELETE
        const detailsButton = document.createElement('a')
        detailsButton.setAttribute('tab-index', '0')
        detailsButton.setAttribute('id', 'details')
        detailsButton.setAttribute('class', 'm-0 px-2 py-1 ms-2 btn bg-secondary-subtle')
        detailsButton.setAttribute('data-bs-toggle', 'popover')


        // icon for the anchor tag
        const detailsIcon = document.createElement('i')
        detailsIcon.setAttribute('class', 'bi bi-three-dots-vertical text-secondary')


        // append detailsIcon to its container
        detailsButton.appendChild(detailsIcon)

        // append all details to details container
        detailsContainer.append(taskDifficultyContainer, taskDateContainer, detailsButton)

        // append all the details to the task container
        taskContainer.append(nameAndCheckboxContainer, detailsContainer)

        this.checkDifficulty(taskDifficultyContainer)
        this.checkBoxOnchange(taskName, checkBox)

        return taskContainer
    }

    checkDifficulty = (element) => {
        if (this.difficuty === "Easy") {
            element.setAttribute('class', 'bg-success-subtle text-success m-0 px-2 py-1 ms-2 rounded')
        } else if (this.difficuty === "Medium") {
            element.setAttribute('class', 'm-0 px-2 py-1 ms-2 bg-warning-subtle text-warning rounded')
        } else if (this.difficuty === "Hard") {
            element.setAttribute('class', 'm-0 px-2 py-1 ms-2 bg-danger-subtle text-danger rounded')
        }
        else {
            return
        }
    }

    checkIsDone = (string, checkBox) => {
        this.isDone = checkBox.checked

        if (this.isDone) {
            string.setAttribute('class', 'ms-2 text-decoration-line-through')
        } else if (!this.isDone) {
            string.setAttribute('class', 'ms-2')
        }
        this.isDone = !this.isDone
    }

    checkBoxOnchange = (string, box) => {
        box.addEventListener('click', () => {
            this.checkIsDone(string, box)
        })
    }

}

export default TaskComponent