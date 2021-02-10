import displayAbout from './about'
import displayMenu from './menu';
import displayContactUs from './contact';
let structure = (function () {
    'use strict';
    function mainDisplay() {
        function _tabCreator(text) {
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
        const h1 = document.querySelector('h1');
        let navBar = document.createElement('nav');

        navBar.appendChild(_tabCreator('About'));
        navBar.appendChild(_tabCreator('Menu'));
        navBar.appendChild(_tabCreator('Contact Us'));
        navBar.id = "tabs";
        h1.insertAdjacentElement('afterend', navBar);
        
        displayAbout(); 
    }

    function addTabListeners() {
        let _about = _byId("about");
        let _menu = _byId("menu");
        let _contactUs = _byId("contactUs");
        _about.addEventListener('click', displayAbout);
        _menu.addEventListener('click', displayMenu);
        _contactUs.addEventListener('click', displayContactUs);

        function _byId(id) {
            return document.getElementById(id);
        }
    }
    return { addTabListeners, mainDisplay };
})();

structure.mainDisplay();
structure.addTabListeners(); 
