"use strict";
function markAllAsRead() {
    let activeClasses = document.querySelectorAll(".notification-body-container");
    let activeIcons = document.querySelectorAll(".notification-read-toggle");
    let newActiveClasses = Array.from(activeClasses);
    let newActiveIcons = Array.from(activeIcons);
    toggleList(newActiveClasses);
    toggleList(newActiveIcons);
}
function toggleList(list) {
    let classMod = (list.length > 3) ? "active" : "notification-read-toggle-disable";
    list.forEach((item, index) => {
        if (item.classList.contains(classMod)) {
            item.classList.remove(classMod);
        }
        else if (index <= 2) {
            item.classList.add(classMod);
        }
    });
}
