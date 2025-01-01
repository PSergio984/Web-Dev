// Get references to the form, item list, and search input elements
var addForm = document.getElementById('addForm');
var itemList = document.getElementById('item-list');
var search = document.getElementById('search');

// Add event listener for form submission to add a new item
addForm.addEventListener('submit', addItem);

// Add event listener for keyup event on the search input to filter items
search.addEventListener('keyup', filterItems);

// Add event listener for click event on the item list to remove items
itemList.addEventListener('click', removeItems);

// Function to add a new item to the list
function addItem(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the value of the input field
    var text = document.getElementById('item').value;

    // Create a new list item element
    var newItem = document.createElement('li');
    newItem.className = 'list-group-item'; // Add class for styling

    // Add the input value as text to the new list item
    newItem.appendChild(document.createTextNode(text));

    // Create a delete button element
    var button = document.createElement('button');
    button.className = "btn-ex"; // Add class for styling
    button.appendChild(document.createTextNode('X')); // Add 'X' text to the button

    // Append the delete button to the new list item
    newItem.appendChild(button);

    // Append the new list item to the item list
    itemList.appendChild(newItem);
}

// Function to remove an item from the list
function removeItems(e) {
    // Check if the clicked element has the class 'btn-ex'
    if (e.target.classList.contains('btn-ex')) {
        // Confirm the removal action with the user
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement; // Get the parent list item element
            itemList.removeChild(li); // Remove the list item from the item list
        }
    }
}

// Function to filter items in the list based on the search input
function filterItems(e) {
    var text = e.target.value.toLowerCase(); // Get the search input value and convert to lowercase
    var items = itemList.getElementsByTagName('li'); // Get all list items

    // Convert the HTMLCollection to an array and iterate over each item
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent; // Get the text content of the list item
        // Check if the item name includes the search text
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'flex'; // Display the item if it matches the search text
        } else {
            item.style.display = 'none'; // Hide the item if it does not match the search text
        }
    });
}