//darkmode lightmode
let isDarkMode = false;
document.getElementById("check").addEventListener("change", function () {
  if (this.checked) {
    isDarkMode = true;
    document.querySelector("nav").style.backgroundColor = "#2D2D2D";
    document.querySelector(".uphead").style.backgroundColor = "#2D2D2D";
    document.querySelector("#clock").style.color = "#7F7F7F";
    document.querySelector("#palette").style.color = "#7F7F7F";
    document.querySelector("#tdl").style.color = "#7F7F7F";
    document.querySelector("#music").style.color = "#7F7F7F";
    document.querySelector("#rightnavabout").style.color = "#fff";
    document.querySelector("#rightnavcontact").style.color = "#fff";
    document.querySelector(".brenda").style.backgroundColor = "#2D2D2D";
    document.querySelector(".eryca").style.backgroundColor = "#2D2D2D";
    document.querySelector(".gea").style.backgroundColor = "#2D2D2D";
    document.querySelector(".brenda").style.color = "#7F7F7F";
    document.querySelector(".eryca").style.color = "#7F7F7F";
    document.querySelector(".gea").style.color = "#7F7F7F";
    document.querySelector(".cntctbrenda").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntcteryca").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntctgea").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntctbrenda").style.color = "#7F7F7F";
    document.querySelector(".cntcteryca").style.color = "#7F7F7F";
    document.querySelector(".cntctgea").style.color = "#7F7F7F";
    document.querySelector(".background-chooser").style.backgroundColor =
      "#2D2D2D";
    document.querySelector(".ambiance-section").style.backgroundColor =
      "#2D2D2D";
    document.querySelector("#fireicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writeicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keyicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typeicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#firebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainbutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keybutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".fireslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".rainslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".keyslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".typeslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".writeslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#firevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainvolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keyvolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
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
    document.querySelector(".todo").style.backgroundColor = "#2D2D2D";
    document.querySelector(".row").style.backgroundColor = "#575757";
    document.querySelector("#todobutton").style.backgroundColor = "#575757";
    document.querySelector(".pomodoro-timer").style.backgroundColor = "#2D2D2D";
    document.querySelector(".pomodoro-timer-box").style.color = "#7F7F7F";
    document.querySelector('body').style.color="#7F7F7F";
  } else {
    isDarkMode = false;
    document.querySelector("nav").style.backgroundColor = "#fff";
    document.querySelector(".uphead").style.backgroundColor = "#fff";
    document.querySelector("#clock").style.color = "black";
    document.querySelector("#palette").style.color = "black";
    document.querySelector("#tdl").style.color = "black";
    document.querySelector("#music").style.color = "black";
    document.querySelector("#rightnavabout").style.color = "black";
    document.querySelector("#rightnavcontact").style.color = "black";
    document.querySelector(".brenda").style.backgroundColor = "#fff";
    document.querySelector(".eryca").style.backgroundColor = "#fff";
    document.querySelector(".gea").style.backgroundColor = "#fff";
    document.querySelector(".brenda").style.color = "black";
    document.querySelector(".eryca").style.color = "black";
    document.querySelector(".gea").style.color = "black";
    document.querySelector(".cntctbrenda").style.backgroundColor = "#fff";
    document.querySelector(".cntcteryca").style.backgroundColor = "#fff";
    document.querySelector(".cntctgea").style.backgroundColor = "#fff";
    document.querySelector(".cntctbrenda").style.color = "black";
    document.querySelector(".cntcteryca").style.color = "black";
    document.querySelector(".cntctgea").style.color = "black";
    document.querySelector(".background-chooser").style.backgroundColor =
      "#fff";
    document.querySelector(".ambiance-section").style.backgroundColor = "#fff";
    document.querySelector("#fireicon").style.filter = "none";
    document.querySelector("#keyicon").style.filter = "none";
    document.querySelector("#writeicon").style.filter = "none";
    document.querySelector("#typeicon").style.filter = "none";
    document.querySelector("#rainicon").style.filter = "none";
    document.querySelector("#firebutton").style.filter = "none";
    document.querySelector("#keybutton").style.filter = "none";
    document.querySelector("#writebutton").style.filter = "none";
    document.querySelector("#typebutton").style.filter = "none";
    document.querySelector("#rainbutton").style.filter = "none";
    document.querySelector(".fireslider").style.filter = "none";
    document.querySelector(".rainslider").style.filter = "none";
    document.querySelector(".keyslider").style.filter = "none";
    document.querySelector(".typeslider").style.filter = "none";
    document.querySelector(".writeslider").style.filter = "none";
    document.querySelector("#firevolicon").style.filter = "none";
    document.querySelector("#rainvolicon").style.filter = "none";
    document.querySelector("#keyvolicon").style.filter = "none";
    document.querySelector("#typevolicon").style.filter = "none";
    document.querySelector("#writevolicon").style.filter = "none";
    document.querySelector("#igb").style.filter = "none";
    document.querySelector("#mailb").style.filter = "none";
    document.querySelector("#wab").style.filter = "none";
    document.querySelector("#ige").style.filter = "none";
    document.querySelector("#maile").style.filter = "none";
    document.querySelector("#wae").style.filter = "none";
    document.querySelector("#igg").style.filter = "none";
    document.querySelector("#mailg").style.filter = "none";
    document.querySelector("#wag").style.filter = "none";
    document.querySelector(".todo").style.backgroundColor = "#fff";
    document.querySelector(".row").style.backgroundColor = "#dadad9";
    document.querySelector("#todobutton").style.backgroundColor = "#dadad9";
    document.querySelector(".pomodoro-timer").style.backgroundColor = "#fff";
    document.querySelector(".pomodoro-timer-box").style.color = "#333";
    document.querySelector('body').style.color="black";
  }
  savemode(isDarkMode);
});

