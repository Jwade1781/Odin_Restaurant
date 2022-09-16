import './css/style.css';
import {renderNav} from "./nav.js";

function main(){
    const contentDiv = document.querySelector("#content");
    console.log("Loaded");
    contentDiv.appendChild(displayNav());

}

const displayNav = () =>{
    return renderNav;
}

window.addEventListener("load", () => main());