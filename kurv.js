var basket = [];

document.addEventListener("DOMContentLoaded", function() {
    var basketCookie = document.cookie.split(";").filter(function(el) {
        return el.trim().startsWith("basket=");
    })[0]?.split("=")[1];
    
    if (!basketCookie) {
        console.log("No 'basket' cookie found.");
        return;
    }
    
    console.log("basketCookie", basketCookie);
    basket = JSON.parse(basketCookie);
    
    var handleBeholder = document.getElementsByClassName("handle-beholder");
    for (var i = 0; i < handleBeholder.length; i++) {
        console.log("handleBeholder[i].id", handleBeholder[i].id);
        var children = handleBeholder[i].children;
        for (var j = 0; j < children.length; j++) {
            console.log("handleBeholder[i].children[j].id", children[j].id);
            if (!basket.includes(children[j].id)) {
                children[j].remove();
                j--;
            }
        }
    } 
});

function fjernAlt() {
    console.log("slettAlt")
    var basket = [];
    console.log("basket", basket)
    updateCookies();
}

function updateCookies() {
    console.log("updateCookies", basket)
    document.cookie = "basket=" + encodeURIComponent(JSON.stringify(basket));
}

