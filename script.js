const dayse = document.getElementById("days");
const hourse = document.getElementById("hours");
const minse = document.getElementById("minutes");
const secondse = document.getElementById("seconds");
const newYears = "1 Apr 2023";


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    console.log(days, hours, minutes, seconds);
    dayse.innerHTML = formatTime(days);
    hourse.innerHTML = formatTime(hours);
    minse.innerHTML = formatTime(minutes);
    secondse.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
countdown();
setInterval(countdown, 1000);