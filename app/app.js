 $(".hamburger-icon").on("click", () => {
    $(".hamburger-icon").toggleClass("open");
  
}); 


import { changePage } from "../app/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePage(hashTag, pageID);
}


function initListeners() {
    console.log("test");
}

function initUrlListeners() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initListeners();
    initUrlListeners();
})