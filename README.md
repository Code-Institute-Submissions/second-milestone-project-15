# The Central Bristol Venue Decider - Interactive Frontend Development Milestone Project
<https://harclemadscam.github.io/second-milestone-project/>
## Overview
For the second project of my Code Institute Full Stack Web Developer course, I was tasked with building an interactive front-end site.
It builds on the first project's emphasis on HTML and CSS by introducing JavaScript, to create a dynamic and interactive site that responds to user input, and 
allows the user to manipulate data to alter what is presented to them on-screen.
I decided to create a "personality quiz"-style assessment, with the aim of working out which central Bristol venues (i.e. pubs and bars) meet the user's needs/preferences.
It asks the user a series of 12 questions, then suggests three Bristol pubs or bars that match their answers. In addition, the site uses the Google Maps and Google Places APIs
to retrieve data about the three suggested venues and presents that data on the results screen. This includes a Google Map centered on the venue's location and a Google Maps link, 
the main Google photo of the venue, plus the address, phone number, website link and Google star rating of the venue.

The project uses JavaScript to achieve three aims: DOM manipulation to change the structure and styling of the page, creating the logic of the quiz to work out the three suggested
venues based on the user's answers, and access to the Google APIs to get and present data. There are two JavaScript files in the project: "scripts.js" for the varibles and functions,
and "venues.js" for the venue objects representing the venues the user can be suggested.

The site is split into three main views: the start page, the question slides, and the results page. Only one question is presented at a time, and the site uses buttons to start the
quiz, navigate through the questions, submit the user's answers, and return to the start. The site is responsive across different devices without any loss of core functionality.


## UX
My full UX documentation can be found in the ux-design folder, which can be found [here](ux-design).
This includes documents detailing my thoughts on the strategy and scope planes of this project, plus the basic structure and my skeleton wireframes.

### User Stories

* As someone looking to go out for a drink in Bristol, I want to know which venue suits my needs.
* As someone new to Bristol, I want to know what venues are recommended based on my preferences and where these are located.
* As someone who wants to find out more about Bristol, I want details about venues that I may be interested in.
* As someone who enjoys personality quizzes, I want to find out which Bristol venues match my personality.
* As someone who knows Bristol well, I want to see if my favourite venues appear in the results.

## Features
### Existing Features

* The start page. Acts as a landing page and a brief description of purpose of the site with a call to action. The first question is shown when the button is clicked.
* The 12 questions. One question is shown to the user at a time, and there are radio buttons for the user to select their answer. "Next" and "Previous" buttons are used to navigate
the question.
* Adjustable backgrounds. On some questions, selecting a certain answer changes the background image of the question.
* 23 possible venues can be suggested to the user. All 23 can feature in the user's top three suggestions, depending on the answers provided.
* The quiz functionality. Each venue has an object with properties that reflect each question. The user's answers to each question are also stored in an object. When the results
are submited, the user's answers are compared to each venues' properties, and points are awarded or taken away based on these properties. These points are added to the venue's score
value, and the top three scoring venues are presented to the user on the results page.
* An alternate second question. There are two question 2s that can be shown, depending on the answer provided to question 1.
* Input validation. The user cannot proceed if they have not selected an answer, instead they are presented with a warning message.
* Google Maps and Google Places data. Using the Google APIs, the results page presents a Google Map, photo and place details for each of the top three scoring venues.
Each venue has a Google placeID value.
* The back to start button. Located on the results page, this allows the user to retake the quiz while keeping their previous answers selected.

### Future Features

* Additional venues. These must be added as venue objects to the venueList array, with values for all of the properties that the other venues have.
* The option to mark a question as important or not important. This would adjust the points awarded or taken away for the answer, and lead to a greater range of possible results.
* Improved navigation, allowing the user to select a specific question without having to go through slide by slide. There could be an indicator to show which questions have received
answers.
* More data on the results page. This could be pulled from the Google APIs or additional APIs.
* Additional questions and the process of adding new questions made simpler. The requirements for new questions are as follows:

  * Each venue object must receive a property and value that corresponds with the question.
  * A specific submit result function, that updates the userResults object. This must be added to the submitUserResults function.
  * A specific add score function, that updates the venue score based on the results submitted. This must be added to the calculateTotalScore function.
  * The HTML structure of the question, matching previous questions. References to the previous total number of questions will need to be updated, this could be set to a variable.
  * A background image and CSS to set it.
  * Optional: additional background images and click events to set them.

## Technologies Used
* [HTML5](https://www.w3.org/TR/2017/REC-html52-20171214/)

  * A fundamental requirement. Used to create the index file, providing the structure of the page.

* [CSS3](https://www.w3.org/Style/CSS/)

  * Another fundamental requirement. Used to add custom styling to the HTML - including fonts, layout and colours.

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  * The third fundamental requirement. Used to write the scripts for the website, making it dynamic and interactive. JavaScript code determines what the user sees based on their actions. It is also used to connect to the Google Maps and Places APIs, to retrieve and display data.

* [Google Maps API](https://cloud.google.com/maps-platform/maps)/[Google Places API](https://cloud.google.com/maps-platform/places)

  * By connecting to Google APIs, my website can retrieve data to display to the user. Specifically, a Google Map and place details of each of the user's top three venues, which are decided based on the answers they selected for the quiz questions.

* [Git](https://git-scm.com/)

  * Used for version control and committing changes to GitHub.

* [GitHub](https://github.com/)

  * Used to host and publish my project files.

* [Microsoft Edge/Developer Tools](https://www.microsoft.com/en-us/edge)

  * My internet browser. 
  The Developer Tools were used to troubleshoot, edit the layout, and preview changes, as well as test the responsiveness of the page.

* [GitPod IDE](https://gitpod.io/)

  * The application I used to develop the project.

* [Font Awesome](https://fontawesome.com/)

  * Used to source the the marker, phone and star icons on the results screen.

* [Google Fonts](https://fonts.google.com/)
  
  * Used to provide the Bitter font.

## Testing
My full testing documentation can be found in the testing folder, which can be found [here](testing).

## Deployment
The project was coded in the GitPod IDE. I had previously installed the GitPod browser extension, which allows you to create a GitPod workspace with the click of a button in GitHub.
I first created a new repository in GitHub and then created the GitPod workspace, where I coded the project. 
I used Git within GitPod for version control, with all commits being pushed to the linked GitHub repository. As I was not working on a live website and I was the sole developer, I used only the master branch.

To publish my website in GitHub, I used GitHub Pages from the settings of my repository. After selecting the master branch as the source, my website project can be found here: <https://harclemadscam.github.io/second-milestone-project/>

## Credits
### Content
All text content was created by myself.
### Media
Images were sourced from: 

<https://www.pexels.com/>

<https://unsplash.com/>

<https://www.piqsels.com/>

The results page images are taken from the Google Places API, and are subject to change. An image credit is presented underneath the image that will update dynamically, in line with
Google's attribution policy.

### Acknowledgements
My design was partly inspired by this [guide](https://www.sitepoint.com/simple-javascript-quiz/), mostly for its use of slides to display the questions.

I made frequent use of [Stack Overflow](https://stackoverflow.com/) and the Google Maps API [documentation](https://developers.google.com/maps/documentation) for help and advice. 
The code used to access the Google APIs is based on the advice of their documentation, with some changes made to suit my goals.

To create the background gradient, text shadow, and box shadow effects, I used the following online tools: [Here](https://cssgradient.io/), [Here](https://html-css-js.com/css/generator/text-shadow/) and [Here](https://www.cssmatic.com/box-shadow).