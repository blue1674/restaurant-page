function displayContactUs(){
    let content = document.getElementById('content');
    content.innerHTML = ""; 
    let about = document.createElement('div'); 
    about.innerHTML = "CONTACT US NOW!!!";
    content.appendChild(about);
}
export default displayContactUs