
import { body } from "./index.js";


export function project() {
    const contentElement = document.querySelector("#content");
    const newproject = document.createElement("p");
    newproject.textContent = "project1"
    contentElement.appendChild(newproject);
    return contentElement;
}

  
    