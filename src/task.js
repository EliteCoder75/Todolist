import { format,isValid, parseISO } from 'date-fns';


export class Task {
    constructor(title, priority, description, dueDate) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        // Ensure `dueDate` is a valid Date object
        // Ensure the date is valid before assigning
        this.dueDate = dueDate;
        
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

    getDate() {
        return this.dueDate;
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
