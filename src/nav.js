import "./css/Pages/nav.css"

const renderNav = (() => {
    console.log("Creating Nav");
    const navHeaderDiv = document.createElement("div");
    const navLogoDiv = document.createElement("div");
    const navButtonsDiv = document.createElement("div");
    navHeaderDiv.id = "navHeaderDiv";
    navLogoDiv.id = "navLogoDiv";
    navButtonsDiv.id = "navButtonsDiv";

    const logoHeader = document.createElement("h2");
    logoHeader.textContent = "Edo Hibachi";

    const logoImg = document.createElement("img");


    let Home, Menu, Gallery, Contact;
    const buttons = [
        Home = {
            "name" : "Home",
            "file" : "./home.js",
        },
        Menu = {
            "name" : "Menu",
            "file" : "./menu.js",
        },
        Gallery = {
            "name" : "Gallery",
            "file" : "./gallery.js",
        },
        Contact = {
            "name" : "Contact",
            "file" : "./contact.js",
        },
    ];

    for (const button of buttons){
        const newButton = document.createElement("h5");
        console.log(button["name"]);
        newButton.textContent = button["name"];
        navButtonsDiv.appendChild(newButton);
    }

    navLogoDiv.appendChild(logoImg);
    navLogoDiv.append(logoHeader);
    navHeaderDiv.appendChild(navLogoDiv);
    navHeaderDiv.appendChild(navButtonsDiv);
    return navHeaderDiv;

})();

export { renderNav };