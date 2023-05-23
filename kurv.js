var basket = {};

document.addEventListener("DOMContentLoaded", function() {
    console.log("document.cookie", document.cookie);
    var basketCookie = getCookie("basket");
    if (basketCookie === "") {
        console.log("No 'basket' cookie found.");
        return;
    }
    
    console.log("basketCookie", basketCookie);
    basket = JSON.parse(basketCookie);
    console.log("basket", basket);
    
    var handleBeholder = document.getElementsByClassName("handle-beholder");
    for (var i = 0; i < handleBeholder.length; i++) {
        console.log("handleBeholder[i].id", handleBeholder[i].id);
        var children = handleBeholder[i].children;
        for (var j = 0; j < children.length; j++) {
            console.log("handleBeholder[i].children[j].id", children[j].id, (children[j].id in basket));
            if (!(children[j].id in basket)) {
                children[j].remove();
                //children[j].style.visibility = "hidden"
                j--;
            }
            else {
                children[j].children[1].innerHTML = basket[children[j].id];
            }
        }
    } 
});

function fjernAlt() {
    console.log("slettAlt")
    basket = {};
    console.log("basket", basket)
    updateCookies();
}

function updateCookies() {
    setCookie("basket", JSON.stringify(basket), 365);
    location.reload();
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}