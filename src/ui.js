import img1 from './images/folder-management.png';
import img2 from './images/edit.png';
import {Task, task} from './task.js';
import {project, projects} from './project.js';
export {renderProjects};


/*
const taskss = document.querySelector("button.add_task");


(function add_tasks(){
    taskss.addEventListener('click', (event)=>
        {
            task(); 
        }); }
    )();
*/

import { ProjectManager } from './project.js';

const projectManager = new ProjectManager();
const projectsContainer = document.querySelector("#content");
const addProjectBtn = document.querySelector(".add_project");
const createProjectBtn = document.querySelector(".btn-create-popup");
const closeProjectBtn = document.querySelector(".btn-close-popup");
const closeEditBtn = document.querySelector(".btn-close-popup1");
const deleteProjectBtn = document.querySelector(".btn-delete-popup1");
const saveprojectNameBtn = document.querySelector(".btn-Save-popup1");
const popupOverlay = document.getElementById('popupOverlay');
const popupOverlay1 = document.getElementById('popupOverlay1');
const popupOverlay2 = document.getElementById('popupOverlay2');
const body = document.querySelector("body");

const addTaskBtn = document.querySelector(".add_task");
const closeTaskBtn = document.querySelector(".btn-close-popup2");
const createTaskBtn = document.querySelector(".btn-create-task");
const tasks_container = document.querySelector(".tasks_div");
const task_name = document.querySelector(".task_name");



// adding default project 
projectManager.addProject("Homeworks");
let selectedProject = projectManager.getProjects()[0].name;

// toggle popups for projects
function togglePopup() {
    popupOverlay.classList.toggle('show');
}
function togglePopup1() {
    popupOverlay1.classList.toggle('show');
}

// toggle popup for tasks
function toggleTaskPopup() {
    task_name.value = "";
    popupOverlay2.classList.toggle('show');
}


function renderProjects () {
    projectsContainer.innerHTML = "";
    projectManager.getProjects().forEach(project => {
        var newproject = document.createElement("div");
        newproject.classList.add("newproject"); // also removed the dot prefix here
        newproject.innerHTML = `
            <img src="${img1}" class="icon">
            <div class="div_project_name">${project.name}</div>
            <button class="edit_project_button">⋮</button>
        ` 
        projectsContainer.appendChild(newproject);
    });
} 

//diplay popup to add new project //add_project
addProjectBtn.addEventListener('click', (event)  => {
    document.querySelector('.project_name').value = "";
    togglePopup();       
});   
    
createProjectBtn.addEventListener('click', (event)  => {
    let p_name = document.querySelector('.project_name').value;
    if(p_name == ""){
        alert("empty project name");
    } else {
    projectManager.addProject(p_name);
    console.log(projectManager.getProjects());
    renderProjects();
    togglePopup();
    }
});

body.addEventListener('click', (event) => {
    //edit_popup
    if (event.target.classList.contains("edit_project_button")) {
        selectedProject = event.target.parentNode.querySelector(".div_project_name").innerText; 
        console.log(selectedProject);
        document.querySelector('.project_name1').value = selectedProject;
        togglePopup1();      
    }
    // close edit popup
    if (event.target.classList.contains("btn-close-popup1")){
        togglePopup1();
    }

    //save name of the project whether modified or the same
    if (event.target.classList.contains("btn-Save-popup1")){
        var ne = document.querySelector(".project_name1").value;
        var old = selectedProject;
        projectManager.editProject(ne, old);
        selectedProject = ne;
        renderProjects();
        togglePopup1();

    }
});

deleteProjectBtn.addEventListener('click', (event)  => {
    console.log(projectManager.getProjects());
    projectManager.deleteProject(selectedProject);
    renderProjects();
    togglePopup1();
});

// close add project popup
closeProjectBtn.addEventListener('click', (event)  => {
    togglePopup();
});

/// task part 

addTaskBtn.addEventListener('click', (event)  => {
    toggleTaskPopup();       
})

closeTaskBtn.addEventListener('click', (event)  => {
    toggleTaskPopup();       
})


//console.log(selectedProject);
//console.log(projectManager.getProjectByName(selectedProject));

let current_project = null;

createTaskBtn.addEventListener('click', (event)  => {
    //let current_project = projectManager.getProjectByName(selectedProject);
    let t_name = document.querySelector('.task_name').value;
    if(t_name == ""){
        alert("empty project name");
    } else {

    current_project = projectManager.getProjectByName(selectedProject);
    current_project.addTask(t_name);
    console.log(current_project.getTasks());
    toggleTaskPopup();  
    }
    renderTasks(selectedProject);    
})


function renderTasks (selectedProj) {

    tasks_container.innerHTML = "";
    current_project = projectManager.getProjectByName(selectedProj);
    current_project.getTasks().forEach(task => {
        var newtask = document.createElement("div");
        newtask.classList.add("newtask"); // also removed the dot prefix here
        newtask.innerHTML = `
            <div class="div_task_name">${task.getName()}</div>
        ` 
        tasks_container.appendChild(newtask);
    });
}


body.addEventListener('click', (event) => {
   
    if (event.target.classList.contains("newproject")) {
        selectedProject = event.target.children[1].innerText; 
        renderTasks(selectedProject);    
    }
});













    



