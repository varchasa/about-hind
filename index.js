var x = document.getElementById("home-div");
var y = document.getElementById("countries-div");
var z = document.getElementById("sports-div");
var active = 1;
function toggleDiv(a) {
    console.log("done");
    inActive();
    switch (a) {
        case 1:
            x.style.display = "block";
            active = a;
            break;
        case 2:
            y.style.display = "block";
            active = a;
            break;
        case 3:
            z.style.display = "block";
            active = a;
            break;
    }}
function inActive() {
    switch (active) {
        case 1:
            x.style.display = "none";
            break;
        case 2:
            y.style.display = "none";
            break;
        case 3:
            z.style.display = "none";
            break;
    }
}