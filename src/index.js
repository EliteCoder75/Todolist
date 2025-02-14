import './style.css'
import {project} from './project.js';

export const body = document.querySelector("body");


const projects_container = document.querySelector("div.projects_container");

const projectt = document.querySelector("button.add_project");

(function add_project(){

projectt.addEventListener('click', (event)=>
    {
        project(); 
    }); }
)();