// Get input value
var newItem = document.getElementById('item').value;
var newDesc = document.getElementById('item-desc').value;

// Create new li element
var li = document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(newDesc));

// Create del button element
var deleteBtn = document.createElement('button');
var editBtn = document.createElement('button');


// Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
editBtn.className = 'btn btn-danger btn-sm float-right edit';


// Append text node
deleteBtn.appendChild(document.createTextNode('X'));
editBtn.appendChild(document.createTextNode('edit'));


// Append button to li
li.appendChild(deleteBtn);
li.appendChild(editBtn);

// Append li to list
itemList.appendChild(li);