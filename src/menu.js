import "./css/Pages/menu.css"

const renderMenu = (() => {
    const menuDiv = document.createElement("div");
    const foodItem = { // One food item will be display; could be appended with json to account for more
        "name" : "Spicy Garlic Shrimp",
        "price" : "7.00",
        "summary" : "Cooked in Garlic Chili Spicy Sauce",
        "img" : "../src/images/sushi1.jpg"
    }

    const appFood = [
        foodItem,
        foodItem,
        foodItem,
        foodItem,
        foodItem,
        foodItem,
        foodItem
    ];

    const entreeFood = [
        foodItem,
        foodItem,
        foodItem,
        foodItem,
        foodItem,
        foodItem,
        foodItem
    ];

    const sideFood = [
        foodItem,
        foodItem,
        foodItem
    ];

    const drinkFood = [
        foodItem,
        foodItem,
        foodItem
    ];

    const menu = (type, foodItems) => {
        const typeDiv = document.createElement("div");
        typeDiv.classList.add("typeDiv");

        const menuTypeHeader = document.createElement("h2");
        menuTypeHeader.textContent = type;
        menuTypeHeader.classList.add("menuTypeHeader");

        typeDiv.appendChild(menuTypeHeader);

        for (let i = 0; i < foodItems.length; i++){
            const item = foodItems[i];

            const foodItemDiv = document.createElement("div");
            const namePriceDiv = document.createElement("div");
            const foodName = document.createElement("h5");
            const foodPrice = document.createElement("h5");
            const details = document.createElement("details");
            const summary = document.createElement("summary");
            const img = document.createElement("img");

            foodName.textContent = item["name"];
            foodPrice.textContent = item["price"];
            summary.textContent = item["summary"];
            img.src = item["img"];

            details.appendChild(summary);
            details.appendChild(img);
        
            namePriceDiv.appendChild(foodName);
            namePriceDiv.appendChild(foodPrice);

            foodItemDiv.appendChild(namePriceDiv);
            foodItemDiv.appendChild(details);

            foodItemDiv.classList.add("foodItemDiv");
            namePriceDiv.classList.add("namePriceDiv");
            foodName.classList.add("foodName");
            foodPrice.classList.add("foodPrice");
            summary.classList.add("foodDescr");

            typeDiv.appendChild(foodItemDiv);
        }

        return typeDiv;
    }

    menuDiv.id = "menuDiv";
    menuDiv.appendChild(menu("Apps", appFood));
    menuDiv.appendChild(menu("Entrees", entreeFood));
    menuDiv.appendChild(menu("Sides", sideFood));
    menuDiv.appendChild(menu("Drinks", drinkFood));
    return menuDiv;

})();

export { renderMenu };