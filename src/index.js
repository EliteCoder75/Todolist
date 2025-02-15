import './style.css'
import {project} from './project.js';
import {showForm} from './project.js';

import {task} from './task.js';

export const body = document.querySelector("body");


const projects_container = document.querySelector("div.projects_container");

const projectt = document.querySelector("button.add_project");
const taskss = document.querySelector("button.add_task");

var forms = document.querySelectorAll('.form-container');
    // Loop through forms and hide them
forms.forEach(function(form) {
form.style.display = 'none';
});

(function add_project(){

projectt.addEventListener('click', (event)=>
    {   
        showForm("#form1");
        //project(); 
    }); }
)();



(function add_tasks(){

    taskss.addEventListener('click', (event)=>
        {
            task(); 
        }); }
    )();

