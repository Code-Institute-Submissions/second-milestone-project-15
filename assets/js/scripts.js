const venueList = [
{   name: "cornubia",
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
},
{   name: "renatos",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "normal",
    outside: "low",
    games: null,
    wait: "low",
    crowd: "medium",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
},
{   name: "lhg",
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
},
{   name: "ostrich",
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
},
{   name: "goldenguinea",
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
},
{   name: "navyvolunteer",
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
},
{   name: "bocabar",
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
},
{   name: "brewdog",
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
},
{   name: "oldduke",
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
},
{   name: "kongs",
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
},
{   name: "beeremporium",
    food: true,
    pizza: true,
    dancing: false,
    drinks: "normal",
    outside: null,
    games: null,
    wait: "low",
    crowd: "high",
    traditional: false,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
},
{   name: "smallbar",
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
},
{   name: "thebank",
    food: false,
    pizza: false,
    dancing: true,
    drinks: "normal",
    outside: "medium",
    games: null,
    wait: "low",
    crowd: "medium",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "low",
    score: 0,
},
{   name: "commercialrooms",
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
},
{   name: "bambalan",
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
},
{   name: "mothersruin",
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
},
{   name: "oldfishmarket",
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
},
{   name: "thestable",
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
},
{   name: "brewhouse",
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
},
{   name: "shakespeare",
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
},
{   name: "knightstemplar",
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
},
{   name: "bayhorse",
    food: false,
    pizza: false,
    dancing: false,
    drinks: "normal",
    outside: "low",
    games: "board",
    wait: "medium",
    crowd: "high",
    traditional: true,
    dive: false,
    livemusic: false,
    spoons: false,
    noise: "medium",
    score: 0,
},
{   name: "sidings",
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
    noise: "medium",
    score: 0,
},
];
//array of every possible venue as objects

var userResults = {};

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
 }

function submitPizzaResult() {
    if (document.getElementById('pizzaYes').checked) {
        userResults.pizza = true;
    } else if (document.getElementById('pizzaNo').checked) {
        userResults.pizza = false;
    }
}

function submitDancingResult() {
    if (document.getElementById('danceYes').checked) {
        userResults.dancing = true;
    } else if (document.getElementById('danceNo').checked) {
        userResults.dancing = false;
    }
}

function submitDrinksResult() {
    if (document.getElementById('lager').checked) {
        userResults.drinks = "standard";
    } else if(document.getElementById('wine').checked) {
        userResults.drinks = "standard";
    } else if(document.getElementById('cocktail').checked) {
        userResults.drinks = "cocktail";
    } else if(document.getElementById('ipa').checked) {
        userResults.drinks = "ipa";
    } else if(document.getElementById('cider').checked) {
        userResults.drinks = "cider";
    } else if(document.getElementById('drinkOther').checked) {
        userResults.drinks = "standard";
    }
}

function submitOutsideResult() {
    if (document.getElementById('outsideVery').checked) {
        userResults.outside = "high";
    } else if(document.getElementById('outsideFairly').checked) {
        userResults.outside = "medium";
    } else if(document.getElementById('outsideNot').checked) {
        userResults.outside = "low";
    }
}

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
}

function submitWaitResult() {
    if (document.getElementById('waitYes').checked) {
        userResults.wait = true;
    } else if(document.getElementById('waitNo').checked) {
        userResults.wait = false;
    }
}

function submitCrowdedResult() {
    if (document.getElementById('crowdYes').checked) {
        userResults.crowd = true;
    } else if(document.getElementById('crowdNo').checked) {
        userResults.crowd = false;
    }
}

function submitTraditionalResult() {
    if (document.getElementById('traditionalYes').checked) {
        userResults.traditional = true;
    } else if(document.getElementById('traditionalNo').checked) {
        userResults.traditional = false;
    }
}

function submitDiveResult() {
    if (document.getElementById('diveYes').checked) {
        userResults.dive = true;
    } else if (document.getElementById('diveNo').checked) {
        userResults.food = false;
    }
}

function submitLiveMusicResult() {
    if (document.getElementById('musicYes').checked) {
        userResults.livemusic = true;
    } else if (document.getElementById('musicNo').checked) {
        userResults.noise = false;
    }
}

function submitSpoonsResult() {
    if (document.getElementById('spoonsLove').checked) {
        userResults.spoons = "love";
    } else if (document.getElementById('spoonsMiddle').checked) {
        userResults.spoons = "middle";
    } else if (document.getElementById('spoonsNo').checked) {
        userResults.spoons = "no";
    }
}

function submitNoiseResult() {
    if (document.getElementById('noiseYes').checked) {
        userResults.noise = true;
    } else if(document.getElementById('noiseNo').checked) {
        userResults.noise = false;
    }
}


function calculateTotalScore() {
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
//calculates the points awarded by each question
};



//compare user results with scores of venue list array
function addFoodScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
    }
}
};

function addPizzaScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].pizza === true && userResults.pizza === true){
    venueList[i].score += 10
 }
}
};

function addDancingScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
}
}
};

function addDrinksScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
}
}
};

function addGamesScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
}
}
};

function addWaitScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
}
}
};

function addCrowdedScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
    }
}
};


function addTraditionalScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
    }
}
};

function addDiveScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
    }
}
};

function addLiveMusicScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
    }
}
};

function addSpoonsScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
    }
}
};

function addNoiseScore() {
    for(var i = 0; i < venueList.length; i++) {
    if(venueList[i].dancing === true && userResults.dancing === true){
    venueList[i].score += 10
    }
}
};

function sortListByScore() {
    venueList.sort(function(x, y){return x.score-y.score});
};
