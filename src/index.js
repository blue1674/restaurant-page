import displayAbout from './initial-page'
import displayMenu from './menu';
import displayContactUs from './contact';
const structure = function () {
    function mainDisplay() {
        const h1 = document.querySelector('h1');
        let navBar = document.createElement('nav');
        navBar.appendChild(tabCreator('About'));
        navBar.appendChild(tabCreator('Menu'));
        navBar.appendChild(tabCreator('Contact Us'));
        navBar.id = "tabs";
        h1.insertAdjacentElement('afterend', navBar);
    }
    function addTabListeners() {
        const _about = _byId("about");
        const _menu = _byId("menu");
        const _contactUs = _byId("contactUs");
        _about.addEventListener('click', displayAbout());
        _menu.addEventListener('click', displayMenu());
        _contactUs.addEventListener('click', displayContactUs());
        function _byId(id) {
            return document.getElementById(id);
        }
    }
    return { addTabListeners, mainDisplay };
}();



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
structure.mainDisplay();
structure.addTabListeners(); 
