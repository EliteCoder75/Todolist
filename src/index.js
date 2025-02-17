import './style.css'
import {project} from './project.js';
import {showForm} from './project.js';

import {task} from './task.js';

export const body = document.querySelector("body");

const projects_container = document.querySelector("div.projects_container");

const projectt = document.querySelector("button.add_project");
const taskss = document.querySelector("button.add_task");
var create_project = document.querySelector('.btn-create-popup');
var close_project = document.querySelector('.btn-close-popup');


/*(function add_project(){

projectt.addEventListener('click', (event)=>
    {   
        //project(); 
        togglePopup();
        const p_name = document.querySelector('.project_name').value;
    }); }
)();*/

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

projectt.addEventListener('click', (event)=>
    {   
        document.querySelector('.project_name').value = "";
        togglePopup();       
    });


close_project.addEventListener('click', (event)=>
    {   
        togglePopup();
    }
);

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

