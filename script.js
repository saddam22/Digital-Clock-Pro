// DIGITAL CLOCK

function digitalClock(){

const now = new Date()

const time = now.toLocaleTimeString()

document.getElementById("digitalClock").innerText = time

}

setInterval(digitalClock,1000)


// ANALOG CLOCK

function analogClock(){

const now = new Date()

const sec = now.getSeconds()
const min = now.getMinutes()
const hr = now.getHours()

document.getElementById("second").style.transform =
`rotate(${sec*6}deg)`

document.getElementById("minute").style.transform =
`rotate(${min*6}deg)`

document.getElementById("hour").style.transform =
`rotate(${hr*30 + min/2}deg)`

}

setInterval(analogClock,1000)


// TIMEZONE CLOCK

function timezoneClock(){

document.getElementById("usa").innerText =
new Date().toLocaleTimeString("en-US",{timeZone:"America/New_York"})

document.getElementById("uk").innerText =
new Date().toLocaleTimeString("en-GB",{timeZone:"Europe/London"})

document.getElementById("japan").innerText =
new Date().toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo"})

}

setInterval(timezoneClock,1000)


// ALARM

let alarm = null

function setAlarm(){

alarm = document.getElementById("alarmTime").value

}

setInterval(()=>{

let now = new Date()
let current = now.toTimeString().slice(0,5)

if(alarm === current){

alert("Alarm Ringing!")

}

},1000)


// STOPWATCH

let time = 0
let stopwatchInterval = null

function startStopwatch(){

stopwatchInterval = setInterval(()=>{

time++

let sec = time % 60
let min = Math.floor(time/60)

document.getElementById("stopwatch").innerText =
`${min}:${sec}`

},1000)

}

function stopStopwatch(){

clearInterval(stopwatchInterval)

}

function resetStopwatch(){

time = 0

document.getElementById("stopwatch").innerText="00:00"

}


// TIMER

function startTimer(){

let seconds = document.getElementById("timerInput").value

let interval = setInterval(()=>{

seconds--

document.getElementById("timerDisplay").innerText = seconds

if(seconds<=0){

clearInterval(interval)

alert("Timer Finished")

}

},1000)

}


// THEME COLOR

document.getElementById("colorPicker")
.addEventListener("input",(e)=>{

document.body.style.background =
e.target.value

})


// DARK MODE

function toggleMode(){

document.body.classList.toggle("bg-gray-900")
document.body.classList.toggle("bg-white")
document.body.classList.toggle("text-black")

}