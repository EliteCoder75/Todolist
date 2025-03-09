import { format,isValid, parseISO } from 'date-fns';


export class Task {
    constructor(name, priority, description, dueDate, checked) {
        console.log("Received dueDate:", dueDate); // Debugging line
        this.name = name;
        this.priority = priority;
        this.description = description;
        this.dueDate = format(dueDate, "yyyy-MM-dd");;
        this.checked = checked;
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
    
    getChecked() {
        return this.checked;
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

    editChecked (state) {
        this.checked = state;
    }

}
