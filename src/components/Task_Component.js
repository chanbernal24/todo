class TaskComponent {
    constructor (name, difficuty, dueDate, isDone) {
        this.name = name,
        this.difficuty = difficuty,
        this.dueDate = dueDate,
        this.isDone = isDone
    }

    renderTaskComponent = () => {
        // initialize task container
        const taskContainer = document.createElement('div')
        taskContainer.setAttribute('class', 'bg-light d-flex justify-content-between px-3 py-2 align-items-center rounded mb-2')

        // initialize container for the name and checkbox
        const nameAndCheckboxContainer = document.createElement('div')
        nameAndCheckboxContainer.setAttribute('class', 'd-flex align-items-center')

        // checkbox
        const checkBox = document.createElement('checkbox')
        checkBox.setAttribute('id', 'task')
        checkBox.setAttribute('class', 'd-flex align-items-center')

        // task name
        const taskName = document.createElement('label')
        taskName.setAttribute('for', 'task')

        // append checkbox and task name inside its container
        nameAndCheckboxContainer.append(checkBox, taskName)

        // initialize container for the task details (difficulty, due date, edit)

    }
}