//array of every possible venue as objects
const venueList = [
{   name: "The Cornubia",
    food: false,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: "high",
    games: "board",
    wait: "low",
    crowd: "high",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "low",
    score: 0,
    placeid: "ChIJzQhmhXuOcUgRXXHy3Rvf5tE",
},
{   name: "Renatos",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "normal",
    outside: "low",
    games: null,
    wait: "low",
    crowd: "medium",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJC1hs-niOcUgRMmAhwjDeIuc",
},
{   name: "Left Handed Giant",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "ipa",
    outside: "mediun",
    games: "pool",
    wait: "high",
    crowd: "high",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "high",
    score: 0,
    placeid: "ChIJ53EQGYaPcUgRAnYa9mcOgkY",
},
{   name: "The Ostrich",
    food: true,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: "very high",
    games: null,
    wait: "high",
    crowd: "low",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "low",
    score: 0,
    placeid: "ChIJndu6HSiPcUgRD50BTyKxfk8",
},
{   name: "The Golden Guinea",
    food: false,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: "low",
    games: null,
    wait: "low",
    crowd: "low",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "low",
    score: 0,
    placeid: "ChIJReFPD3-OcUgRuz6qRGuakGA",
},
{   name: "The Famous Royal Navy Volunteer",
    food: true,
    pizza: false,
    dancing: false,
    drinks: "ipa",
    outside: "low",
    games: null,
    wait: "medium",
    crowd: "high",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "high",
    score: 0,
    placeid: "ChIJH7RWjniOcUgRuJnqpQHS3IY",
},
{   name: "BocaBar Finzels Reach",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "normal",
    outside: "medium",
    games: null,
    wait: "medium",
    crowd: "high",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJVeKhGtaPcUgRjmyEMWt7RWE",
},
{   name: "BrewDog",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "ipa",
    outside: "low",
    games: "board",
    wait: "low",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJZ2lYNXiOcUgRNMNuvKtopyQ",
},
{   name: "The Old Duke",
    food: false,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: "medium",
    games: null,
    wait: "medium",
    crowd: "high",
    traditional: true,
    dive: false,
    livemusic: true,
    spoons: false,
    noise: "high",
    score: 0,
    placeid: "ChIJ34Js-niOcUgRJhPD6HuRvT4",
},
{   name: "Kongs",
    food: false,
    pizza: false,
    dancing: true,
    drinks: "normal",
    outside: "low",
    games: "pingpong",
    wait: "medium",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "high",
    score: 0,
    placeid: "ChIJ_XS-j3iOcUgRb34ychUE9GI",
},
{   name: "The Beer Emporium",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "ipa",
    outside: null,
    games: null,
    wait: "medium",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJ_XS-j3iOcUgRFgB3qNXySHY",
},
{   name: "Small Bar",
    food: false,
    pizza: false,
    dancing: false,
    drinks: "ipa",
    outside: "low",
    games: null,
    wait: "medium",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJy69AhHiOcUgRyGhXk62AbE0",
},
{   name: "The Bank Tavern",
    food: false,
    pizza: false,
    dancing: true,
    drinks: "normal",
    outside: "medium",
    games: null,
    wait: "low",
    crowd: "low",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "low",
    score: 0,
    placeid: "ChIJX_shlHeOcUgRyx-4dTU_wHU",
},
{   name: "The Commercial Rooms",
    food: false,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: null,
    games: null,
    wait: "low",
    crowd: "high",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: true,
    noise: "medium",
    score: 0,
    placeid: "ChIJEYY1GXiOcUgRZcwOifk-ic0",
},
{   name: "Bambalan",
    food: true,
    pizza: false,
    dancing: false,
    drinks: "cocktail",
    outside: "high",
    games: "pingpong",
    wait: "low",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJKxoOjNeNcUgR4Qvd19ViLnc",
},
{   name: "The Mother's Ruin",
    food: false,
    pizza: false,
    dancing: true,
    drinks: "normal",
    outside: null,
    games: null,
    wait: "low",
    crowd: "high",
    traditional: false,
    dive: true,
    livemusic: true,
    spoons: false,
    noise: "high",
    score: 0,
    placeid: "ChIJwcOwNniOcUgRfNWwiAPTZNc",
},
{   name: "The Old Fish Market",
    food: true,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: null,
    games: "board",
    wait: "low",
    crowd: "medium",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJBetiNniOcUgR7OrTvV6pVVk",
},
{   name: "The Stable",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "cider",
    outside: null,
    games: null,
    wait: "medium",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: true,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJ4X5MU9aNcUgRCkWpNFl-4k0",
},
{   name: "King Street Brew House",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "normal",
    outside: null,
    games: "board",
    wait: "low",
    crowd: "medium",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJs_-N9niOcUgRASDu5HB59I0",
},
{   name: "Ye Shakespeare",
    food: true,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: "low",
    games: null,
    wait: "low",
    crowd: "high",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJK9_tunuOcUgRPDBijQJU7CE",
},
{   name: "The Knights Templar",
    food: true,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: "medium",
    games: null,
    wait: "low",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: true,
    noise: "medium",
    score: 0,
    placeid: "ChIJO9evu2SOcUgRm3Gz4vrc3QM",
},
{   name: "The Bay Horse",
    food: true,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: "low",
    games: "board",
    wait: "medium",
    crowd: "medium",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
    placeid: "ChIJy64-ftiNcUgRFnty7yRuWsE",
},
{   name: "The Sidings",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "normal",
    outside: null,
    games: null,
    wait: "low",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "low",
    score: 0,
    placeid: "ChIJAQDwxnyOcUgRyqFsut_6ihg",
},
];

