function navigateTo(evt, tabId){
    var tabLinks = document.getElementsByClassName("tab");
    for(var i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
    $('#core-cell').scrollTo(document.getElementById(tabId), 800);
}

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

function scroll(tabId){
    $('body').scrollTo(document.getElementById(tabId), 800);
}
