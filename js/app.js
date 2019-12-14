document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  // Have querySelectors and addEventListeners here
  const selectElement = document.querySelector('#selector');
  selectElement.addEventListener('change', handleSelectChange);

  const deleteAllButton = document.querySelector('#delete-all-hidden');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

//Selector - displays the correct form and listeners
const handleSelectChange = function(event) {
  const selection = event.target.value
  const selectedElement = document.querySelector(`#new-${selection}-form-hidden`);
  const deleteAllButton = document.querySelector('#delete-all-hidden');
  const toDoText = document.querySelector(`#${selection}-list-hidden`);
  const selectDivision = document.querySelector('#selection');
  selectedElement.id = (`#new-${selection}-form`);
  deleteAllButton.id = ('#delete-all');
  toDoText.id = (`#${selection}-list`);
  selectDivision.style.display = 'none';
  selectedElement.addEventListener('submit', handleNewSubmit);
};

//General submit method
const handleNewSubmit = function (event) {
  event.preventDefault();
  const newItem = createListItem(event.target);
  newItem.classList.add('list-item');
  const list = document.querySelector('#list');
  list.appendChild(newItem);
  // event.target.reset();
};

//General create method
const createListItem = function (values) {
  const listItem = document.createElement('li');
  for(var i = 0; values[i].id != ""; i += 1){
    let id = values[i].id
    console.log(id);
    element = document.createElement('h3')
    element.textContent = `${values[id].value}`;
    element.classList.add([id])
    listItem.appendChild(element);
  };
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete item"
  deleteButton.addEventListener('click', handleDeleteClick);
  listItem.appendChild(deleteButton);
  return listItem;
};

//Delete all method
const handleDeleteAllClick = function (event) {
  const list = document.querySelector('ul');
  list.innerHTML = ''
};

//Delete method
const handleDeleteClick = function (event) {
  event.target.parentNode.remove()
};
