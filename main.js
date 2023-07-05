var form = document.getElementById('booking-form');
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    var Username = document.getElementById('User-name').value;
    var Email = document.getElementById('E-mail').value;
    //localStorage.setItem('Username',Username);
    //localStorage.setItem('Email',Email);
    const obj = {
      Username,
      Email
    }
    localStorage.setItem(obj.Username, JSON.stringify(obj));
    showUser(obj);
  
  }
function showUser(obj){
  const parentItem = document.getElementById("listofitems");
  const childItem = document.createElement("li");
  childItem.textContent = obj.Username + " - " + obj.Email;
  parentItem.append(childItem);

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "delete";

  deleteButton.onclick = () => {
    localStorage.removeItem(obj.Username);
    parentItem.removeChild(childItem);
  }
  childItem.appendChild(deleteButton);
  parentItem.appendChild(childItem);
}