/*saving dark mode light mode*/
function savemode(isDarkMode) {
  localStorage.setItem("mode", isDarkMode ? "dark" : "light");
}

/*loading saved dark mode light mode*/
document.addEventListener("DOMContentLoaded", () => {
  const savedmode = localStorage.getItem("mode");
  if (savedmode === "dark") {
    document.getElementById('check').checked = true;
    document.querySelector("nav").style.backgroundColor = "#2D2D2D";
    document.querySelector(".uphead").style.backgroundColor = "#2D2D2D";
    document.querySelector("#clock").style.color = "#7F7F7F";
    document.querySelector("#palette").style.color = "#7F7F7F";
    document.querySelector("#tdl").style.color = "#7F7F7F";
    document.querySelector("#music").style.color = "#7F7F7F";
    document.querySelector("#rightnavabout").style.color = "#fff";
    document.querySelector("#rightnavcontact").style.color = "#fff";
    document.querySelector(".brenda").style.backgroundColor = "#2D2D2D";
    document.querySelector(".eryca").style.backgroundColor = "#2D2D2D";
    document.querySelector(".gea").style.backgroundColor = "#2D2D2D";
    document.querySelector(".brenda").style.color = "#7F7F7F";
    document.querySelector(".eryca").style.color = "#7F7F7F";
    document.querySelector(".gea").style.color = "#7F7F7F";
    document.querySelector(".cntctbrenda").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntcteryca").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntctgea").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntctbrenda").style.color = "#7F7F7F";
    document.querySelector(".cntcteryca").style.color = "#7F7F7F";
    document.querySelector(".cntctgea").style.color = "#7F7F7F";
    document.querySelector(".background-chooser").style.backgroundColor =
      "#2D2D2D";
    document.querySelector(".ambiance-section").style.backgroundColor =
      "#2D2D2D";
    document.querySelector("#fireicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writeicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keyicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typeicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#firebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainbutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keybutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".fireslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".rainslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".keyslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".typeslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".writeslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#firevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainvolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keyvolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
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
    document.querySelector(".todo").style.backgroundColor = "#2D2D2D";
    document.querySelector(".row").style.backgroundColor = "#575757";
    document.querySelector("#todobutton").style.backgroundColor = "#575757";
    document.querySelector(".pomodoro-timer").style.backgroundColor = "#2D2D2D";
    document.querySelector(".pomodoro-timer-box").style.color = "#7F7F7F";
    document.querySelector('body').style.color="#7F7F7F";
  } else {
    document.querySelector("nav").style.backgroundColor = "#fff";
    document.querySelector(".uphead").style.backgroundColor = "#fff";
    document.querySelector("#clock").style.color = "black";
    document.querySelector("#palette").style.color = "black";
    document.querySelector("#tdl").style.color = "black";
    document.querySelector("#music").style.color = "black";
    document.querySelector("#rightnavabout").style.color = "black";
    document.querySelector("#rightnavcontact").style.color = "black";
    document.querySelector(".brenda").style.backgroundColor = "#fff";
    document.querySelector(".eryca").style.backgroundColor = "#fff";
    document.querySelector(".gea").style.backgroundColor = "#fff";
    document.querySelector(".brenda").style.color = "black";
    document.querySelector(".eryca").style.color = "black";
    document.querySelector(".gea").style.color = "black";
    document.querySelector(".cntctbrenda").style.backgroundColor = "#fff";
    document.querySelector(".cntcteryca").style.backgroundColor = "#fff";
    document.querySelector(".cntctgea").style.backgroundColor = "#fff";
    document.querySelector(".cntctbrenda").style.color = "black";
    document.querySelector(".cntcteryca").style.color = "black";
    document.querySelector(".cntctgea").style.color = "black";
    document.querySelector(".background-chooser").style.backgroundColor =
      "#fff";
    document.querySelector(".ambiance-section").style.backgroundColor = "#fff";
    document.querySelector("#fireicon").style.filter = "none";
    document.querySelector("#keyicon").style.filter = "none";
    document.querySelector("#writeicon").style.filter = "none";
    document.querySelector("#typeicon").style.filter = "none";
    document.querySelector("#rainicon").style.filter = "none";
    document.querySelector("#firebutton").style.filter = "none";
    document.querySelector("#keybutton").style.filter = "none";
    document.querySelector("#writebutton").style.filter = "none";
    document.querySelector("#typebutton").style.filter = "none";
    document.querySelector("#rainbutton").style.filter = "none";
    document.querySelector(".fireslider").style.filter = "none";
    document.querySelector(".rainslider").style.filter = "none";
    document.querySelector(".keyslider").style.filter = "none";
    document.querySelector(".typeslider").style.filter = "none";
    document.querySelector(".writeslider").style.filter = "none";
    document.querySelector("#firevolicon").style.filter = "none";
    document.querySelector("#rainvolicon").style.filter = "none";
    document.querySelector("#keyvolicon").style.filter = "none";
    document.querySelector("#typevolicon").style.filter = "none";
    document.querySelector("#writevolicon").style.filter = "none";
    document.querySelector("#igb").style.filter = "none";
    document.querySelector("#mailb").style.filter = "none";
    document.querySelector("#wab").style.filter = "none";
    document.querySelector("#ige").style.filter = "none";
    document.querySelector("#maile").style.filter = "none";
    document.querySelector("#wae").style.filter = "none";
    document.querySelector("#igg").style.filter = "none";
    document.querySelector("#mailg").style.filter = "none";
    document.querySelector("#wag").style.filter = "none";
    document.querySelector(".todo").style.backgroundColor = "#fff";
    document.querySelector(".row").style.backgroundColor = "#dadad9";
    document.querySelector("#todobutton").style.backgroundColor = "#dadad9";
    document.querySelector(".pomodoro-timer").style.backgroundColor = "#fff";
    document.querySelector(".pomodoro-timer-box").style.color = "#333";
    document.querySelector('body').style.color="black";
  }
});

