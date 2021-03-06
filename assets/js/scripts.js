//object that will store the answers given by the user
const userResults = {};

//array that receives a true for each question that has an answer selected, in order of the questions
//used to check if a question has received an answer
const validationList = [true];

//array for the top three venue objects based on score
let topThreeVenues = [];

//variable for keeping track of the current slide
let currentSlide = 0;

//removes invisible class from start page elements on page load, resulting in CSS transition fade in
const intro = document.querySelectorAll("#intro p");
    window.addEventListener("load", function () {
        for (let i = 0; i < intro.length; i++) {
            intro[i].classList.remove("invisible");
        }
            document.getElementById("bristol").classList.remove("invisible"); 
            document.getElementById("cheers").classList.remove("invisible");
            document.getElementById("startButton").classList.remove("invisible");
});

//when the start button is clicked, run the startQuiz function 
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function(){
    startQuiz();
});

//when the previous button is clicked, run the showOneQuestionTwoPrevious and previousSlide functions 
const previousButton = document.getElementById("previousButton");
previousButton.addEventListener("click", function() {
    showOneQuestionTwoPrevious();
    previousSlide();
});

//when the next button is clicked, run the nextSlide function, but only if answerValidation has returned true
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function() {
    if (answerValidation() === true) {
        showOneQuestionTwoNext();
        nextSlide(); }
});

//when the submit results button is clicked, run the listed functions, but only if answerValidation has returned true
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
    if (answerValidation() === true) {
        submitUserResults();
        calculateTotalScore();
        sortListByScore();
        displayResults(); }
});

//when the back to start button is clicked, run the backToStart function
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function() {
    backToStart();
});

//each label is an answer to a question, and each is a radio button input
//when a label is clicked, update the validationList array in the position that is equal to the currentSlide number
//this keeps track of every question that has received an answer
//then set the html of the validation message to empty to remove the warning message
const labels = document.getElementsByTagName("label");
for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function() {
        validationList[currentSlide] = true;
        document.getElementsByClassName("message")[currentSlide].innerHTML = "";
    }
)};

//for the drinks question, changes the background when an answer is clicked
const drinkQuestion = document.getElementById("slide3");
const lager = document.getElementById("lager");
const wine = document.getElementById("wine");
const cocktail = document.getElementById("cocktail");
const ipa = document.getElementById("ipa");
const cider = document.getElementById("cider");
lager.addEventListener("click", function() {
    drinkQuestion.style.backgroundImage = "url('assets/images/beer.jpg')";
});
wine.addEventListener("click", function() {
    drinkQuestion.style.backgroundImage = "url('assets/images/wine.jpg')";
});
cocktail.addEventListener("click", function() {
    drinkQuestion.style.backgroundImage = "url('assets/images/cocktail.jpg')";
});
ipa.addEventListener("click", function() {
    drinkQuestion.style.backgroundImage = "url('assets/images/ipa.jpg')";
});
cider.addEventListener("click", function() {
    drinkQuestion.style.backgroundImage = "url('assets/images/cider.jpg')";
});

//for the games question, changes the background when an answer is clicked
const gameQuestion = document.getElementById("slide5");
const boardGames = document.getElementById("board");
const pool = document.getElementById("pool");
const pingPong = document.getElementById("pingpong");
const noGame = document.getElementById("gamesNo");
boardGames.addEventListener("click", function() {
    gameQuestion.style.backgroundImage = "url('assets/images/boardgame.jpg')";
});
pool.addEventListener("click", function() {
    gameQuestion.style.backgroundImage = "url('assets/images/pool.jpg')";
});
pingPong.addEventListener("click", function() {
    gameQuestion.style.backgroundImage = "url('assets/images/pingpong.jpg')";
});
noGame.addEventListener("click", function() {
    gameQuestion.style.backgroundImage = "url('assets/images/startgame.jpg')";
});

//for the waiting question, changes the background when an answer is clicked
const waitQuestion = document.getElementById("slide6");
const patient = document.getElementById("waitHigh");
const impatient = document.getElementById("waitLow");
patient.addEventListener("click", function() {
    waitQuestion.style.backgroundImage = "url('assets/images/buddha.jpg')";
});
impatient.addEventListener("click", function() {
    waitQuestion.style.backgroundImage = "url('assets/images/hurry.jpg')";
});

//constant declarations
const start = document.getElementById("start");
const slide = document.getElementsByClassName("slide");
const questionsContainer = document.getElementById("questionsContainer");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const submit = document.getElementById("submit");
const results = document.getElementById("results");
const reset = document.getElementById("reset");
const firstHeading = document.querySelector("#firstresult .heading");
const secondHeading = document.querySelector("#secondresult .heading");
const thirdHeading = document.querySelector("#thirdresult .heading");

