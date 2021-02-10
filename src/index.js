import displayAbout from './initial-page'
function mainDisplay(){
    const h1 = document.querySelector('h1'); 
    let navBar = document.createElement('nav'); 
    navBar.appendChild(tabCreator('Menu')); 
    navBar.appendChild(tabCreator('About'));
    navBar.appendChild(tabCreator('Contact Us'));
    navBar.id = "tabs"; 
    h1.insertAdjacentElement('afterend', navBar); 
}
function tabCreator(text){
    let button =  document.createElement('button');
    button.textContent = text; 
    return button; 
}
mainDisplay(); 
displayAbout(); 