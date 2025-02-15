import img1 from './images/folder-management.png';
import img2 from './images/edit.png';


export function project() {
    const contentElement = document.querySelector("#content");
    const newproject = document.createElement("div");
    const project_name = document.createElement("div");
    const edit_project_button = document.createElement("button");

    newproject.classList.add("newproject");
    edit_project_button.classList.add("edit_project_button");
    const myIcon1 = new Image();
    
    myIcon1.src = img1;
    myIcon1.classList.add("icon");
    project_name.classList.add("project_name");

    const myIcon2 = new Image();
    myIcon2.src = img2;
    myIcon2.classList.add("icon");

    project_name.textContent = "project1"
    edit_project_button.textContent = "⋮";
    newproject.appendChild(myIcon1);
    newproject.appendChild(project_name);
    newproject.appendChild(edit_project_button);

    contentElement.appendChild(newproject);
    return contentElement;
}

export function showForm(formId) {
    // Get all forms
    var forms = document.querySelectorAll('.form-container');
    // Loop through forms and hide them
    forms.forEach(function(form) {
      form.style.display = 'none';
    });
    // Show the selected form
    var selectedForm = document.querySelector(formId);
    if (selectedForm) {
      selectedForm.style.display = 'block';
    }
  }

  
    