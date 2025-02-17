import img1 from './images/folder-management.png';
import img2 from './images/edit.png';


export function project(p_name) {
    const contentElement = document.querySelector("#content");
    const newproject = document.createElement("div");
    const project_name = document.createElement("div");
    const edit_project_button = document.createElement("button");


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
    newproject.appendChild(myIcon1);
    newproject.appendChild(project_name);
    newproject.appendChild(edit_project_button);

    contentElement.appendChild(newproject);
    return contentElement;
}


  
    