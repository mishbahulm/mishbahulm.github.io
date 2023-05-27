// generate element
const works = ["Web", "Mobile", "Desktop"];

const desktop = ["desktop-pruscan.jpeg", "desktop-bcabilling.jpeg", "desktop-bcark.jpeg", "desktop-maybankbilling.jpeg",
  "desktop-paninbank.jpeg", "desktop-pruletter.jpeg"];

const mobile = ["mobile-solarsystem1.jpeg", "mobile-solarsystem2.jpeg", "mobile-solarsystem3.jpeg", 
  "mobile-solarsystem4.jpeg", "mobile-solarsystem5.jpeg",
  "mobile-wisata1.jpeg", "mobile-wisata2.jpeg", "mobile-myview1.jpeg", "mobile-myview2.jpeg"];

const web = ["web-mempis1.jpeg", "web-mempis2.jpeg", "web-mempis3.jpeg",
  "web-mdms1.jpeg", "web-mdms2.jpeg", "web-mdms3.jpeg", "web-mdms4.jpeg", 
  "web-mdms5.jpeg",];

var show = [];
for (i = 0; i < works.length; i++) {
    var section = document.createElement('section');
    
    var title = document.createElement('h3');
    title.innerHTML = works[i];

    // Slideshow container
    var slide = document.createElement('div');
    slide.className = "slideshow-container fade";
    
    if (works[i] == "Desktop") show = desktop;
    if (works[i] == "Mobile") show = mobile;
    if (works[i] == "Web") show = web;
    
    for (j = 0; j < show.length; j++) {      
        // images
        var container = document.createElement('div');
        container.className = "Containers"+works[i];

        var msgInfo = document.createElement('div');
        msgInfo.className = "MessageInfo";
        msgInfo.innerHTML = j+1 + " / " + show.length;
        container.appendChild(msgInfo);

        var image = document.createElement('img');
        image.className = "featured-image";
        image.src = "assets/images/"+show[j];
        container.appendChild(image);

        slide.appendChild(container);
    }

    // Back and forward buttons
    var back = document.createElement('a');
    back.className = "back";
    back.setAttribute("onclick", "plusSlides"+works[i]+"(-1)");
    back.innerHTML = "&#10094;";

    var forward = document.createElement('a');
    forward.className = "forward";
    forward.setAttribute("onclick", "plusSlides"+works[i]+"(1)");
    forward.innerHTML = "&#10095;";
    
    slide.appendChild(back);
    slide.appendChild(forward);

    // dots
    var dots = document.createElement('div');
    dots.style = "text-align:center";
    for (k = 0; k < show.length; k++) {
        var dot = document.createElement('span');
        dot.className = "dots"+works[i];
        dot.setAttribute("onclick", "currentSlide"+works[i]+"("+(k+1)+")");
        dots.appendChild(dot);
    }

    section.appendChild(title);
    section.appendChild(slide);
    section.appendChild(dots);

    document.getElementById('works').appendChild(section);
}

// carousel main functions
// web
var slidePositionWeb = 1;
SlideShowWeb(slidePositionWeb);

// forward/Back controls
function plusSlidesWeb(n) {
  SlideShowWeb(slidePositionWeb += n);
}

//  images controls
function currentSlideWeb(n) {
  SlideShowWeb(slidePositionWeb = n);
}

function SlideShowWeb(n) {  
  let i;
  let slides = document.getElementsByClassName("ContainersWeb");
  let circles = document.getElementsByClassName("dotsWeb");
  if (n > slides.length) {slidePositionWeb = 1}
  if (n < 1) {slidePositionWeb = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionWeb-1].style.display = "block";
  circles[slidePositionWeb-1].className += " enable";
} 

//mobile
var slidePositionMobile = 1;
SlideShowMobile(slidePositionMobile);

// forward/Back controls
function plusSlidesMobile(n) {
  SlideShowMobile(slidePositionMobile += n);
}

//  images controls
function currentSlideMobile(n) {
  SlideShowMobile(slidePositionMobile = n);
}

function SlideShowMobile(n) {  
  let i;
  let slides = document.getElementsByClassName("ContainersMobile");
  let circles = document.getElementsByClassName("dotsMobile");
  if (n > slides.length) {slidePositionMobile = 1}
  if (n < 1) {slidePositionMobile = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionMobile-1].style.display = "block";
  circles[slidePositionMobile-1].className += " enable";
}

//desktop
var slidePositionDesktop = 1;
SlideShowDesktop(slidePositionDesktop);

// forward/Back controls
function plusSlidesDesktop(n) {
  SlideShowDesktop(slidePositionDesktop += n);
}

//  images controls
function currentSlideDesktop(n) {
  SlideShowDesktop(slidePositionDesktop = n);
}

function SlideShowDesktop(n) {  
  let i;
  let slides = document.getElementsByClassName("ContainersDesktop");
  let circles = document.getElementsByClassName("dotsDesktop");
  if (n > slides.length) {slidePositionDesktop = 1}
  if (n < 1) {slidePositionDesktop = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionDesktop-1].style.display = "block";
  circles[slidePositionDesktop-1].className += " enable";
}

// next benerin boiler plate fungsi carousel