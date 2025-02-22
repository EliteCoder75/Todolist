
export function task() {
    const contentElement = document.querySelector(".tasks_div");
    const newtask = document.createElement("p");
    newtask.textContent = "task1"
    contentElement.appendChild(newtask);
    return contentElement;
}

export class Task {
    constructor(title, priority, description, dueDate) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.dueDate = new Date(dueDate);
        
    }

    editTitle (title) {
        this.title = title;
    }

    getTaskName () {
        return this.title;
    }

    getPriority () {
        return this.priority;
    }
    getDescription () {
        return this.description;
    }

    editDescription (description) {
        this.description = description;
    }

    editDueDate (date) {
        this.dueDate = new Date(date);
    }

    editPriority (prior) {
        this.priority = prior;
    }

}
