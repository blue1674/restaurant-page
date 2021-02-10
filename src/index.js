import displayAbout from './initial-page'

const structure = function () {
    const about = byId("about");
    const menu = byId("menu");
    const contactUs = byId("contactUs");
    about.addEventListener('click', displayAbout());
    menu.addEventListener('click', displayMenu());
    contactUs.addEventListener('click', displayContactUs());
    function _byId(id) {
        return document.getElementById(id);
    }
}
function mainDisplay() {
    const h1 = document.querySelector('h1');
    let navBar = document.createElement('nav');
    navBar.appendChild(tabCreator('About'));
    navBar.appendChild(tabCreator('Menu'));
    navBar.appendChild(tabCreator('Contact Us'));
    navBar.id = "tabs";
    h1.insertAdjacentElement('afterend', navBar);
}
function tabCreator(text) {
    let button = document.createElement('button');
    if (text === "Menu")
        button.id = "menu";
    else if (text === "About")
        button.id = "about";
    else
        button.id = "contactUs";
    button.textContent = text;
    return button;
}
mainDisplay();
displayAbout(); 