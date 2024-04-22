
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

const themes = document.querySelector(".themebx");

let thMenuState = 0;

function themeMenu() {
	if (thMenuState === 0) {
        themes.style.translate = "0px 0px";
        themes.style.opacity = "100%";
        themes.style.scale = "1";
		
        thMenuState = 1;
    } else if (thMenuState === 1) {
        themes.style.translate = "0px 50px";
        themes.style.opacity = "0%";
        themes.style.scale = "0.8";
        thMenuState = 0;
    }
}


// pomodoro code


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
			alert("timer ended");
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

// theme switcher 
const r = document.querySelector(":root");


//blaze
const th1bg = "url('assets/blaze.png')";
const th1dash = "rgba(131, 43, 24, 0.26)";
const th1dashHover = "rgba(131, 43, 24, 0.5)";
const th1dstroke = "0.5px solid rgba(255, 187, 173, 0.26)";



// play
const th2bg = "url('assets/play.png')";
const th2dash = "rgba(24, 28, 131, 0.26)";
const th2dashHover = "rgba(24, 28, 131, 0.5)";
const th2dstroke = "0.5px solid rgba(179, 173, 255, 0.26)";



// luxury
const th3bg = "url('assets/luxury.png')";
const th3dash = "rgba(24, 28, 131, 0.26)";
const th3dashHover = "rgba(24, 28, 131, 0.5)";	
const th3dstroke = "0.5px solid rgba(179, 173, 255, 0.26)";



//dreams
const th4bg = "url('assets/dreams.png')";
const th4dash = "rgba(131, 43, 24, 0.26)";
const th4dashHover = "rgba(131, 43, 24, 0.5)";
const th4dstroke = "0.5px solid rgba(255, 187, 173, 0.26)";


//memories
const th5bg = "url('assets/memories.png')";
const th5dash = "rgba(131, 43, 24, 0.26)";
const th5dashHover = "rgba(131, 43, 24, 0.5)";
const th5dstroke = "0.5px solid rgba(255, 187, 173, 0.26)";



function theme(thno) {
	if (thno === 1) {
		r.style.setProperty("--bg" , th1bg);
		r.style.setProperty("--dashBg" , th1dash);
		r.style.setProperty("--dashBgHover" , th1dashHover);
		r.style.setProperty("--dashStroke" , th1dstroke);


	} else if (thno === 2) {
		r.style.setProperty("--bg" , th2bg);
		r.style.setProperty("--dashBg" , th2dash);
		r.style.setProperty("--dashBgHover" , th2dashHover);
		r.style.setProperty("--dashStroke" , th2dstroke);


	} else if (thno === 3) {
		r.style.setProperty("--bg" , th3bg);
		r.style.setProperty("--dashBg" , th3dash);
		r.style.setProperty("--dashBgHover" , th3dashHover);
		r.style.setProperty("--dashStroke" , th3dstroke);


	} else if (thno === 4) {
		r.style.setProperty("--bg" , th4bg);
		r.style.setProperty("--dashBg" , th4dash);
		r.style.setProperty("--dashBgHover" , th4dashHover);
		r.style.setProperty("--dashStroke" , th4dstroke);


	} else if (thno === 5) {
		r.style.setProperty("--bg" , th5bg);
		r.style.setProperty("--dashBg" , th5dash);
		r.style.setProperty("--dashBgHover" , th5dashHover);
		r.style.setProperty("--dashStroke" , th5dstroke);


	}
}


// soundmixer reveal 

const mixer = document.querySelector(".totalmixer");

let soundState = 0;

function soundMenu() {
	if (soundState === 0) {
		mixer.style.scale = "1";
		soundState = 1;
	} else if (soundState === 1) {
		mixer.style.scale = "0";
		soundState = 0;
	}
}