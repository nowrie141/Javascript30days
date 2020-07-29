const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')

function getVideo () {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream
      video.play()
      console.log(localMediaStream)
    })
    .catch(error => {
      console.error(error)
    })
}

function paintToCanvas () {
  const width = video.videoWidth
  const height = video.videoHeight
  canvas.width = width
  canvas.height = height
  return setInterval(() => {
    ctx.drawImage(video, 0, 0)
    //Get the pixels and apply the effect
    let pixels = ctx.getImageData(0, 0, width, height)
    pixels = rgbSplit(pixels)
    ctx.globalAlpha = 0.1
    ctx.putImageData(pixels, 0, 0)
  }, 16)
}

function takePhoto () {
  snap.currentTime = 0
  snap.play()

  const photo = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')
  link.href = photo
  link.setAttribute('download', 'img')
  link.innerHTML = `<img src="${photo}" alt="Download photo" />`
  strip.insertBefore(link, strip.firstChild)
  console.log(photo)
}

//Photo filters

function redEffect (pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] * 1.5 //Red
    pixels.data[i + 1] = pixels.data[i + 1] * 0.5 //Green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5 //Blue
  }
  return pixels
}

function rgbSplit (pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 100] = pixels.data[i] //Red
    pixels.data[i + 50] = pixels.data[i + 1] //Green
    pixels.data[i - 50] = pixels.data[i + 2] //Blue
  }
  return pixels
}


getVideo()

video.addEventListener('canplay', paintToCanvas)
