window.onload = function(){
    handleResize();
    $(window).resize(handleResize);
};

function handleResize(){
    var width = $(window).width();
    document.getElementById("name").innerHTML = width < 466 ? "SH" : "Shane Hickman";
}

var animDuration = 500;
var working = false;
function hamburger() {
    if(!working){
        working = true;
        window.setTimeout(function(){
            working = false;
        }, animDuration);
        var burger = document.getElementById("hamburger");
        if(burger.style.display === "block"){
            burger.className = "animated fadeOutDown";
            setDisplayIn(burger, animDuration, "none")
        }
        else if(burger.style.display === "none"){
            burger.className = "animated fadeInUp";
            burger.style.display = "block";
        }
    }
}

function hamburgerOut(){
    if(!working){
        working = true;
        window.setTimeout(function(){
            working = false;
        }, animDuration);
        var burger = document.getElementById("hamburger");
        if(burger.style.display === "block"){
            burger.className = "animated fadeOutDown";
            setDisplayIn(burger, animDuration, "none")
        }
    }
}

function setDisplayIn(object, time, display){
    window.setTimeout(function(){
        object.style.display = display;
    }, time);
}

function custom_scroll(tabId){
    $('html, body').animate({ scrollTop: $('#' + tabId).offset().top - 57 }, 'slow');
    return false;
}

var vectors = ["res/blue-vec1.svg", "res/blue-vec2.svg", "res/blue-vec3.svg"];
var sections = document.getElementsByClassName("section-slice");
for(var i = 0; i < sections.length; i ++){
    sections[i].style.backgroundImage = "url(" + vectors[Math.floor(Math.random() * vectors.length)] + ")";
}
