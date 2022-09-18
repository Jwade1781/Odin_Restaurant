import "./css/Pages/nav.css"
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

const AddScrollEvent = () => {
    window.onscroll = () => {
        const navHeaderDiv = document.querySelector("#navHeaderDiv");
        const paddingOffset = "-10px"
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
            navHeaderDiv.style.marginTop = paddingOffset;

        else
            navHeaderDiv.style.marginTop = "0px";
    };
}

const renderNav = (() => {
    AddScrollEvent();
    const navHeaderDiv = document.createElement("div");
    const navLogoDiv = document.createElement("div");
    const navButtonsDiv = document.createElement("div");
    navHeaderDiv.id = "navHeaderDiv";
    navLogoDiv.id = "navLogoDiv";
    navButtonsDiv.id = "navButtonsDiv";

    const logoHeader = document.createElement("h2");
    logoHeader.textContent = "Edo Hibachi";

    const logoImg = document.createElement("img");

    const topHeader = document.createElement("h3");
    topHeader.textContent = "Hibachi, Sushi, Fun";

    let Home, Menu, About, Contact;
    const buttons = [
        Home = {
            "name": "Home",
            "onclick": renderHome,
        },
        Menu = {
            "name": "Menu",
            "onclick": renderMenu,
        },
        About = {
            "name": "About",
            "onclick": renderAbout,
        },
        Contact = {
            "name": "Contact",
            "onclick": "./contact.js",
        },
    ];

    for (const button of buttons) {
        const newButton = document.createElement("h5");
        newButton.textContent = button["name"];
        navButtonsDiv.appendChild(newButton);

        newButton.addEventListener("click", () => {
            const contentDiv = document.querySelector("#content");
            const removingElement = contentDiv.lastChild;

            removingElement.classList.add("slideOut");

            removingElement.onanimationend = () => {
                removingElement.classList.remove("slideOut");
                contentDiv.removeChild(contentDiv.lastChild);

                contentDiv.appendChild(button["onclick"]);
                contentDiv.lastChild.classList.add("slideIn");
                contentDiv.lastChild.onanimationend = () => {
                    contentDiv.lastChild.classList.remove("slideIn");
                };
            }
        });
    }

    navLogoDiv.appendChild(logoImg);
    navLogoDiv.append(logoHeader);
    navHeaderDiv.appendChild(topHeader);

    const tempDiv = document.createElement("div");
    tempDiv.appendChild(navLogoDiv);
    tempDiv.appendChild(navButtonsDiv);
    navHeaderDiv.appendChild(tempDiv);
    return navHeaderDiv;

})();



export { renderNav };