
import {togglePopup, togglePopup1} from './ui.js';
import { Task } from './task.js';


export class ProjectManager {
    constructor() {
        this.projects = [];
    }
    addProject(name) {
        var newProject = new Project(name);
        this.projects.push(newProject);
        return newProject;
    }

    deleteProject(name) {
        this.projects.splice(this.projects.findIndex(v => v.name === name), 1);
    }

    editProject(newName, oldName) {
        var project = this.projects.find((project) => project.name === oldName);
        project.name = newName;
    }

    getProjects(){
        return this.projects;
    }
    //edit_project .....

}

export class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    addTask(name){
        var task = new Task(name);
        this.tasks.push(task);
        return task;
    }

    removeTask(name){
        this.tasks = this.tasks.filter ( item => item!==name);
    }

}



  
    