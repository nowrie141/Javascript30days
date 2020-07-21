const checkboxes = document.querySelectorAll('input[type="checkbox"]')

let lastChecked

function handleClick (e) {
  let inBetween = false
  //Check if shift is down, and is checking not unchecking
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      if (checkbox === lastChecked || checkbox === this){
        inBetween = !inBetween
      }
      if(inBetween){
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick))
