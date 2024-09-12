class TaskModel {
    

    addTask = (name, difficulty, dueDate, isDone) => {
        const task = new TaskComponent(name, difficulty, dueDate, isDone)
        this.tasksArray.push(task)
    }
}