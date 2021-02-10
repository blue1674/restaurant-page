function displayAbout() {
let content = document.getElementById('content');
content.innerHTML = ""; 
let about = document.createElement('div'); 
about.innerHTML = "Get the best coffee here!";
content.appendChild(about);
}

export default displayAbout