function getliveClock() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}

// Hour Hand
function getHourHand(s) {
    s %= 43200;
    return ((360 * s / 43200) + 180) % 360;
}

//Minute Hand
function getMinuteHand(s) {
    s %= 3600;
    return ((6 * s / 60) + 180) % 360;
}

//Seconds Hand
function getSecondsHand(s) {
    s %= 60;
    return ((6 * s) + 180) % 360;
}

//functionality
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval( () => {
    let s = getliveClock();
    hour.style.transform = `rotate(${getHourHand(s)}deg)`;
    minutes.style.transform = `rotate(${getMinuteHand(s)}deg)`;
    seconds.style.transform = `rotate(${getSecondsHand(s)}deg)`;
}, 1000);