//getting the add button and list groups
var addForm = document.getElementById('addForm');
var itemList = document.getElementById('item-list');

itemList.addEventListener('click',removeItems);
//form submit event
addForm.addEventListener('submit', addItem);

function addItem(e) {

    e.preventDefault();
    var text = document.getElementById('item').value;
    console.log(text);

    var newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.appendChild(document.createTextNode(text));

    var button = document.createElement('button');
    button.className= "btn-ex";
    button.appendChild(document.createTextNode('X'));

    newItem.appendChild(button);

    itemList.appendChild(newItem);
    console.log(itemList);
}

function removeItems(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-ex')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
          }
        }
    }
    