const validationList = [true];

let topThreeVenues = [];
const userResults = {};
let currentSlide = 0;

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", function(){
    startQuiz();
})

var previousButton = document.getElementById("previousButton");
previousButton.addEventListener("click", function() {
    showOneQuestionTwoPrevious();
    previousSlide();
})

var nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function() {
    if (answerValidation() === true) {
    showOneQuestionTwoNext()
    nextSlide(); }
})

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
    if (answerValidation() === true) {
        submitUserResults();
        calculateTotalScore();
        sortListByScore();
        displayResults(); }
});

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function(){
    backToStart();
});

var labels = document.getElementsByTagName("label");
for (i = 0; i < labels.length; i++) {
labels[i].addEventListener("click", function(){
    validationList[currentSlide] = true;
    document.getElementsByClassName("message")[currentSlide].innerHTML = "";
}
)};


function submitUserResults() {
// if radio is checked, add to userResults object
    submitFoodResult();
    submitPizzaResult();
    submitDancingResult();
    submitDrinksResult();
    submitOutsideResult();
    submitGamesResult();
    submitWaitResult();
    submitCrowdedResult();
    submitTraditionalResult();
    submitDiveResult();
    submitLiveMusicResult();
    submitSpoonsResult();
    submitNoiseResult();
};

function submitFoodResult() {
    if (document.getElementById('foodYes').checked) {
        userResults.food = true;
    } else if (document.getElementById('foodNo').checked) {
        userResults.food = false;
    }
 };

function submitPizzaResult() {
    if (document.getElementById('pizzaYes').checked) {
        userResults.pizza = true;
        userResults.dancing = null;
    } else if (document.getElementById('pizzaNo').checked) {
        userResults.pizza = false;
        userResults.dancing = null;
    } else
        userResults.pizza = null;
};

function submitDancingResult() {
    if (document.getElementById('danceYes').checked) {
        userResults.dancing = true;
        userResults.pizza = null;
    } else if (document.getElementById('danceNo').checked) {
        userResults.dancing = false;
        userResults.pizza = null;
    } else
        userResults.dancing = null;
};

function submitDrinksResult() {
    if (document.getElementById('lager').checked) {
        userResults.drinks = "normal";
    } else if(document.getElementById('wine').checked) {
        userResults.drinks = "normal";
    } else if(document.getElementById('cocktail').checked) {
        userResults.drinks = "cocktail";
    } else if(document.getElementById('ipa').checked) {
        userResults.drinks = "ipa";
    } else if(document.getElementById('cider').checked) {
        userResults.drinks = "cider";
    } else if(document.getElementById('drinkOther').checked) {
        userResults.drinks = "normal";
    }
};

function submitOutsideResult() {
    if (document.getElementById('outsideVery').checked) {
        userResults.outside = "high";
    } else if(document.getElementById('outsideFairly').checked) {
        userResults.outside = "medium";
    } else if(document.getElementById('outsideNot').checked) {
        userResults.outside = "low";
    }
};

function submitGamesResult() {
    if (document.getElementById('board').checked) {
        userResults.games = "board";
    } else if(document.getElementById('pool').checked) {
        userResults.games = "pool";
    } else if(document.getElementById('pingpong').checked) {
        userResults.games = "pingpong";
    } else if(document.getElementById('gamesNo').checked) {
       userResults.games = null;
    }
};

function submitWaitResult() {
    if (document.getElementById('waitHigh').checked) {
        userResults.wait = "high";
    } else if(document.getElementById('waitMedium').checked) {
        userResults.wait = "medium";
    } else if(document.getElementById('waitLow').checked) {
        userResults.wait = "low";
}
};

