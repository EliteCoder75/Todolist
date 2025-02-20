import img1 from './images/folder-management.png';
import img2 from './images/edit.png';
import {task} from './task.js';
export {togglePopup, togglePopup1};

const projects_container = document.querySelector("div.projects_container");

const projectt = document.querySelector("button.add_project");
const taskss = document.querySelector("button.add_task");
const create_project = document.querySelector('.btn-create-popup');
const close_project = document.querySelector('.btn-close-popup');



(function add_tasks(){
    taskss.addEventListener('click', (event)=>
        {
            task(); 
        }); }
    )();

/*const sidebar = new projects();
sidebar.addProject(new Project("bachir"));
console.log(sidebar);
*/


function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}

function togglePopup1() {
    const overlay = document.getElementById('popupOverlay1');
    overlay.classList.toggle('show');
}

//add project 
projectt.addEventListener('click', (event)=>
    {   
        document.querySelector('.project_name').value = "";
        togglePopup();       
    });

//close popup
close_project.addEventListener('click', (event)=>
    {   
        document.querySelector('.project_name').value = "";
        togglePopup();
    }
);

//create pop up for the
create_project.addEventListener('click', (event)=>
    {   
        let p_name = document.querySelector('.project_name').value;
        if(p_name == ""){
            alert("empty project name");
        } else {
        project(p_name);
        togglePopup();
        }
    }
);

//project("first_project");

//adding modifying and deleting project logic
function project(p_name) {

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



projects_container.addEventListener('click', (event) => {
    if (event.target.classList.contains("edit_project_button")) {
        const projectName = event.target.parentNode.querySelector(".div_project_name").innerText;
        document.querySelector('.project_name1').value = projectName;
        togglePopup1();
    }
});




/*
document.getElementById("popupOverlay1").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-close-popup1")) {
        togglePopup1();  // Close the popup
        document.querySelector('.project_name1').value = ""; // Clear input field
    }
});*/






