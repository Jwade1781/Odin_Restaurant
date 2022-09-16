import "./css/Pages/home.css"

const renderHome = (() => {
    console.log("Creating Home");
    const homeDiv = document.createElement("div");
    homeDiv.id = "homeDiv";
    
    let topHeader, middleHeader, button;
    const homeStruct = [
        topHeader = {
            "tag" : "h1",
            "id" : "topHeader",
            "value" : "Hibachi, Sushi, Fun"
        },

        middleHeader = {
            "tag" : "h2",
            "id" : "middleHeader",
            "value" : "Now Accepting Online Orders"
        },

        button  = {
            "tag" : "button",
            "id" : "orderButton",
            "value" : "Order Online"
        }
    ];

    for (const element of homeStruct){
        const newElement = document.createElement(element["tag"]);
        newElement.textContent = element["value"];
        newElement.id = element["id"];
        homeDiv.appendChild(newElement);
    }
    return homeDiv;

})();

export { renderHome };