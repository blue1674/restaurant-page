function displayContactUs(){
    let content = document.getElementById('content');
    content.innerHTML = ""; 
    let contacts = document.createElement('div');
    contacts.id = "contacts";  
    contacts.innerHTML = "<div> Contacts </div> <div> Email: thecoffeemotel@abc.com </div> <div> Mobile: 999 999 9932 </div>";
    content.appendChild(contacts);
}
export default displayContactUs