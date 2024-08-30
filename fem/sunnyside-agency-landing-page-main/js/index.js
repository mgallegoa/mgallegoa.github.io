function showHiddeMenu() {
    var x = document.getElementById("mobile-menu");
    var t = document.getElementById("mobile-triangle");
    if (x.style.display === "block") {
        x.style.display = "none";
        t.style.display = "none";
    } else {
        x.style.display = "block";
        t.style.display = "block";
    }
}