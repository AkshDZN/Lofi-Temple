
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




const pomodoro = document.querySelector(".pomodoro");
const pomoEdit = document.querySelector(".pomo-edit");

let pomoState = 0;


function pomoClick() {

    if (pomoState === 0) {
        pomoEdit.style.translate = "0px 0px";
        pomoEdit.style.opacity = "100%";
        pomoEdit.style.scale = "1";
        pomoState = 1;
    } else if (pomoState === 1) {
        pomoEdit.style.translate = "0px 50px";
        pomoEdit.style.opacity = "0%";
        pomoEdit.style.scale = "0.8";
        pomoState = 0;
    }
}


let timer;
let tMinutes = 24;
let tSeconds = 59;
let isPaused = true;



function startTimer() {
	timer = setInterval(() => {
		pomodoro.innerHTML = tMinutes + ":" + tSeconds;

		tSeconds--;

		if (tSeconds <= -1) {
			tMinutes--;
			tSeconds = 59;
		}

		if (tMinutes <= -1) {
			clearInterval(timer);
		}
	}, 1000);
}

function pauseTimer() {
	clearInterval(timer);
	isPaused = true;
}

function timerCheck() {
	if (isPaused) {
		startTimer();
		isPaused = false;
	} else {
		console.log("not possible");
	}
}

function askTime() {
	let pMinutes = prompt("Enter a time in minutes", "25");

	if (pMinutes != null) {
		if (!isNaN(pMinutes) && pMinutes > 0) {
			tMinutes = pMinutes;
			tSeconds = 0;
			clearInterval(timer);
			isPaused = true;
			startTimer();
		} else {
			alert("please type a number greater than 0");
			askTime();
		}
	}
}


