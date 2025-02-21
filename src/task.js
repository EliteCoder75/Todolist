
/*export function task() {
    const contentElement = document.querySelector(".tasks_div");
    const newtask = document.createElement("p");
    newtask.textContent = "task1"
    contentElement.appendChild(newtask);
    return contentElement;
}*/

export class Task {
    constructor(title) {
        this.title = title;
    }
}
