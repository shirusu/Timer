let output = document.querySelector('p')
let start = document.querySelector('.start-btn')
let stop = document.querySelector('.stop-btn')
let reset = document.querySelector('.reset-btn')

let seconds = 0
let minutes = 0
let hours = 0
let timer

const add = () => {
    seconds++
    if (seconds === 60) {
        seconds = 0
        minutes++
        if(minutes === 60){
            minutes = 0
            hours++
        }
    }
    show()
}

const show = () => {
    let secPretty = seconds
    let minPretty = minutes
    let hourPretty = hours
    seconds < 10 && (secPretty = '0' + seconds)
    minutes < 10 && (minPretty = '0' + minutes)
    hours < 10 && (hourPretty = '0' + hours)
    output.innerHTML = hourPretty + ':' + minPretty + ':' + secPretty
}


start.addEventListener('click', () => {
    timer = setInterval(add, 1000)
    start.setAttribute('disabled','disabled')

})

stop.addEventListener('click', () => {
    timer = clearInterval(timer)
    start.removeAttribute('disabled')

})

reset.addEventListener('click', () => {
    output.textContent = '00:00:00'
    seconds = 0
    minutes = 0
    hours = 0
    timer = clearInterval(timer)
    start.removeAttribute('disabled')
})