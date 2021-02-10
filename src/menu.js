
function displayMenu() {
    let names = ["Café Latte", "Espresso", "Americano", "Cappucchino", "Machhiatto"];
    let prices = [3.90, 5.50, 5.50, 5.60, 5.50];
    let content = document.getElementById('content');
    let div = document.createElement('div');
    div.id = "menu"; 
    content.innerHTML = "";
    div.style.gridTemplateRows = `repeat(${names.length}, 1fr)`;
    for (let i = 1; i <= names.length; i++) {
        let name = document.createElement('div');
        let price = document.createElement('div');
        name.textContent = `${names[i-1]}`;
        price.textContent = `$${prices[i-1] * 100}`;
        div.appendChild(name);
        div.appendChild(price);
    }
    content.appendChild(div);
}
export default displayMenu