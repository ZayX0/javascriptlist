
// Variable for my delete buttons
var getRid = document.getElementsByClassName('remove-icon');

// Variable for my add item button
var addListItem = document.getElementById('add-more');

var top = document.getElementById('list-title');

// Create first item
createNewItem();

addListItem.addEventListener('click', function(){
 createNewItem();
});



/* Add item event listener and creation of new li with required css class properties, input field, and remove icon*/
function createNewItem() {
  var u = document.getElementById('full-item-list');
  var l = document.createElement('li');
  var elinput = document.createElement('input');
  var icon = document.createElement('img');
  elinput.setAttribute('type', 'text');
  elinput.setAttribute('class', 'li-input');
  elinput.setAttribute('placeholder', 'Enter item here');
  l.setAttribute('class', 'list-item');
  icon.setAttribute('class', 'remove-icon');
  icon.setAttribute('src', 'delete.png');
  icon.addEventListener('click', function(e) {
 thaticon(e);
   }, false);
  l.appendChild(elinput);
  l.appendChild(icon);
  u.appendChild(l);
}

// Function to remove items
function thaticon(e) {
  var el = e.target;
  var elListItem= el.parentNode;
  elFullList = elListItem.parentNode;
  elFullList.removeChild(elListItem);
}
