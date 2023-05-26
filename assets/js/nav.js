var x = document.getElementById("myTopnav");
var home = document.getElementById("home");
var who = document.getElementById("navWho");
var work = document.getElementById("navWork");
var about = document.getElementById("navAbout");
var contact = document.getElementById("navContact");

function listClick() {    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function navClick(val) {
    x.className = " topnav";
    if (val == "home") home.className = "active";    
    if (val == "whoami") who.className = "active";    
    if (val == "work") work.className = "active";
    if (val == "about") about.className = "active";
    if (val == "contact") contact.className = "active";

    unactive(val);
}

function unactive(val) {    
    if (val != "home") home.className = "";    
    if (val != "whoami") who.className = "";    
    if (val != "work") work.className = "";
    if (val != "about") about.className = "";
    if (val != "contact") contact.className = "";
}