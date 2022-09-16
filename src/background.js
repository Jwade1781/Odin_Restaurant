export function backgroundShifter() {
    console.log("Starting background shift");
    const pauseMS = 5000;
    if (backgroundShifter.bgElement === undefined) {
        backgroundShifter.bgElement = document.querySelector("#background");
        backgroundShifter.filePath = "../src/images/";
    }

    setTimeout(() => {
        backgroundShifter.bgElement.classList.add("fadeOut");
        document.querySelector(".fadeOut").onanimationend = () => {
            backgroundShifter.bgElement.classList.remove("fadeOut");
            backgroundShifter.bgElement.style.backgroundImage = `url("${backgroundShifter.filePath}sushi${getShiftID()}.jpg")`
            backgroundShifter.bgElement.classList.add("fadeIn");
            document.querySelector(".fadeIn").onanimationend = () => {
                backgroundShifter.bgElement.classList.remove("fadeIn");
                backgroundShifter();
            };
        }
    }, pauseMS);
};

function getShiftID() {
    if (getShiftID.backgroundID === undefined) {
        const startingBackgroundID = 2; 
        getShiftID.maxImages = 5;
        getShiftID.backgroundID = startingBackgroundID;
    }

    else
        getShiftID.backgroundID = ((getShiftID.backgroundID + 1) % getShiftID.maxImages) + 1

    return getShiftID.backgroundID;

}