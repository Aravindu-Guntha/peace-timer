let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let time = document.getElementById("timerText");
let unique;
twentySecondsBtn.onclick = function() {
    let counter = 20;
    clearInterval(unique);
    time.textContent = counter + " seconds left";
    unique = setInterval(function() {
        time.textContent = counter + " seconds left";
        if (counter === 0) {
            time.textContent = "Your Moment is Completed!";
            clearInterval(unique);
        }
        counter = counter - 1;
    }, 1000);
};
thirtySecondsBtn.onclick = function() {

    let counter = 30;
    clearInterval(unique);
    time.textContent = counter + " seconds left";
    unique = setInterval(function() {
        time.textContent = counter + " seconds left";
        if (counter === 0) {
            time.textContent = "Your Moment is Completed!";
            clearInterval(unique);
        }
        counter = counter - 1;
    }, 1000);
};
fortySecondsBtn.onclick = function() {
    let counter = 40;
    clearInterval(unique);
    time.textContent = counter + " seconds left";
    unique = setInterval(function() {
        time.textContent = counter + " seconds left";
        if (counter === 0) {
            time.textContent = "Your Moment is Completed!";
            clearInterval(unique);
        }
        counter = counter - 1;
    }, 1000);
};
oneMinuteBtn.onclick = function() {
    let counter = 60;
    clearInterval(unique);
    time.textContent = counter + " seconds left";
    unique = setInterval(function() {
        time.textContent = counter + " seconds left";
        if (counter === 0) {
            time.textContent = "Your Moment is Completed!";
            clearInterval(unique);
        }
        counter = counter - 1;
    }, 1000);
};