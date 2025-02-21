
export function task() {
    const contentElement = document.querySelector(".tasks_div");
    const newtask = document.createElement("p");
    newtask.textContent = "task1"
    contentElement.appendChild(newtask);
    return contentElement;
}

export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
    }

    editTitle (title) {
        this.title = title;
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
