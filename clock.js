const secondsHand = document.querySelector("[data-seconds]")
const minutesHand = document.querySelector("[data-minutes]")
const hoursHand = document.querySelector("[data-hours]")

setInterval(setTime, 1000)

function setTime() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

  rotateHand(secondsHand, secondsRatio)
  rotateHand(minutesHand, minutesRatio)
  rotateHand(hoursHand, hoursRatio)
}


function rotateHand(hand, rotationRatio) {
  hand.style.setProperty("--rotation", rotationRatio * 360)
}

setTime()