function submitCrowdedResult() {
    if (document.getElementById('crowdHigh').checked) {
        userResults.crowd = "high";
    } else if(document.getElementById('crowdMedium').checked) {
        userResults.crowd = "medium";
    } else if(document.getElementById('crowdLow').checked) {
        userResults.crowd = "low";
    }
};

function submitTraditionalResult() {
    if (document.getElementById('traditionalYes').checked) {
        userResults.traditional = "yes";
    } else if(document.getElementById('traditionalMiddle').checked) {
        userResults.traditional = "middle";
    } else if(document.getElementById('traditionalNo').checked) {
        userResults.traditional = "no";
    }
};

function submitDiveResult() {
    if (document.getElementById('diveYes').checked) {
        userResults.dive = true;
    } else if (document.getElementById('diveNo').checked) {
        userResults.dive = false;
    }
};

function submitLiveMusicResult() {
    if (document.getElementById('musicYes').checked) {
        userResults.livemusic = true;
    } else if (document.getElementById('musicNo').checked) {
        userResults.livemusic = false;
    }
};

function submitSpoonsResult() {
    if (document.getElementById('spoonsLove').checked) {
        userResults.spoons = "love";
    } else if (document.getElementById('spoonsMiddle').checked) {
        userResults.spoons = "middle";
    } else if (document.getElementById('spoonsNo').checked) {
        userResults.spoons = "no";
    }
};

function submitNoiseResult() {
    if (document.getElementById('noiseHigh').checked) {
        userResults.noise = "high";
    } else if(document.getElementById('noiseMedium').checked) {
        userResults.noise = "medium";
    } else if(document.getElementById('noiseLow').checked) {
        userResults.noise = "low";
    }
};


function calculateTotalScore() {
    resetScoresToZero()
    addFoodScore()
    addPizzaScore()
    addDancingScore()
    addDrinksScore()
    addGamesScore()
    addWaitScore()
    addCrowdedScore()
    addTraditionalScore()
    addDiveScore()
    addLiveMusicScore()
    addSpoonsScore()
    addNoiseScore()
    addOutsideScore()
    addRandomNumber()
//calculates the points awarded by each question
};

function resetScoresToZero() {
    for(var i = 0; i < venueList.length; i++) {
        venueList[i].score = 0;
    }
};


//compare user results with scores of venue list array
function addFoodScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].food === true && userResults.food === true){
    venueList[i].score += 15
    } else if (venueList[i].food === false && userResults.food === true){
    venueList[i].score -= 15
}
}
};

function addPizzaScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].pizza === userResults.pizza){
    venueList[i].score += 10
 } else
    venueList[i].score -= 10
    }
};

function addDancingScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 15
    } else if(venueList[i].dancing === false && userResults.dancing === true)
    venueList[i].score -= 15
}
};

function addDrinksScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].drinks === userResults.drinks && venueList[i].drinks != "normal"){
    venueList[i].score += 10
}
}
};

function addGamesScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].games === userResults.games && venueList[i].games != null){
    venueList[i].score += 7
}
}
};

function addWaitScore() {
    for(var i = 0; i < venueList.length; i++) {
    if((venueList[i].wait === "high" || venueList[i].wait === "medium" || venueList[i].wait === "low") && userResults.wait === "high"){
    venueList[i].score += 10
    } else if ((venueList[i].wait === "medium" || venueList[i].wait === "low") && userResults.wait === "medium"){
    venueList[i].score += 10
    } else if (venueList[i].wait === "low" && userResults.wait === "low"){
    venueList[i].score += 10
    } else if (venueList[i].wait === "high" && userResults.wait === "low"){
    venueList[i].score -= 20
    } else if (venueList[i].wait === "medium" && userResults.wait === "low"){
    venueList[i].score -= 10
    }
}
};

function addOutsideScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].outside === "very high" && userResults.outside === "high"){
    venueList[i].score += 12
    } else if (venueList[i].outside === "very high" && userResults.outside === "medium"){
    venueList[i].score += 8
    } else if (venueList[i].outside === "high" && userResults.outside === "high"){
    venueList[i].score += 10
    } else if (venueList[i].outside === "high" && userResults.outside === "medium"){
    venueList[i].score += 7
    } else if (venueList[i].outside === "medium" && userResults.outside === "high"){
    venueList[i].score += 5
    } else if (venueList[i].outside === "medium" && userResults.outside === "medium"){
    venueList[i].score += 2
    } else if (venueList[i].outside === "low" && userResults.outside === "high"){
    venueList[i].score -= 7
    } else if (venueList[i].outside === null && userResults.outside === "high"){
    venueList[i].score -= 20 
    } else if (venueList[i].outside === null && userResults.outside === "medium"){
    venueList[i].score -= 15
    }
}
};

