let oneSecInterval = setInterval(pageUpdate, 100);

let countdownDate = new Date(2023, 11, 21);



const pad = (n) => { return n < 10 ? '0' + n : n }

let countdownState = false;
let now = new Date()
document.getElementById("countdown-time").value = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
document.getElementById("countdown-date").value = `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getDate())}`;

pageUpdate();
resetCountdown();
let audioElement;
function pageUpdate() {
    let dateTime = new Date();

    document.getElementById("date").innerHTML = `${dateTime.getUTCFullYear()}-${dateTime.getUTCMonth() + 1}-${dateTime.getUTCDate()}`;
    document.getElementById("time").innerHTML = dateTime.toLocaleTimeString();

    if (countdownState && (countdownDate > dateTime)) {
        let countdown_difference = countdownDate - dateTime;

        let days = Math.floor(countdown_difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((countdown_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((countdown_difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((countdown_difference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    if (countdown_difference <= 0) {
        document.getElementById("countdown").innerHTML = "Countdown Expired";
        if (!audioElement) {
            audioElement = new Audio("ringtone.mp3"); // Replace with the actual path to your audio file
        }
        audioElement.play(); // Play the audio
        resetCountdown();
    }

    else if (countdownDate < dateTime) {
    document.getElementById("countdown").innerHTML = "";
}

}
function setCountdown() {
    document.getElementById("countdown-button-set").style.display = "none";
    document.getElementById("countdown-button-reset").style.display = "inline";
    document.getElementById("countdown").style.display = "block";
    document.getElementById("countdown-date").style.display = "none";
    document.getElementById("countdown-time").style.display = "none";
    countdownState = true;
    countdownDate = new Date(`${document.getElementById("countdown-date").value} ${document.getElementById("countdown-time").value}`);
}

function resetCountdown() {
    document.getElementById("countdown-button-reset").style.display = "none";
    document.getElementById("countdown-button-set").style.display = "inline";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("countdown-date").style.display = "inline";
    document.getElementById("countdown-time").style.display = "inline";
    countdownState = false;
}