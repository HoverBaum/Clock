let clockInterval;

const updateClock = () => {
  const now = new Date()
  const timeString = `${now.getHours()}:${now.getMinutes()}`
  document.querySelector('#clockDisplay').innerHTML = timeString
}

clockInterval = setInterval(updateClock, 1000)

updateClock()
