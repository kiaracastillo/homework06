$(".hamburger-icon").on("click",(()=>{$(".hamburger-icon").toggleClass("open")}));import{changePage}from"../app/model.js";function route(){let n=window.location.hash,e=n.replace("#","");changePage(n,e)}function initListeners(){console.log("test")}function initUrlListeners(){$(window).on("hashchange",route),route()}$(document).ready((function(){initListeners(),initUrlListeners()}));