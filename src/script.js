fade = document.getElementById("fade");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 50) {
        fade.className = ".topbar show"
    } else {
        fade.className = ".topbar hide"
    }
};

window.onscroll = function() {progressIndicator()};

function progressIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}
