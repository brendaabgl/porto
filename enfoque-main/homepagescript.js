//darkmode lightmode
let isDarkMode = false;
document.getElementById("check").addEventListener("change", function () {
  if (this.checked) {
    isDarkMode = true;
    document.querySelector(".uphead").style.backgroundColor = "#2D2D2D";
    document.querySelector("#quotebutton").style.backgroundColor = "#2D2D2D";
    document.querySelector("#quotebutton").style.color = "#DADAD9";
    document.body.style.backgroundColor = "#3B3B3B";
    document.body.style.color = "#DADAD9";
    document.querySelector(".footer").style.color="#fff";
    document.querySelector(".focusresearch").style.backgroundColor = "#4C4C4C";
    document.querySelector(".brenda").style.backgroundColor = "#4C4C4C";
    document.querySelector(".eryca").style.backgroundColor = "#4C4C4C";
    document.querySelector(".gea").style.backgroundColor = "#4C4C4C";
    document.querySelector("#igb").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#mailb").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wab").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#ige").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#maile").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wae").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#igg").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#mailg").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wag").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
  } else {
    isDarkMode = false;
    document.querySelector(".uphead").style.backgroundColor = "#DADAD9";
    document.querySelector("#quotebutton").style.backgroundColor = "#DADAD9";
    document.querySelector("#quotebutton").style.color = "black";
    document.body.style.backgroundColor = "#999898";
    document.querySelector(".focusresearch").style.backgroundColor = "#B5B5B5";
    document.querySelector(".brenda").style.backgroundColor = "#B5B5B5";
    document.querySelector(".eryca").style.backgroundColor = "#B5B5B5";
    document.querySelector(".gea").style.backgroundColor = "#B5B5B5";
    document.body.style.color = "black";
    document.querySelector(".footer").style.color="#fff";
    document.querySelector("#igb").style.filter =
      "none";
    document.querySelector("#mailb").style.filter =
      "none";
    document.querySelector("#wab").style.filter =
      "none";
      document.querySelector("#ige").style.filter =
      "none";
    document.querySelector("#maile").style.filter =
      "none";
    document.querySelector("#wae").style.filter =
      "none";
      document.querySelector("#igg").style.filter =
      "none";
    document.querySelector("#mailg").style.filter =
      "none";
    document.querySelector("#wag").style.filter =
      "none";
  }
  savemode(isDarkMode);
});

function savemode(isDarkMode) {
  localStorage.setItem("mode", isDarkMode ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  const savedmode = localStorage.getItem("mode");
  if (savedmode === "dark") {
    document.getElementById('check').checked = true;
    document.querySelector(".uphead").style.backgroundColor = "#2D2D2D";
    document.querySelector("#quotebutton").style.backgroundColor = "#2D2D2D";
    document.querySelector("#quotebutton").style.color = "#DADAD9";
    document.body.style.backgroundColor = "#3B3B3B";
    document.querySelector(".focusresearch").style.backgroundColor = "#4C4C4C";
    document.querySelector(".brenda").style.backgroundColor = "#4C4C4C";
    document.querySelector(".eryca").style.backgroundColor = "#4C4C4C";
    document.querySelector(".gea").style.backgroundColor = "#4C4C4C";
    document.body.style.color = "#DADAD9";
    document.querySelector(".footer").style.color="#fff";
    document.querySelector("#igb").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#mailb").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wab").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#ige").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#maile").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wae").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#igg").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#mailg").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wag").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
  } else {
    document.querySelector(".uphead").style.backgroundColor = "#DADAD9";
    document.querySelector("#quotebutton").style.backgroundColor = "#DADAD9";
    document.querySelector("#quotebutton").style.color = "black";
    document.body.style.backgroundColor = "#999898";
    document.querySelector(".focusresearch").style.backgroundColor = "#B5B5B5";
    document.querySelector(".brenda").style.backgroundColor = "#B5B5B5";
    document.querySelector(".eryca").style.backgroundColor = "#B5B5B5";
    document.querySelector(".gea").style.backgroundColor = "#B5B5B5";
    document.body.style.color = "black";
    document.querySelector(".footer").style.color="#fff";
    document.querySelector(".footer").color="#fff";
    document.querySelector("#igb").style.filter =
      "none";
    document.querySelector("#mailb").style.filter =
      "none";
    document.querySelector("#wab").style.filter =
      "none";
      document.querySelector("#ige").style.filter =
      "none";
    document.querySelector("#maile").style.filter =
      "none";
    document.querySelector("#wae").style.filter =
      "none";
      document.querySelector("#igg").style.filter =
      "none";
    document.querySelector("#mailg").style.filter =
      "none";
    document.querySelector("#wag").style.filter =
      "none";
  }
});
