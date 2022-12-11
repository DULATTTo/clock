let timerID
let lastRenderTime = 0
let timeBeforeLastStop = 0

const timer = document.getElementById("stopwatch-timer")
const startButton = document.getElementById("start-button")
const stopButton = document.getElementById("stop-button")
const resetButton = document.getElementById("reset-button")

startButton.addEventListener("click", startTime)
stopButton.addEventListener("click", stopTime)
resetButton.addEventListener("click", resetTime)

function startTime() {
  startButton.disabled = true
  stopButton.disabled = false
  resetButton.disabled = true

  lastRenderTime = Date.now()
  timerID = requestAnimationFrame(updateTime)
}

function stopTime() {
  stopButton.disabled = true
  startButton.disabled = false
  resetButton.disabled = false
  timeBeforeLastStop += Date.now() - lastRenderTime
  cancelAnimationFrame(timerID)
}

function resetTime() {
  resetButton.disabled = true
  timer.textContent = "00:00:000"
  timeBeforeLastStop = 0
}

function updateTime() {
  const milisec = Date.now() - lastRenderTime + timeBeforeLastStop
  const sec = milisec / 1000
  const min = sec / 60

  const milisecText = formatNumber((milisec % 1000), 3)
  const secText = formatNumber(Math.floor(sec) % 60, 2)
  const minText = formatNumber(Math.floor(min) % 60, 2)

  timer.textContent = `${minText}:${secText}:${milisecText}`
  timerID = requestAnimationFrame(updateTime)
}

function formatNumber(time, length) {
  return String(time).padStart(length, "0")
}
