    import img1 from './images/folder-management.png';
    import img2 from './images/edit.png';
    import {Task, task} from './task.js';
    import {project, projects} from './project.js';
    import { compareAsc, format, parseISO} from "date-fns";

    export {renderProjects};

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
    const closeEditTaskBtn = document.querySelector(".btn-close-popup3");
    const deleteEditTaskBtn = document.querySelector(".btn-delete-task-popup3");
    const saveEditTaskBtn = document.querySelector(".btn-save-task-popup3");
    const popupOverlay3 = document.getElementById('popupOverlay3');

    
    let checked = false;


    let itemsArray = localStorage.getItem('items') ?
    JSON.parse(localStorage.getItem('items')) : [
        { name: 'Homeworks', tasks: [] } ];

    function update_local_storage (){
        itemsArray.forEach((projectData) => {
            let newProject = projectManager.addProject(projectData.name);
            if (projectData.tasks) {
                projectData.tasks.forEach(taskData => {
                    let restoredTask = new Task(taskData.name, taskData.priority, taskData.description, taskData.dueDate, taskData.checked);
                    newProject.addTask(restoredTask.getTaskName(), restoredTask.getPriority(), restoredTask.getDescription(), restoredTask.getDate(), restoredTask.getChecked());
                });
            }
        });
    }

    update_local_storage();

    // default selected project
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
        document.querySelector("#description").value = " ";
        document.querySelector("input[type=date]").value = "";
        popupOverlay2.classList.toggle('show');
    }


    function toggleTaskEditPopup() {
        popupOverlay3.classList.toggle('show');
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
        selectedProject = p_name;
        
        itemsArray.push(projectManager.getProjectByName(p_name));
        localStorage.setItem('items', JSON.stringify(itemsArray));

        renderProjects();
        renderTasks(selectedProject);
        togglePopup();
        }
    });

    body.addEventListener('click', (event) => {
        //edit_popup
        if (event.target.classList.contains("edit_project_button")) {
            selectedProject = event.target.parentNode.querySelector(".div_project_name").innerText; 
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

        //render tasks when clicking on a given project 
        if (event.target.classList.contains("newproject")){
            selectedProject = event.target.querySelector(".div_project_name").innerText;
            renderTasks(selectedProject);
        }

    });

    deleteProjectBtn.addEventListener('click', (event)  => {
        console.log(selectedProject);
        let s = projectManager.getProjectByName(selectedProject);
        s.removeAllTasks();
        renderTasks(selectedProject);
        projectManager.deleteProject(selectedProject);

        itemsArray.splice(itemsArray.findIndex(v => v.name === selectedProject), 1);
        localStorage.setItem('items', JSON.stringify(itemsArray));

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


    let current_project = null;

    createTaskBtn.addEventListener('click', (event)  => {
        current_project = projectManager.getProjectByName(selectedProject);
        if (current_project == null) {
            alert("add project first");
        }
        else {
            //let current_project = projectManager.getProjectByName(selectedProject);
            let t_name = document.querySelector('.task_name').value;
            // retrieve selected option
            let e = document.querySelector(".task_priority");
            let selectedOption = e.options[e.selectedIndex].text; 
            // retrieve selected description  
            let description = document.querySelector("#description").value;
            // retrieve Date
            let dateEntered = document.getElementById("date").value;

            if(t_name == ""){
                alert("empty task name");
            } else {            
            ///i want to change this to include tasks with there respective projects 
            current_project.addTask(t_name, selectedOption, description, String(dateEntered));
            
            // Update the corresponding project in localStorage
            let projectIndex = itemsArray.findIndex(v => v.name === selectedProject);
            if (projectIndex !== -1) {
                itemsArray[projectIndex].tasks = current_project.getTasks();
            }
            localStorage.setItem('items', JSON.stringify(itemsArray));
            //console.log(task.getDate());
            toggleTaskPopup(); 
            }
            renderTasks(selectedProject);    }
    })

    function renderTasks (selectedProj) {

        tasks_container.innerHTML = "";
        current_project = projectManager.getProjectByName(selectedProj);
        //console.log(current_project.getTasks());
        current_project.getTasks().forEach(task => {
            // add it after with getDate()
            //console.log(task.getDate());

            var newtask = document.createElement("div");
            newtask.classList.add("newtask"); // also removed the dot prefix here
            newtask.innerHTML = `
                <div class="checkcontainer">
                    <div class="div_task_name">${task.getTaskName()}</div>
                    <input type="checkbox" id="myCheck" class="myCheck">
                </div>    
                <div class="priority">${task.getPriority()}</div>
                <div class="description">${task.getDescription()}</div>
                <div class="date_entered">2025-02-27</div>
            ` 
            tasks_container.appendChild(newtask);
        });
    }

    let selectedTask = null;

    // code need more refactoring 
    body.addEventListener('click', (event) => {
        //// laod edit info
        if (event.target.matches('.priority, .description, .date_entered')) { 
            selectedTask = event.target.parentNode.querySelector(".checkcontainer .div_task_name").innerText;
            document.querySelector('#task_name_id1').value = selectedTask;
            let tsk1 = projectManager.getProjectByName(selectedProject).getTaskByName(selectedTask);
            document.querySelector('#description1').value = tsk1.getDescription();
            let e = document.querySelector('#priority_id1');
            e.options[e.selectedIndex].text = tsk1.getPriority(); 
            toggleTaskEditPopup();   
        }

        //// laod edit info
        if (event.target.matches('.div_task_name')) {  
            selectedTask = event.target.innerText;
            document.querySelector('#task_name_id1').value = selectedTask;
            let tsk2 = projectManager.getProjectByName(selectedProject).getTaskByName(selectedTask);
            document.querySelector('#description1').value = tsk2.getDescription();
            let e = document.querySelector('#priority_id1');
            e.options[e.selectedIndex].text = tsk2.getPriority(); 
            toggleTaskEditPopup();   
        }

        //// laod edit info
        if (event.target.matches('.newtask')) {  
            selectedTask = event.target.querySelector(".checkcontainer .div_task_name").innerText;
            document.querySelector('#task_name_id1').value = selectedTask;
            let tsk3 = projectManager.getProjectByName(selectedProject).getTaskByName(selectedTask);
            document.querySelector('#description1').value = tsk3.getDescription();
            let e = document.querySelector('#priority_id1');
            e.options[e.selectedIndex].text = tsk3.getPriority(); 
            toggleTaskEditPopup();   
        }

        if (event.target.matches('.btn-close-popup3')) { 
            toggleTaskEditPopup();   
        }

        //save or edit
        if (event.target.matches('.btn-save-task-popup3')) { 
            let tsk = projectManager.getProjectByName(selectedProject).getTaskByName(selectedTask);
            tsk.editname(document.querySelector('#task_name_id1').value);
            tsk.editDescription(document.querySelector('#description1').value);
            let e = document.querySelector(".task_priority1");
            let selectedOption = e.options[e.selectedIndex].text;
            tsk.editPriority(selectedOption);            
            renderTasks(selectedProject);
            toggleTaskEditPopup();   
            }
        
        if (event.target.matches('.btn-delete-task-popup3')) {
            console.log(document.querySelector('#task_name_id1').value);

            //find project index
            let projectIndex = itemsArray.findIndex(v => v.name === selectedProject);
            let obj = itemsArray[projectIndex].tasks;
            obj = obj.filter(item => item.name !== document.querySelector('#task_name_id1').value);//.findIndex(v => v.name === selectedProject)
            itemsArray[projectIndex].tasks = obj;
            projectManager.getProjectByName(selectedProject).removeTask(document.querySelector('#task_name_id1').value);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            renderTasks(selectedProject);
            toggleTaskEditPopup();
        }   

        //check box handle
        if (event.target.matches('.myCheck')) {
            selectedTask = event.target.parentNode.querySelector(".checkcontainer .div_task_name").innerText;
            let tsk = projectManager.getProjectByName(selectedProject).getTaskByName(selectedTask);
            const taskElements = event.target.parentNode.parentNode.querySelectorAll(".newtask *");
            if (event.target.checked) {
                checked = true;
                tsk.editChecked(checked);
                console.log(tsk);

                taskElements.forEach((element) => {
                    element.style.textDecoration = "line-through";
                });
            } else {
                checked = false;
                tsk.editChecked(checked);
                console.log(tsk);
                taskElements.forEach((element) => {
                    element.style.textDecoration = "none";
                });
            }
            let projectIndex = itemsArray.findIndex(v => v.name === selectedProject);
            let obj = itemsArray[projectIndex].tasks;
            obj.forEach((task) => {
                if(task.name === selectedTask) {
                    task.checked = checked;
                }
            } );
            itemsArray[projectIndex].tasks = obj;
            //obj = obj.filter(item => item.name !== document.querySelector('#task_name_id1').value);//.findIndex(v => v.name === selectedProject)
            //console.log (obj);
            //itemsArray[projectIndex].tasks = obj;

            localStorage.setItem('items', JSON.stringify(itemsArray));

        }

    });


/*localStorage.clear();
itemsArray = []; */











        



