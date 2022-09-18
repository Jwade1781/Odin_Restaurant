import "./css/Pages/about.css"

const renderAbout = (() => {
    const aboutDiv = document.createElement("div");
    const tempDiv = document.createElement("div");

    const mainHeaderWrapperDiv = document.createElement("div");
    const mainHeader = document.createElement("h2");

    const contentA = document.createElement("a");
    const img = document.createElement("img");

    aboutDiv.id = "aboutDiv";
    mainHeaderWrapperDiv.id = "mainHeaderWrapper";
    mainHeader.id = "mainHeader";

    mainHeader.textContent = "What makes us.. us?";
    img.src = "../src/images/sushi0.jpg";
    contentA.innerHTML = "<img src='../src/images/sushi0.jpg'>"
    contentA.innerHTML += `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Nulla aliquet enim tortor at. Id aliquet lectus proin nibh nisl condimentum id venenatis. Pretium viverra suspendisse potenti nullam ac tortor. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Arcu dictum varius duis at consectetur. Urna neque viverra justo nec ultrices dui sapien eget mi. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Integer feugiat scelerisque varius morbi. Feugiat scelerisque varius morbi enim nunc. At in tellus integer feugiat. Erat pellentesque adipiscing commodo elit at imperdiet.
    <br><br>
    Enim ut tellus elementum sagittis vitae et leo duis ut. Nec dui nunc mattis enim ut tellus elementum. Purus in massa tempor nec feugiat nisl pretium. Aliquam faucibus purus in massa tempor nec feugiat nisl. Bibendum ut tristique et egestas quis. At erat pellentesque adipiscing commodo elit. Varius duis at consectetur lorem donec massa sapien faucibus et. Tortor consequat id porta nibh venenatis cras sed felis. Iaculis urna id volutpat lacus laoreet non. Purus in massa tempor nec feugiat. Enim neque volutpat ac tincidunt. Sit amet dictum sit amet. Vel risus commodo viverra maecenas accumsan lacus. Vitae purus faucibus ornare suspendisse sed. Et leo duis ut diam quam.
    <br><br>
    Maecenas accumsan lacus vel facilisis volutpat. Neque egestas congue quisque egestas diam in arcu cursus euismod. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Massa massa ultricies mi quis hendrerit dolor magna eget. Duis ut diam quam nulla porttitor. Lectus sit amet est placerat in egestas erat. Tempor id eu nisl nunc mi ipsum faucibus vitae. Elementum integer enim neque volutpat ac tincidunt vitae semper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Rhoncus dolor purus non enim praesent elementum facilisis leo. Lacus vel facilisis volutpat est velit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Vestibulum lorem sed risus ultricies tristique nulla. Habitant morbi tristique senectus et netus et malesuada fames ac. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Scelerisque eu ultrices vitae auctor eu. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.`

    mainHeaderWrapperDiv.appendChild(mainHeader);
    tempDiv.appendChild(mainHeaderWrapperDiv);
    tempDiv.appendChild(contentA);

    aboutDiv.appendChild(tempDiv);

    return aboutDiv;

})();



export { renderAbout };