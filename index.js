const clock = new Date();
const hour = clock.getHours();
const minute = clock.getMinutes();

document.getElementById("time").innerText = hour + ':' + minute;




if (hour < 12) {
    console.log('am')
} else {
    console.log('pm')
}



