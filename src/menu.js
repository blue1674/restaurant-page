
function displayMenu() {
    let content = document.getElementById('content');
    content.style.display = 'grid';
    content.style.gridTemplateColumns = '70% 30%';
    content.style.gridTemplateRows = 'repeat(10, 1fr)';
    for (let i = 1; i <= 10; i++) {
        let name = document.createElement('div'); 
        let price = document.createElement('div');
        name.textContent = `${i}. ABC`; 
        price.textContent = `${i*100}`; 
        content.appendChild(name);
        content.appendChild(price); 
    }

}
export default displayMenu