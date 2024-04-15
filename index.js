
const clock = new Date();
const hour = clock.getHours();
const minute = clock.getMinutes();

const time = clock.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
const formattime = time.replace("AM","").replace("PM","");
document.querySelector(".time").innerText = formattime;

if (hour < 12) {
    document.querySelector(".meridian").innerText = "AM";
} else {
    document.querySelector(".meridian").innerText = "PM";
}