//runs all of the submit results functions
function submitUserResults() {
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
}

//the following functions correspond to each question
//each one checks which answer the user has selected
//then updates the userResults object to record that answer
function submitFoodResult() {
    if (document.getElementById('foodYes').checked) {
        userResults.food = true;
    } else if (document.getElementById('foodNo').checked) {
        userResults.food = false;
    }
}

function submitPizzaResult() {
    if (document.getElementById('foodYes').checked) {
        if (document.getElementById('pizzaYes').checked) {
            userResults.pizza = true;
            userResults.dancing = null;
        } else if (document.getElementById('pizzaNo').checked) {
            userResults.pizza = false;
            userResults.dancing = null;
        } 
    } else
        userResults.pizza = null;
}

function submitDancingResult() {
    if (document.getElementById('foodNo').checked) {
        if (document.getElementById('danceYes').checked) {
            userResults.dancing = true;
            userResults.pizza = null;
        } else if (document.getElementById('danceNo').checked) {
            userResults.dancing = false;
            userResults.pizza = null;
        }
    } else
        userResults.dancing = null;
}

function submitDrinksResult() {
    if (document.getElementById('cocktail').checked) {
        userResults.drinks = "cocktail";
    } else if (document.getElementById('ipa').checked) {
        userResults.drinks = "ipa";
    } else if (document.getElementById('cider').checked) {
        userResults.drinks = "cider";
    } else {
        userResults.drinks = "normal";
    }
}

function submitOutsideResult() {
    if (document.getElementById('outsideVery').checked) {
        userResults.outside = "high";
    } else if (document.getElementById('outsideFairly').checked) {
        userResults.outside = "medium";
    } else if (document.getElementById('outsideNot').checked) {
        userResults.outside = "low";
    }
}

function submitGamesResult() {
    if (document.getElementById('board').checked) {
        userResults.games = "board";
    } else if (document.getElementById('pool').checked) {
        userResults.games = "pool";
    } else if (document.getElementById('pingpong').checked) {
        userResults.games = "pingpong";
    } else if (document.getElementById('gamesNo').checked) {
       userResults.games = null;
    }
}

function submitWaitResult() {
    if (document.getElementById('waitHigh').checked) {
        userResults.wait = "high";
    } else if (document.getElementById('waitMedium').checked) {
        userResults.wait = "medium";
    } else if (document.getElementById('waitLow').checked) {
        userResults.wait = "low";
    }
}

function submitCrowdedResult() {
    if (document.getElementById('crowdHigh').checked) {
        userResults.crowd = "high";
    } else if (document.getElementById('crowdMedium').checked) {
        userResults.crowd = "medium";
    } else if (document.getElementById('crowdLow').checked) {
        userResults.crowd = "low";
    }
}

function submitTraditionalResult() {
    if (document.getElementById('traditionalYes').checked) {
        userResults.traditional = "yes";
    } else if (document.getElementById('traditionalMiddle').checked) {
        userResults.traditional = "middle";
    } else if (document.getElementById('traditionalNo').checked) {
        userResults.traditional = "no";
    }
}

function submitDiveResult() {
    if (document.getElementById('diveYes').checked) {
        userResults.dive = true;
    } else if (document.getElementById('diveNo').checked) {
        userResults.dive = false;
    }
}

function submitLiveMusicResult() {
    if (document.getElementById('musicYes').checked) {
        userResults.livemusic = true;
    } else if (document.getElementById('musicNo').checked) {
        userResults.livemusic = false;
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
    if (document.getElementById('noiseHigh').checked) {
        userResults.noise = "high";
    } else if (document.getElementById('noiseMedium').checked) {
        userResults.noise = "medium";
    } else if (document.getElementById('noiseLow').checked) {
        userResults.noise = "low";
    }
}

//first runs the resetScoresToZero function, then each function that adds points based on user results to work out the total score of each venue
function calculateTotalScore() {
    resetScoresToZero();
    addFoodScore();
    addPizzaScore();
    addDancingScore();
    addDrinksScore();
    addGamesScore();
    addWaitScore();
    addCrowdedScore();
    addTraditionalScore();
    addDiveScore();
    addLiveMusicScore();
    addSpoonsScore();
    addNoiseScore();
    addOutsideScore();
    addRandomNumber();
}

//resets each venue object's score to zero
//so that previous runthroughs do not impact the score of this one
function resetScoresToZero() {
    for (let i = 0; i < venueList.length; i++) {
        venueList[i].score = 0;
    }
}

//the following functions compare every venue objects' property value with the userResult property value
//points are awarded or taken away from the venue's score depending on the values
//thus creating scores that reflect the user's input
function addFoodScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].food === true && userResults.food === true) {
            venueList[i].score += 15;
        } else if (venueList[i].food === false && userResults.food === true) {
            venueList[i].score -= 15;
        }
    }
}

function addPizzaScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].pizza === userResults.pizza) {
            venueList[i].score += 10;
        } else
            venueList[i].score -= 10;
    }
}

function addDancingScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].dancing === true && userResults.dancing === true) {
            venueList[i].score += 15;
        } else if (venueList[i].dancing === false && userResults.dancing === true) {
            venueList[i].score -= 15;
        }
    }
}

function addDrinksScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].drinks === userResults.drinks && venueList[i].drinks != "normal") {
            venueList[i].score += 10;
        }
    }
}

function addGamesScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].games === userResults.games && venueList[i].games != null) {
            venueList[i].score += 7;
        }
    }
}

function addWaitScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (userResults.wait === "high") {
            venueList[i].score += 10;
        } else if ((venueList[i].wait === "medium" || venueList[i].wait === "low") && userResults.wait === "medium") {
            venueList[i].score += 10;
        } else if (venueList[i].wait === "low" && userResults.wait === "low") {
            venueList[i].score += 10;
        } else if (venueList[i].wait === "high" && userResults.wait === "low") {
            venueList[i].score -= 20;
        } else if (venueList[i].wait === "medium" && userResults.wait === "low") {
            venueList[i].score -= 10;
        }
    }
}

function addOutsideScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].outside === "very high" && userResults.outside === "high") {
            venueList[i].score += 12;
        } else if (venueList[i].outside === "very high" && userResults.outside === "medium") {
            venueList[i].score += 8;
        } else if (venueList[i].outside === "high" && userResults.outside === "high") {
            venueList[i].score += 10;
        } else if (venueList[i].outside === "high" && userResults.outside === "medium") {
            venueList[i].score += 7;
        } else if (venueList[i].outside === "medium" && userResults.outside === "high") {
            venueList[i].score += 5;
        } else if (venueList[i].outside === "medium" && userResults.outside === "medium") {
            venueList[i].score += 2;
        } else if (venueList[i].outside === "low" && userResults.outside === "high") {
            venueList[i].score -= 7;
        } else if (venueList[i].outside === null && userResults.outside === "high") {
            venueList[i].score -= 20;
        } else if (venueList[i].outside === null && userResults.outside === "medium") {
            venueList[i].score -= 15;
        }
    }
}

function addCrowdedScore() {
    for(let i = 0; i < venueList.length; i++) {
        if (userResults.crowd === "high") {
            venueList[i].score += 10;
        } else if ((venueList[i].crowd === "medium" || venueList[i].crowd === "low") && userResults.crowd === "medium") {
            venueList[i].score += 10;
        } else if (venueList[i].crowd === "low" && userResults.crowd === "low") {
            venueList[i].score += 10;
        }
    }
}

function addTraditionalScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].traditional === true && userResults.traditional === "yes") {
            venueList[i].score += 15;
        } else if (venueList[i].traditional === true && userResults.traditional === "no") {
            venueList[i].score -= 15;
        }
    }
}

function addDiveScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].dive === userResults.dive) {
            venueList[i].score += 15;
        }
    }
}

function addLiveMusicScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].livemusic === true && userResults.livemusic === true) {
            venueList[i].score += 15;
        } else if (venueList[i].livemusic === false && userResults.livemusic === true) {
            venueList[i].score -= 10;
        }
    }
}

function addSpoonsScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (venueList[i].spoons === true && userResults.spoons === "love") {
            venueList[i].score += 15;
        } else if (venueList[i].spoons === true && userResults.spoons === "no") {
            venueList[i].score -= 15;
        }
    }
}

function addNoiseScore() {
    for (let i = 0; i < venueList.length; i++) {
        if (userResults.noise === "high") {
            venueList[i].score += 15;
        } else if ((venueList[i].noise === "medium" || venueList[i].noise === "low") && userResults.noise === "medium") {
            venueList[i].score += 15;
        } else if (venueList[i].noise === "low" && userResults.noise === "low") {
            venueList[i].score += 15;
        } else if (venueList[i].noise === "high" && userResults.noise === "low") {
            venueList[i].score -= 15;
        }
    }
}

//adds a random number less than 1 to each score as a tiebreaker for when scores are equal
function addRandomNumber() {
    for (let i = 0; i < venueList.length; i++) {
        let random = Math.round(Math.random() * 100) / 100;
        venueList[i].score += random;
    }
}

