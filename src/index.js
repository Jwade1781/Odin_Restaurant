import './css/style.css';
import {renderNav} from "./nav.js";
import {renderHome} from "./home.js";
import { backgroundShifter } from "./background.js";
import {renderMenu} from "./menu.js";

function main(){
    const contentDiv = document.querySelector("#content");
    backgroundShifter();

    contentDiv.appendChild(renderNav);
    //contentDiv.appendChild(renderMenu);
    contentDiv.appendChild(renderHome);
}

window.addEventListener("load", () => main());