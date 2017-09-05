const tabContentClassName = 'tab-content';
const inactiveTab = 'none';
const activeTab = 'flex';
var prevTabIndex = 0;

document.getElementById('me').style.display = activeTab;

function navigateTo(evt, tabId){
    var newTab = document.getElementById(tabId);

    var tabs = document.getElementsByClassName(tabContentClassName);
    if(tabs[prevTabIndex] === newTab){
        return;
    }

    swapTabs(tabs[prevTabIndex], newTab);

    for(var i = 0; i < tabs.length; i++){
        if(tabs[i] === newTab){
            if(i !== prevTabIndex){
                var fadeDirection = i > prevTabIndex ? 'Up' : 'Down';

                newTab.className = tabContentClassName + ' animated slideIn' + fadeDirection;
                tabs[prevTabIndex].className = tabContentClassName + ' animated slideOut' + fadeDirection;

                prevTabIndex = i;
            }
            i++;
            break;
        }
    }

    var tabLinks = document.getElementsByClassName("tab");
    for(i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}

function swapTabs(prev, next){
    var timeDelay = 500;
    const coreCell = document.getElementById('core-cell');
    coreCell.style.overflow = 'hidden';

    next.style.position = 'fixed';
    prev.style.position = 'fixed';
    setTimeout(function(){
        next.style.display = activeTab;
        prev.style.display = inactiveTab;
        next.style.position = 'relative';
        prev.style.position = 'relative';

        setTimeout(function(){
            coreCell.style.overflow = 'auto';
        }, timeDelay);
    }, timeDelay);
}

