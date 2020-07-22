const imgSlider = document.querySelectorAll('.slide-in')

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce (func, wait = 10, immediate = true) {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function checkSlide (e) {
  imgSlider.forEach(imgSlide => {
    //Image is at halfway scroll
    const slideInAt = (window.scrollY + window.innerHeight ) - (imgSlide.height / 2)
    console.log(slideInAt)

    //Bottom image
    const imageBottom = imgSlide.offsetTop + imgSlide.height

    const isHalfShown = slideInAt > imgSlide.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom

    if(isHalfShown && isNotScrolledPast){
      imgSlide.classList.add('active')
    }else{
      imgSlide.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))
