let clockInterval;

const updateClock = () => {
  const now = new Date()
  const timeString = `${now.getHours() < 10 ? '0' : ''}${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`
  document.querySelector('#clockDisplay').innerHTML = timeString
}

clockInterval = setInterval(updateClock, 1000)

updateClock()
