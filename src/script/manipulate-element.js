// bug: when resizing, block may cause problem.

function clickNav() {
    let nav = document.getElementById("nav-bar");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
}

function userAccount_desktop() {
}

function searchByTitle() {
    let title = document.getElementById("by-title");
    let description = document.getElementById("by-description");

    title.style.backgroundColor = "rgba(255,255,255,0.4)";
    description.style.background = "none";
}

function searchByDescription() {
    let title = document.getElementById("by-title");
    let description = document.getElementById("by-description");

    description.style.backgroundColor = "rgba(255,255,255,0.4)";
    title.style.background = "none";

}