function addCrowdedScore() {
    for(var i = 0; i < venueList.length; i++) {
    if((venueList[i].crowd === "high" || venueList[i].crowd === "medium" || venueList[i].crowd === "low") && userResults.crowd === "high"){
    venueList[i].score += 10
    } else if ((venueList[i].crowd === "medium" || venueList[i].crowd === "low") && userResults.crowd === "medium"){
    venueList[i].score += 10
    } else if (venueList[i].crowd === "low" && userResults.crowd === "low"){
    venueList[i].score += 10
    }
}
};

function addTraditionalScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].traditional === true && userResults.traditional === "yes"){
    venueList[i].score += 15
    } else if(venueList[i].traditional === true && userResults.traditional === "no"){
    venueList[i].score -= 15
    }
}
};

function addDiveScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dive === userResults.dive){
    venueList[i].score += 15
    }
}
};

function addLiveMusicScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].livemusic === true && userResults.livemusic=== true){
    venueList[i].score += 15
    } else if (venueList[i].livemusic === false && userResults.livemusic=== true)
    venueList[i].score -= 10
}
};

function addSpoonsScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].spoons === true && userResults.spoons === "love"){
    venueList[i].score += 15
    } else if(venueList[i].spoons === true && userResults.spoons === "no") {
    venueList[i].score -= 15
    }
}
};

function addNoiseScore() {
    for(var i = 0; i < venueList.length; i++) {
    if((venueList[i].noise === "high" || venueList[i].noise === "medium" || venueList[i].noise === "low") && userResults.noise === "high"){
    venueList[i].score += 15
    } else if ((venueList[i].noise === "medium" || venueList[i].noise === "low") && userResults.noise === "medium"){
    venueList[i].score += 15
    } else if (venueList[i].noise === "low" && userResults.noise === "low"){
    venueList[i].score += 15
    } else if (venueList[i].noise === "high" && userResults.noise === "low"){
    venueList[i].score -= 15
    }
}
};

function addRandomNumber() {
    for(var i = 0; i < venueList.length; i++) {
        var random = Math.round(Math.random() * 100) / 100;
        venueList[i].score += random;
}
};

function sortListByScore() {
    venueList.sort(function(x, y){return y.score - x.score});
};

function startQuiz() {
    nextSlide()
    var next = document.getElementById("next");
    var start = document.getElementById("start");
    next.classList.add("shown");
    next.classList.remove("hidden");
    start.classList.add("hidden");
    
}

function nextSlide() {
    var slide = document.getElementsByClassName("slide");
    slide[currentSlide].classList.add("hidden");
    currentSlide = currentSlide += 1;
    slide[currentSlide].classList.remove("hidden");
    if (currentSlide === slide.length-1) {
        var next = document.getElementById("next");
        var submit = document.getElementById("submit");
        next.classList.add("hidden");
        next.classList.remove("shown");
        submit.classList.add("shown");
        submit.classList.remove("hidden");
    } else if (currentSlide === 2 || currentSlide === 3){
        var previous = document.getElementById("previous");
        previous.classList.add("shown")
        previous.classList.remove("hidden");
    }
}

function previousSlide () {
    var slide = document.getElementsByClassName("slide");
    if (currentSlide === 2) {
        var previous = document.getElementById("previous");
        previous.classList.add("hidden");
        previous.classList.remove("shown");
    } else if (currentSlide === slide.length-1){
        var next = document.getElementById("next");
        var submit = document.getElementById("submit");
        next.classList.add("shown");
        next.classList.remove("hidden");
        submit.classList.add("hidden");
        submit.classList.remove("shown");
    }
    slide[currentSlide].classList.add("hidden");
    currentSlide = currentSlide -= 1;
    slide[currentSlide].classList.remove("hidden");
    document.getElementsByClassName("message")[currentSlide].innerHTML = "";  
}

function answerValidation() {
    if (validationList[currentSlide] != true) {
        document.getElementsByClassName("message")[currentSlide].innerHTML = "<p>Please select an option!</p>";
    } else {
    return true }
}

function showOneQuestionTwoNext() {
    if (currentSlide === 1 && document.getElementById('foodNo').checked) {
        var slide = document.getElementsByClassName("slide");
        slide[currentSlide].classList.add("hidden");
        currentSlide += 1

    } else if (currentSlide === 2) {
        var slide = document.getElementsByClassName("slide");
        slide[currentSlide].classList.add("hidden");
        currentSlide += 1
    }
}

