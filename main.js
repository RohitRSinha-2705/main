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

const editButton = document.createElement("input");
editButton.type = "button";
editButton.value = "edit";

editButton.onclick = () => {
localStorage.removeItem(obj.Username);
parentItem.removeChild(childItem);
document.getElementById("User-name").value = obj.Username;
document.getElementById("E-mail").value = obj.Email;
}

childItem.appendChild(deleteButton);
childItem.appendChild(editButton);
parentItem.appendChild(childItem);
}