/*to-do list*/
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const progressBar = document.getElementById("progress");
const statsNumber = document.getElementById("numbers");

document
  .getElementById("todo-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleDisplay("container-1", ["ambiance-section", "background-chooser", "pomodoro-timer-box"]);
  });

function addTask() {
    if (inputBox.value === "") {} else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  
      listContainer.appendChild(li);
  
      updateTaskCount();
      saveData();
    }
    inputBox.value = "";
}
  
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      updateTaskCount();
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      updateTaskCount();
      saveData();
    }
}, false);

showTasks();

function shootConfetti() {
    confetti({
      particleCount: 100, 
      spread: 80,
      origin: { y: 0.6 }, 
    });
}
  
function updateTaskCount() {
    const totalTasks = listContainer.getElementsByTagName("li").length;
    const completedTasks = listContainer.getElementsByClassName("checked").length;
    
    statsNumber.innerHTML = `${completedTasks} / ${totalTasks}`;
    
    const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  
    if (completedTasks === totalTasks && totalTasks > 0) {
      shootConfetti(); 
    }
}
  
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
  
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
    updateTaskCount();
}

//filtering todo list//
document.getElementById("all-tasks").addEventListener("click", function () {
    let tasks = document.querySelectorAll("li");
    tasks.forEach(task => {
      task.style.display = "block";
    });
});
  
