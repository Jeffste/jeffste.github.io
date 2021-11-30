fade = document.getElementById("fade");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 50) {
        fade.className = ".topbar show"
    } else {
        fade.className = ".topbar hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
