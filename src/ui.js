import img1 from './images/folder-management.png';
import img2 from './images/edit.png';
import {task} from './task.js';
import {project, projects} from './project.js';
export {renderProjects};
/*export {togglePopup, togglePopup1};
const taskss = document.querySelector("button.add_task");
const body = document.querySelector("body");
(function add_tasks(){
    taskss.addEventListener('click', (event)=>
        {
            task(); 
        }); }
    )();

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}
function togglePopup1() {
    const overlay1 = document.getElementById('popupOverlay1');
    overlay1.classList.toggle('show');
}

//adding project logic
function proj(p_name) {

    var contentElement = document.querySelector("#content");
    var newproject = document.createElement("div");
    var project_name = document.createElement("div");
    var edit_project_button = document.createElement("button");
    var close_project = document.querySelector('.btn-close-popup1');
    //const created_project_name = document.querySelector("div_project_name");
    newproject.classList.add("newproject");
    edit_project_button.classList.add("edit_project_button");
    const myIcon1 = new Image();
    
    myIcon1.src = img1;
    myIcon1.classList.add("icon");
    project_name.classList.add("div_project_name");

    const myIcon2 = new Image();
    myIcon2.src = img2;
    myIcon2.classList.add("icon");

    project_name.textContent = p_name;
    edit_project_button.textContent = "⋮";
    if(project_name != ""){
        newproject.appendChild(myIcon1);
        newproject.appendChild(project_name);
        newproject.appendChild(edit_project_button);}
    contentElement.appendChild(newproject);

}

let selectedProject = null; // Stores the currently edited project
// core operation on the sidebar
body.addEventListener('click', (event) => {
    //New project
    if (event.target.classList.contains("btn-create-popup")) { 
        let p_name = document.querySelector('.project_name').value;
        if(p_name == ""){
            alert("empty project name");
        } else {
        proj(p_name);
        togglePopup();
        }
    }
    //add project
    if (event.target.classList.contains("add_project")){   
        document.querySelector('.project_name').value = "";
        togglePopup();       
    }

    // close first popup
    if (event.target.classList.contains("btn-close-popup")) {   
        document.querySelector('.project_name').value = "";
        togglePopup();
    }
    //edit project
    if (event.target.classList.contains("edit_project_button")) {
        //console.log(event.target.classList); 
        selectedProject = event.target.parentNode.querySelector(".div_project_name");  //  Store the actual div reference
        document.querySelector('.project_name1').value = selectedProject.textContent; //  Pre-fill the input
        togglePopup1();
    }
    // close popup1
    if (event.target.classList.contains("btn-close-popup1")) {
        togglePopup1();  // Close the popup
        document.querySelector('.project_name1').value = ""; // Clear input field
    }
    // save the project's name 
    if (event.target.classList.contains("btn-Save-popup1")) {
        if (selectedProject) {
            selectedProject.textContent = document.querySelector('.project_name1').value;  // Directly update the selected project
        }
        togglePopup1(); //  Close the popup
    }
    // delete the project
    if (event.target.classList.contains("btn-delete-popup1")) {
        if (selectedProject) {
            selectedProject.parentNode.remove(); // Directly update the selected project
            togglePopup1(); //  Close the popup
        }
    }
});

*/


import { ProjectManager } from './project.js';

const projectManager = new ProjectManager();
const projectsContainer = document.querySelector("#content");
const addProjectBtn = document.querySelector(".add_project");
const createProjectBtn = document.querySelector(".btn-create-popup");
const closeProjectBtn = document.querySelector(".btn-close-popup");
const popupOverlay = document.getElementById('popupOverlay');
const popupOverlay1 = document.getElementById('popupOverlay1');
const body = document.querySelector("body");


// toggle popups 
function togglePopup() {
    popupOverlay.classList.toggle('show');
}
function togglePopup1() {
    popupOverlay1.classList.toggle('show');
}




function removeProject (name) {
    projectManager.removeProject(name);
    renderProjects();
}


let selectedProject = null;

function renderProjects () {

    projectsContainer.innerHTML = "";
    projectManager.getProjects().forEach(project => {
        var newproject = document.createElement("div");
        newproject.classList.add("newproject"); // also removed the dot prefix here
        newproject.innerHTML = `
            <img src="./images/folder-management.png" class="icon">
            <div class="div_project_name">${project.name}</div>
            <button class="edit_project_button">⋮</button>
        ` 
        projectsContainer.appendChild(newproject);

        //selectedProject = project.name;
        //const edit_project_button = document.querySelector("edit_project_button");
       

        
           
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
    //console.log(projectManager.getProjects());
    renderProjects();
    togglePopup();
    }
});

body.addEventListener('click', (event) => {
    //edit_popup
    if (event.target.classList.contains("edit_project_button")) {
        selectedProject = event.target.parentNode.querySelector(".div_project_name"); 
        console.log(selectedProject.innerText);
        document.querySelector('.project_name1').value = selectedProject.innerText;
        togglePopup1();      
    }
});
    



