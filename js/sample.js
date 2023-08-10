window.addEventListener("DOMContentLoaded", function() {
  var true_area = document.getElementById("true_area");
var false_area = document.getElementById("false_area");
var true_btn = document.getElementById("true_btn");
var false_btn = document.getElementById("false_btn");

true_btn.addEventListener("click", function() {
  icon = document.createElement("span");
icon.setAttribute("class", "icon");
  true_area.appendChild(icon);
}, false);

false_btn.addEventListener("click",function() {
  icon = document.createElement("span");
icon.setAttribute("class", "icon");
  false_area.appendChild(icon);
}, false);
}, false);  