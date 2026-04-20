// 1. Variables to hold the data
let homeScore = 0;
let guestScore = 0;

// 2. Grab the elements where the scores are displayed
let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

// 3. Create a function to handle the click
function addPoints(team, points) {
    if (team === 'home') {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
}

// 4. Link the function to the buttons
document.getElementById("home-add-1").addEventListener("click", function() {
    addPoints('home', 1);
});

document.getElementById("home-add-2").addEventListener("click", function() {
    addPoints('home', 2);
});

document.getElementById("home-add-3").addEventListener("click", function() {
    addPoints('home', 3);
});

document.getElementById("guest-add-1").addEventListener("click", function() {
    addPoints('guest', 1);
});

document.getElementById("guest-add-2").addEventListener("click", function() {
    addPoints('guest', 2);
});

document.getElementById("guest-add-3").addEventListener("click", function() {
    addPoints('guest', 3);
});


let resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function() {
    // 1. Reset the data variables
    homeScore = 0;
    guestScore = 0;

    // 2. Update the DOM to show 0
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
});