const addButton = document.querySelector('.addButton');
const input = document.querySelector('.input');
const constainer = document.querySelector('.container');

class item{
  constructor(itemName)
  {
    this.createDiv(itemName);
  }

  createDiv(itemName)
  {
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;


    input.classList.add('item_input');
    input.type = 'text';

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

  
    let EditButton = document.createElement('button');
   
    EditButton.classList.add('editButton');
    EditButton.innerHTML = "EDIT";

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.innerHTML = "REMOVE";


    constainer.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(EditButton);
    itemBox.appendChild(removeButton);

    EditButton.addEventListener('click',() => this.edit(input));
    removeButton.addEventListener('click',()=> this.remove(itemBox));
  }
  edit(input)
  {
    input.disabled = ! input.disabled;
  }

  remove(itemBox)
  {
    constainer.removeChild(itemBox);

  }

}

new item("Sport");

addButton.addEventListener("click",check);

function check()
{
  if(input.value != "")
  {
    new item(input.value);
    input.value = "";
  }
}

 window.addEventListener('keydown',(e) => {
   if(e.which == 13)
   {
     check();
   }
 })