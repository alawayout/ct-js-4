const input = document.querySelector('input[type="range"]')
const valueView = document.querySelector('span.counter')

valueView.innerText = input.value

input.addEventListener('input', (event)=>{
    event.preventDefault()
    valueView.innerText = input.value
})
addEventListener('wheel', event=>{
    // event.preventDefault()
    // console.log(123)
    let delta = event.deltaY / 10;
    // console.log(delta)
    input.value = +input.value + delta
    valueView.innerText = input.value
})
input.value = 300;
