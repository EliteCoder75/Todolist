
import {togglePopup, togglePopup1} from './ui.js';
import { task } from './task.js';



export class projects {
    constructor() {
        this.projects = [];
    }
    addProject(project) {
        this.projects.push(project);
    }

    deleteProject(project) {
        this.projects = this.projects.filter(function(item) {
            return item !== project;
        })
    }

}

export class Project {
    constructor(name){
        this.name = name;
    }
}










  
    