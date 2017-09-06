function navigateTo(evt, tabId){
    var tabLinks = document.getElementsByClassName("tab");
    for(var i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
    $('#core-cell').scrollTo(document.getElementById(tabId), 800);
}

