// START of TimeWidget Code

const clock = new Date();
const hour = clock.getHours();
const minute = clock.getMinutes();

const time = clock.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
const formattime = time.replace("AM","").replace("PM","");
document.getElementById("time").innerText = formattime;

if (hour < 12) {
    document.getElementById("am").style.opacity = "100%"
    document.getElementById("pm").style.opacity = "20%"
} else {
    document.getElementById("am").style.opacity = "20%"
    document.getElementById("pm").style.opacity = "100%"
}

// END of TimeWidget Code


