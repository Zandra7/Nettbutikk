document.addEventListener("DOMContentLoaded", function() {
    var basketCookie = document.cookie.split(";").filter(function(el) {
        return el.trim().startsWith("basket=");
    })[0]?.split("=")[1];
    
    if (!basketCookie) {
        console.log("No 'basket' cookie found.");
        return;
    }
    
    console.log("basketCookie", basketCookie);
    var handleBeholder = document.getElementsByClassName("handle-beholder");
    for (var i = 0; i < handleBeholder.length; i++) {
        console.log("handleBeholder[i].id", handleBeholder[i].id);
        // Loop through each child element within the current handle-beholder element
        var children = handleBeholder[i].children;
        for (var j = 0; j < children.length; j++) {
            console.log("handleBeholder[i].children[j].id", children[j].id);
            if (!basketCookie.includes(children[j].id)) {
                children[j].remove();
                j--; // Decrement the index to account for the removed element.
            }
        }
    }
});
