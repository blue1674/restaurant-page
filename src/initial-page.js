function displayAbout() {
const content = document.getElementById('content');
let about = document.createElement('div'); 
about.id = 'about'; 
about.innerHTML = "Get the best coffee here!";
content.appendChild(about);
}

export default displayAbout