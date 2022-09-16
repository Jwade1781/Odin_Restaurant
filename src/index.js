import './css/style.css';
import {renderNav} from "./nav.js";
import {renderHome} from "./home.js";

function main(){
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(renderNav);
    contentDiv.appendChild(renderHome);
}

window.addEventListener("load", () => main());