document.getElementById("pending-tasks").addEventListener("click", function () {
    let tasks = document.querySelectorAll("li");
    tasks.forEach(task => {
      if (task.classList.contains("checked")) {
        task.style.display = "none";
      } else {
        task.style.display = "block";
      }
    });
    let sidebar = document.querySelectorAll("li.sideli");
    sidebar.forEach(side => {
      side.style.display = "block";
    });
});
  
document.getElementById("completed-tasks").addEventListener("click", function () {
    let tasks = document.querySelectorAll("li");
    tasks.forEach(task => {
      if (task.classList.contains("checked")) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
    let sidebar = document.querySelectorAll("li.sideli");
    sidebar.forEach(side => {
      side.style.display = "block";
    });
});

/*accordion buttons*/
function toggleDisplay(showSectionId, hideSectionIds) {
  const showSection = document.querySelector(`.${showSectionId}`);
  showSection.style.display =
    showSection.style.display === "none" || showSection.style.display === ""
      ? "block"
      : "none";
  if(showSectionId == "container-1"){
    console.log("in");
    document.querySelector('.wrap').style.display = "flex";
  }
  hideSectionIds.forEach((id) => {
    const section = document.querySelector(`.${id}`);
    if (section.style.display === "block" || section.style.display === "flex") {
      section.style.display = "none";
    }
  });
  const contact = document.querySelector(".contact");
    if (contact.style.display === "flex") {
      contact.style.display = "none";
    }
  const about = document.querySelector(".about");
  if (about.style.display === "flex") {
    about.style.display = "none";
  }
}

function navDisplay(showSectionid, hideSectionid) {
  const showSection = document.querySelector(`.${showSectionid}`);
  showSection.style.display =
    showSection.style.display === "none" || showSection.style.display === ""
      ? "flex"
      : "none";
  const hideSection = document.querySelector(`.${hideSectionid}`);
  if (hideSection.style.display === "flex") {
    hideSection.style.display = "none";
  }
  const ambiance = document.querySelector('.ambiance-section');
  if(ambiance.style.display === 'block'){
    ambiance.style.display = 'none';
  }
  const bgChooser = document.querySelector('.background-chooser');
  if(bgChooser.style.display === 'block'){
    bgChooser.style.display = 'none';
  }
  const todo = document.querySelector('.container-1');
  if(todo.style.display === 'block'){
    todo.style.display = 'none';
  }
  const pomodoro = document.querySelector('.pomodoro-timer-box');
  if(pomodoro.style.display === 'block'){
    pomodoro.style.display = 'none';
  }
  const wrap = document.querySelector('.wrap');
  if(wrap.style.display === 'flex'){
    wrap.style.display = 'none';
  }
}

//ambiance player
document
  .getElementById("music-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleDisplay("ambiance-section", ["container-1", "background-chooser", "pomodoro-timer-box", "wrap"]);
  });

//fire
var firePlaying = false;
document.getElementById("firebutton").addEventListener("click", function () {
  if (!firePlaying) {
    var audio = document.getElementById("fireaudio");
    audio.volume = fslider.value / 100;
    audio.play();
    audio.loop = true;
    firePlaying = true;
    document.getElementById("fireplay").src = "../imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("fireaudio");
    audio.pause();
    firePlaying = false;
    document.getElementById("fireplay").src = "../imageIcon/play-solid.svg";
  }
});
var fslider = document.getElementById("fireslider");
fslider.oninput = function () {
  var audio = document.getElementById("fireaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("firevolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("firevolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("firevolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("firevolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("firevolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("firevolicon").style.width = "30px";
  }
};

//keyboard
var keyPlaying = false;
document.getElementById("keybutton").addEventListener("click", function () {
  if (!keyPlaying) {
    var audio = document.getElementById("keyaudio");
    audio.volume = kslider.value / 100;
    audio.play();
    audio.loop = true;
    keyPlaying = true;
    document.getElementById("keyplay").src = "../imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("keyaudio");
    audio.pause();
    keyPlaying = false;
    document.getElementById("keyplay").src = "../imageIcon/play-solid.svg";
  }
});
var kslider = document.getElementById("keyslider");
kslider.oninput = function () {
  var audio = document.getElementById("keyaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("keyvolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("keyvolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("keyvolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("keyvolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("keyvolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("keyvolicon").style.width = "30px";
  }
};

//rain
var rainPlaying = false;
document.getElementById("rainbutton").addEventListener("click", function () {
  if (!rainPlaying) {
    var audio = document.getElementById("rainaudio");
    audio.volume = rslider.value / 100;
    audio.play();
    audio.loop = true;
    rainPlaying = true;
    document.getElementById("rainplay").src = "../imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("rainaudio");
    audio.pause();
    rainPlaying = false;
    document.getElementById("rainplay").src = "../imageIcon/play-solid.svg";
  }
});
var rslider = document.getElementById("rainslider");
rslider.oninput = function () {
  var audio = document.getElementById("rainaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("rainvolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("rainvolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("rainvolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("rainvolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("rainvolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("rainvolicon").style.width = "30px";
  }
};

//typewriter
var typePlaying = false;
document.getElementById("typebutton").addEventListener("click", function () {
  if (!typePlaying) {
    var audio = document.getElementById("typeaudio");
    audio.volume = tslider.value / 100;
    audio.play();
    audio.loop = true;
    typePlaying = true;
    document.getElementById("typeplay").src = "../imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("typeaudio");
    audio.pause();
    typePlaying = false;
    document.getElementById("typeplay").src = "../imageIcon/play-solid.svg";
  }
});
var tslider = document.getElementById("typeslider");
tslider.oninput = function () {
  var audio = document.getElementById("typeaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("typevolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("typevolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("typevolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("typevolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("typevolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("typevolicon").style.width = "30px";
  }
};

//writing
var writePlaying = false;
document.getElementById("writebutton").addEventListener("click", function () {
  if (!writePlaying) {
    var audio = document.getElementById("writeaudio");
    audio.volume = wslider.value / 100;
    audio.play();
    audio.loop = true;
    writePlaying = true;
    document.getElementById("writeplay").src = "../imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("writeaudio");
    audio.pause();
    writePlaying = false;
    document.getElementById("writeplay").src = "../imageIcon/play-solid.svg";
  }
});
var wslider = document.getElementById("writeslider");
wslider.oninput = function () {
  var audio = document.getElementById("writeaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("writevolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("writevolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("writevolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("writevolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("writevolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("writevolicon").style.width = "30px";
  }
};

/*background chooser*/
const bgChooser = document.querySelector(".background-chooser");

document
  .querySelector(".navbar-toggle")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleDisplay("background-chooser", ["container-1", "ambiance-section", "pomodoro-timer-box", "wrap"]);
  });

const setBackground = (imageUrl) => {
  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
};

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", (event) => {
    const bgUrl = event.target.src; 
    setBackground(bgUrl); 
    bgChooser.classList.remove("active"); 
  });
});

//pomodoro timer
document
.querySelector("#timerToggle")
.addEventListener("click", function (event) {
  event.preventDefault();
  toggleDisplay("pomodoro-timer-box", ["container-1", "ambiance-section", "background-chooser", "wrap"]);
});

let workTime = 25 * 60;
let breakTime = 5 * 60;
let timerInterval;
let isRunning = false;
let isWorkTime = true;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const workTimeInput = document.getElementById('workTime');
const breakTimeInput = document.getElementById('breakTime');
const pomodoroTimerBox = document.querySelector('.pomodoro-timer-box');

function updateTimer() {
  let minutes = Math.floor(workTime / 60);
  let seconds = workTime % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (workTime > 0) {
      workTime--;
      updateTimer();
    } else {
      if (isWorkTime) {
        isWorkTime = false;
        workTime = breakTime;
      } else {
        isWorkTime = true;
        workTime = workTimeInput.value * 60;
      }
      updateTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  workTime = workTimeInput.value * 60;
  updateTimer();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

workTimeInput.addEventListener('change', () => {
  if (!isRunning) {
    workTime = workTimeInput.value * 60;
    updateTimer();
  }
});

breakTimeInput.addEventListener('change', () => {
  if (!isRunning) {
    breakTime = breakTimeInput.value * 60;
  }
});

updateTimer();

let offsetX, offsetY;

//team about
document
  .getElementById("rightnavabout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    navDisplay("about", "contact");
  });

  //team contact
document
  .getElementById("rightnavcontact")
  .addEventListener("click", function (event) {
    event.preventDefault();
    navDisplay("contact", "about");
});

//Size too small alert
const targetWidth = 512;
const targetHeight = 335;
let tempWidth = 512;
let tempHeight = 335;

function checkWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if ((width <= targetWidth || height <= targetHeight) && (width < tempWidth || height < tempHeight)) {
        alert(`Tolong perbesar window mu agar web bekerja dengan baik! Terima kasih!`);
    }
    tempWidth = width;
    tempHeight = height;
}

window.addEventListener('resize', checkWindowSize);

checkWindowSize();