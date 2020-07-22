const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function populateItems(items = [], itemsList){
  itemsList.innerHTML = items.map((item, i) => {
    return `<li>
              <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
              <label for="item${i}">${item.text}</label>
            </li>`
  }).join('')
}

function toggleDone(e){
  if(!e.target.matches('input')) return
  const element = e.target
  const index = element.dataset.index
  items[index].done = !items[index].done // Change the status
  localStorage.setItem('items', JSON.stringify(items)); //Save in local storage with the status updated
  populateItems(items, itemsList); //Rewrite the list
}

function handleSubmit(e){
  e.preventDefault() //Prevent from reloading when submited
  const text = this.querySelector('[name=item]').value
  const item = {
    text,
    done: false
  }
  items.push(item) //Save new item into list
  this.reset()
  populateItems(items, itemsList) //Rewrite list with all the items included the new
  localStorage.setItem('items', JSON.stringify(items));
}

populateItems(items, itemsList)
addItems.addEventListener('submit', handleSubmit)
itemsList.addEventListener('click', toggleDone);