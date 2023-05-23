let basket = {};

document.addEventListener("DOMContentLoaded", function() {
    try {
        basket = JSON.parse(getCookie("basket"));
    }
    catch (error) {
        console.log("No 'basket' cookie found.");
        basket = {};
    }       
});

function filterSelection(c) {
    var x, i;
    console.log("filterSelection", c)
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            console.log(i.toString(), x[i].className, c)
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
    element.className = arr1.join(" ");
}

let kategori = "Alt"
var kategoriSelect = document.getElementById("kategori").innerHTML = "Alt";
var btnContainer = document.getElementById("navbar2");
console.log("btnContainer", btnContainer)
var btns = btnContainer.getElementsByClassName("navknapp");
console.log("btns", btns)
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        console.log("click", this)
        var current = document.getElementsByClassName("valgt");
        current[0].className = current[0].className.replace(" valgt", "");
        // replace kategoriselect with the text of the button
        kategoriSelect = document.getElementById("kategori").innerHTML = this.innerHTML;
        this.className += " valgt";
    });
}

// Filter on page load
filterSelection("all");

// create a function which toggles add/remove from basket based on if it already is in the basket
function toggleBasket(item) {
    addToBasket(item);
}

// create a function that adds the selected item to the basket
function addToBasket(item) {
    console.log("addToBasket", item)
    var count = basket[item] || 0;
    count += 1;
    basket[item] = count;
    console.log("basket", basket)
    updateCookies();
}

// create a function that removes the selected item from the basket
function removeFromBasket(item) {
    console.log("removeFromBasket", item)
    if (item in basket) {
        delete basket[key];
    }
    console.log("basket", basket)
    updateCookies();
}

// update cookies with the array
function updateCookies() {
    console.log("updateCookies", basket)
    setCookie("basket", JSON.stringify(basket), 365);
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