//sorts the venueList array by the value of each venue objects' score, from highest to lowest
function sortListByScore() {
    venueList.sort(function(x, y){return y.score - x.score});
}

//startQuiz runs the nextSlide function, then shows the next button and the question container and hides the start slide
//the display property of elements is managed by the shown and hidden classes
function startQuiz() {
    nextSlide();
    next.classList.add("shown");
    next.classList.remove("hidden");
    start.classList.add("hidden");
    questionsContainer.classList.remove("hidden");
}

//nextSlide first hides the slide with the value of currentSlide, then adds 1 to currentSlide
//on the first slide, which is slide 0, the currentSlide will also be set to 0, so the currentSlide value should always match
//after updating the value, it then shows the slide which matches the new value, which should be the next slide
//it also checks to see if it is on the last slide, in which case it would hide the next button and show the submit results button
//it also checks to see if it is on question 2, in which case it would show previous button which would have been hidden on the first question
//as there are two question 2s, this could be currentSlide 2 or 3
function nextSlide() {
    slide[currentSlide].classList.add("hidden");
    currentSlide = currentSlide += 1;
    slide[currentSlide].classList.remove("hidden");
    if (currentSlide === slide.length-1) { 
        next.classList.add("hidden");
        next.classList.remove("shown");
        submit.classList.add("shown");
        submit.classList.remove("hidden");
    } else if (currentSlide === 2 || currentSlide === 3) {
        previous.classList.add("shown");
        previous.classList.remove("hidden");
    }
}

//previousSlide is like nextSlide in reverse
//it firsts checks if the currentSlide is 2, and if so it hides the previous button, this is to hide the button on slide 1
//it also checks to see if the currentSlide is the final slide, and if so it hides the submit button and shows the next button
//then it hides the current slide, reduces the currentSlide value by 1, and shows the new current slide
function previousSlide () {
    if (currentSlide === 2) {
        previous.classList.add("hidden");
        previous.classList.remove("shown");
    } else if (currentSlide === slide.length-1) {
        next.classList.add("shown");
        next.classList.remove("hidden");
        submit.classList.add("hidden");
        submit.classList.remove("shown");
    }
    slide[currentSlide].classList.add("hidden");
    currentSlide = currentSlide -= 1;
    slide[currentSlide].classList.remove("hidden");  
}

//answerValidation checks that validationList array has a true value for the currentSlide value (i.e. an answer has been clicked)
//if it doesn't, it updates the message html with the warning text
//if it does, it returns true
function answerValidation() {
    if (validationList[currentSlide] != true) {
        document.getElementsByClassName("message")[currentSlide].innerHTML = "<p>Please select an option!</p>";
    } else {
        return true;
    }
}

//as there are two possible question 2s, the following two functions ensure that only one question 2 is shown
//which question 2 is shown depends on the answer selected for question 1
//they run in addition to the nextSlide and previousSlide functions, so may increase or decrease the currentSlide by an additional 1
//this is how an extra question 2 is skipped
function showOneQuestionTwoNext() {
    if ((currentSlide === 1 && document.getElementById('foodNo').checked) || (currentSlide === 2)) {
        slide[currentSlide].classList.add("hidden");
        currentSlide += 1;
    }
}

function showOneQuestionTwoPrevious() {
     if ((currentSlide === 4 && document.getElementById('foodYes').checked) || (currentSlide === 3)) {
        slide[currentSlide].classList.add("hidden");
        currentSlide -= 1;
    }
}

//hides the previous and submit buttons and shows the reset button AKA back to start button
function showOnlyResetButton() {
    submit.classList.add("hidden");
    submit.classList.remove("shown");
    previous.classList.add("hidden");
    previous.classList.remove("shown");
    reset.classList.add("shown");
    reset.classList.remove("hidden");
}

//first hides the questions, then updates the current slide value, and runs showOnlyResetButton
//then shows the results div
//topThreeVenues is updated with the first three venues of the venueList, which should be sorted by score
//the names of the three venues are then used to update the results heading divs
//then the rest of the data is presented with presentResultsData
function displayResults() {
    slide[currentSlide].classList.add("hidden");
    questionsContainer.classList.add("hidden");
    currentSlide = currentSlide += 1;
    showOnlyResetButton();
    results.classList.toggle("hidden");
    topThreeVenues = venueList.slice(0,3);
    let firstPlaceName = topThreeVenues[0].name;
    let secondPlaceName = topThreeVenues[1].name;
    let thirdPlaceName = topThreeVenues[2].name;
    console.log("1. " + firstPlaceName + " 2. " + secondPlaceName + " 3. " + thirdPlaceName);
    firstHeading.innerHTML = `<h2>1. ${firstPlaceName}</h2>`;
    secondHeading.innerHTML = `<h2>2. ${secondPlaceName}</h2>`;
    thirdHeading.innerHTML = `<h2>3. ${thirdPlaceName}</h2>`;
    presentResultsData();
}

