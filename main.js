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
var kategoriSelect = document.getElementById("kategori").innerHTML = "kategori";
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