function rcolor() {
  let v1 = Math.ceil( Math.random() * 255)
  let v2 = Math.ceil( Math.random() * 255)
  let v3 = Math.ceil( Math.random() * 255)
  return `rgb(${v1}, ${v2}, ${v3})`
}

let boxes = document.getElementsByClassName('b')
for (let box of boxes) {
  box.style.backgroundColor = rcolor()
}
