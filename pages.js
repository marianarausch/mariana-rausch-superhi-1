// this is the data for holding which page we're on
let pageNumber = 0;

//content for the pages
const pages = [
{copy: "a Hamburg-based brazilian designer and developer", background: "#edc7a9", circle: "#3e78ed"},
{copy: "a dachshund person", background: "#a1fffe", circle: "#e34a47"},
{copy: "looking for a job at the start of february", background: "#d3c7f3", circle: "#f7fe00"},
{copy: `letting you <a href="pdf.pdf">download her PDF</a>`, background: "faffb8", circle: "#b472e6"}
]

//pick the relevant tags
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");

//make a next function to increaase the pageNumber
const next = function () {
  pageNumber = pageNumber + 1;
  
  if (pageNumber > pages.length -1){
    pageNumber = 0;
  }
  updateSection();
}

const previous = function () {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = 3;
  }
  updateSection ();
}

//pick random slide
const random = function (){
  pageNumber = Math.floor(Math.random() * pages.length);
  
  updateSection();
}

const updateSection = function (){
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
}

nextTag.addEventListener("click", function(){
  next();
})

previousTag.addEventListener("click", function () {
  previous();
})

//on click of random tag run this
randomTag.addEventListener('click', function(){
  random();
})

//when a users presses a key, check for arrow left or right
//and do next or prev correctly
document.addEventListener("keyup", function(event) {
  console.log(event);
  //if the key being pressed is ArrowRight
  if(event.key == "ArrowRight"){
    next();    
  }
  if(event.key == "ArrowLeft"){
	previous();     
     }
})