//presentResultsData runs the three functions for getting and presenting the data of the top three venues
function presentResultsData() {
    getFirstPlaceData(presentData);
    getSecondPlaceData(presentData);
    getThirdPlaceData(presentData);
}

//the following three functions get place data from the the Google Places API, using the Google placeIds stored in each venue object
//the "fields" below show what data is requested
//the data is retrieved as an object using a callback function, then this object is passed into another callback function
//an arrayposition property is created for the object, to place the data into the correct html location
function getFirstPlaceData(first) {
    var request = {
        placeId: topThreeVenues[0].placeid,
        fields: ['vicinity','formatted_phone_number','website','url','geometry.location','rating','photo'],
    };
    var result = document.querySelectorAll(".details")[0];
    var service = new google.maps.places.PlacesService(result);
    service.getDetails(request, callback);
    function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            place.arrayposition = 0;
            first(place);
        }
    }
}

function getSecondPlaceData(second) {
    var request = {
        placeId: topThreeVenues[1].placeid,
        fields: ['vicinity','formatted_phone_number','website','url','geometry.location','rating','photo'],
    };
    var result = document.querySelectorAll(".details")[1];
    var service = new google.maps.places.PlacesService(result);
    service.getDetails(request, callback);
    function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            place.arrayposition = 1;
            second(place);
        }
    }
}

function getThirdPlaceData(third) {
    var request = {
        placeId: topThreeVenues[2].placeid,
        fields: ['vicinity','formatted_phone_number','website','url','geometry.location','rating','photo'],
    };   
    var result = document.querySelectorAll(".details")[2];
    var service = new google.maps.places.PlacesService(result);
    service.getDetails(request, callback);
    function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            place.arrayposition = 2;
            third(place); 
        }
    }
}

//presentData is passed into the presentResultsData function, so that the place data is passed to it
function presentData(place) {
    createMap(place);
    addPhoto(place);
    createDetails(place);      
}

//uses the Google Maps API to generate a Google Map centered on the venue location, using the location place data
//the arrayposition is used to select the correct div
function createMap(place) {
    var maps = document.getElementsByClassName("map");
    var map = new google.maps.Map(maps[place.arrayposition], {zoom: 17, center: place.geometry.location});
    var marker = new google.maps.Marker({position: place.geometry.location, map: map});
}

//first checks that the place data contains photos that can actually be used, which are stored in an array
//if so, generates a url of the first photo in the array and uses it as the background image of the image div
//also adds an image credit, using the name taken from the html_attributions property, as this is a Google Places requirement
//the arrayposition is used to select the correct div
function addPhoto(place) {
    var photos = place.photos[0];
    if (!photos) {
        return;
    } 
    var imageurl = "url(" + photos.getUrl({maxWidth: 500}) + ")";
    document.getElementsByClassName("image")[place.arrayposition].style.backgroundImage = imageurl;
    var credit = document.getElementsByClassName("credit")[place.arrayposition];
    credit.innerHTML = `<p>Image Credit: ${photos.html_attributions}</p>`;
}

//uses the place data to create an html list
//the i elements are Font Awesome icons
//the arrayposition is used to select the correct div
function createDetails(place) {
    let details = document.getElementsByClassName("details")[place.arrayposition];
    let vicinity = place.vicinity;
    let phone = place.formatted_phone_number;
    let website = place.website;
    let googleurl = place.url;
    let rating = place.rating;
    details.innerHTML = `<ul>
                            <li><i class="fas fa-map-marker-alt"></i> ${vicinity}</li>
                            <li><i class="fas fa-phone-alt"></i> ${phone}</li>
                            <li><a href="${website}" target="_blank">Website</a></li>
                            <li><a href="${googleurl}" target="_blank">Google Maps</a></li>
                            <li>${rating} <i class="fas fa-star"></i></li>
                        </ul>`;
}

//hides the results and shows the start screen, then hides the reset button
//resets the currentSlide value back to 0 so that it stays consistent with the slide being shown
function backToStart() {
    start.classList.toggle("hidden");
    results.classList.toggle("hidden");
    reset.classList.add("hidden");
    reset.classList.remove("shown");
    currentSlide = 0;
}