import { format,isValid, parseISO } from 'date-fns';


export class Task {
    constructor(name, priority, description, dueDate) {
        this.name = name;
        this.priority = priority;
        this.description = description;
        // Ensure `dueDate` is a valid Date object
        // Ensure the date is valid before assigning
        this.dueDate = dueDate;
        
    }

    editname (name) {
        this.name = name;
    }

    getTaskName () {
        return this.name;
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
