const input = document.querySelectorAll('.controls .input input');

function handleValues(){
  const suffix = this.dataset.sizing || "";
  if (suffix === "px"){
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.value+suffix)
  }else{
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
  }
}

function changeValues(){
  const suffix = this.dataset.sizing || "";
  const span = document.querySelector(`.${this.name}`);
  if (suffix === "px"){
    span.innerText = this.value + suffix;
  }else{
    span.innerText = this.value;
  }
}

input.forEach(input => input.addEventListener('change', handleValues));
input.forEach(input => input.addEventListener('change', changeValues));
input.forEach(input => input.addEventListener('mousemove', changeValues));