function showOneQuestionTwoPrevious() {
     if (currentSlide === 4 && document.getElementById('foodYes').checked) {
        var slide = document.getElementsByClassName("slide");
        slide[currentSlide].classList.add("hidden");
        currentSlide -= 1

    } else if (currentSlide === 3) {
        var slide = document.getElementsByClassName("slide");
        slide[currentSlide].classList.add("hidden");
        currentSlide -= 1
    }
}


function displayResults() {
    var slide = document.getElementsByClassName("slide");
    slide[currentSlide].classList.add("hidden");
    currentSlide = currentSlide += 1;
    var submit = document.getElementById("submit");
    var previous = document.getElementById("previous");
    var results = document.getElementById("results");
    var reset = document.getElementById("reset");
    submit.classList.add("hidden");
    submit.classList.remove("shown");
    previous.classList.add("hidden");
    previous.classList.remove("shown");
    results.classList.toggle("hidden");
    reset.classList.add("shown");
    reset.classList.remove("hidden");
    topThreeVenues = venueList.slice(0,3);
    var firstPlaceName = topThreeVenues[0].name;
    var secondPlaceName = topThreeVenues[1].name;
    var thirdPlaceName = topThreeVenues[2].name;
    console.log("1. " + firstPlaceName + " 2. " + secondPlaceName + " 3. " + thirdPlaceName);
    var results = document.getElementById("results");
    var firstResult = document.getElementById("firstresult");
    var secondResult = document.getElementById("secondresult");
    var thirdResult = document.getElementById("thirdresult");
    var firstHeading = document.querySelector("#firstresult .heading");
    var secondHeading = document.querySelector("#secondresult .heading");
    var thirdHeading = document.querySelector("#thirdresult .heading");
    var firstMap = document.querySelector("#firstresult .map");
    var secondMap= document.querySelector("#secondresult .map");
    var thirdMap = document.querySelector("#thirdresult .map");
    var firstDetails = document.querySelector("#firstresult .details");
    var secondDetails = document.querySelector("#secondresult .details");
    var thirdDetails = document.querySelector("#thirdresult .details");
    firstHeading.innerHTML = `<h2>1. ${firstPlaceName}</h2>`;
    secondHeading.innerHTML = `<h2>2. ${secondPlaceName}</h2>`;
    thirdHeading.innerHTML = `<h2>3. ${thirdPlaceName}</h2>`;
    presentResultsData();
}

function presentResultsData() {
    getFirstPlaceData(presentData);
    getSecondPlaceData(presentData);
    getThirdPlaceData(presentData);
}

function getFirstPlaceData(first) {
        var request = {
            placeId: topThreeVenues[0].placeid,
            fields: ['geometry.location'],
        }
        var result = document.querySelectorAll(".details")[0];
        var service = new google.maps.places.PlacesService(result);
        service.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                    place.arrayposition = 0;
                    first(place);
            }
    }
};

function getSecondPlaceData(second) {
    var request = {
        placeId: topThreeVenues[1].placeid,
        fields: ['geometry.location'],
        }
    var result = document.querySelectorAll(".details")[1];
    var service = new google.maps.places.PlacesService(result);
    service.getDetails(request, callback);
    function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
                place.arrayposition = 1;
                second(place);
            }
    }
};

function getThirdPlaceData(third) {
        var request = {
            placeId: topThreeVenues[2].placeid,
            fields: ['geometry.location'],
        }
        var result = document.querySelectorAll(".details")[2];
        var service = new google.maps.places.PlacesService(result);
        service.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                    place.arrayposition = 2;
                    third(place);
            }
    }
};

function presentData(place) {
        createMap(place);
        createDetails(place);
};

function createMap(place) {
        var maps = document.getElementsByClassName("map");
        var map = new google.maps.Map(maps[place.arrayposition], {zoom: 17, center: place.geometry.location});
        var marker = new google.maps.Marker({position: place.geometry.location, map: map});
}

function createDetails(place) {
    var details = document.getElementsByClassName("details")[place.arrayposition];
    details.innerHTML = `<ul>
                            <li>test</li>
                            <li>test2</li>
                            <li>test3</li>
                            <li>test4</li>
                            <li>test5</li>
                        </ul>`;
}



function backToStart() {
    var start = document.getElementById("start");
    var results = document.getElementById("results");
    var reset = document.getElementById("reset");
    start.classList.toggle("hidden");
    results.classList.toggle("hidden");
    reset.classList.add("hidden");
    reset.classList.remove("shown");
    currentSlide = 0;
}