// document.addEventListener('DOMContentLoaded', (event) => {

var dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = "0.1";
  this.style.border = "3px dashed #c4cad3";

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);

  document.getElementById("main-trash-btn").style.display = "inherit";
  document.getElementById("main-trash-btn").style.opacity = "1";
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = "move";

  return false;
}

function handleDragEnter(e) {
  // this.classList.add('task-hover');
  // e.target.parentNode.classList.add('task-hover');
  // let columnArr = ['ready', 'progress', 'review', 'done']
  // if (columnArr.indexOf(e.target.getAttribute('id')) > -1) {
  //     e.target.classList.add('task-hover');
  // } else if (columnArr.indexOf(e.target.parentNode.getAttribute('id')) > -1) {
  //     e.target.parentNode.classList.add('task-hover');
  // } else if (columnArr.indexOf(e.target.parentNode.parentNode.getAttribute('id')) > -1) {
  //     e.target.parentNode.parentNode.classList.add('task-hover');
  // } else if (columnArr.indexOf(e.target.parentNode.parentNode.parentNode.getAttribute('id')) > -1) {
  //     e.target.parentNode.parentNode.parentNode.classList.add('task-hover');
  // } else if (columnArr.indexOf(e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id')) > -1) {
  //     e.target.parentNode.parentNode.parentNode.parentNode.classList.add('task-hover');
  // } else {
  // }
}

function handleDragLeave(e) {
  // this.classList.remove('task-hover');
}

// function createPlusTask() {
//     let plustask = document.createElement("div");
//     plustask.classList.add("plustask");
//     plustask.setAttribute("ondrop", "plusDrop(event)")
//     plustask.setAttribute("ondragover", "plusAllowDrop(event)")
//     let plustaski = document.createElement("i");
//     plustaski.classList.add("fas");
//     plustaski.classList.add("fa-plus");
//     plustask.appendChild(plustaski);
//     return plustask;
// }

function bubblingFinder(e) {
  for (var i = 0; i < e.path.length; i++) {
    let targetEl = e.path[i];
    if (targetEl.classList.contains("project-column")) {
      targetEl.children[1].appendChild(dragSrcEl);
      break;
    }
  }
}

function handleDrop(e) {
  // if (e.stopPropagation) {
  //     e.stopPropagation(); // stops the browser from redirecting.
  // }

  if (dragSrcEl != this) {
    // for (var i = 0; i < (e.path.length); i++) {
    //     let targetEl = e.path[i]
    //     if (targetEl.classList.contains('project-column')) {
    //         let targetElm = document.getElementById(targetEl.id);
    //         targetElm.removeChild(targetElm.lastElementChild);
    //         targetElm.appendChild(dragSrcEl);
    //         targetElm.appendChild(createPlusTask());
    //         break;
    //     }
    // };
    bubblingFinder(e);
    // let columnArr = ['ready', 'progress', 'review', 'done']
    // if (columnArr.indexOf(e.target.parentNode.getAttribute('id')) > -1) {

    //     e.target.parentNode.removeChild(e.target.parentNode.lastElementChild);
    //     e.target.parentNode.appendChild(dragSrcEl);
    //     e.target.parentNode.appendChild(createPlusTask());

    // } else if (columnArr.indexOf(e.target.parentNode.parentNode.getAttribute('id')) > -1) {

    //     e.target.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.lastElementChild);
    //     e.target.parentNode.parentNode.appendChild(dragSrcEl);
    //     e.target.parentNode.parentNode.appendChild(createPlusTask());

    // } else if (columnArr.indexOf(e.target.parentNode.parentNode.parentNode.getAttribute('id')) > -1) {

    //     e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.lastElementChild);
    //     e.target.parentNode.parentNode.parentNode.appendChild(dragSrcEl);
    //     e.target.parentNode.parentNode.parentNode.appendChild(createPlusTask());

    // } else {

    // }
  }

  return false;
}

function mainTrashBtnHide() {
  document.getElementById("main-trash-btn").style.display = "none";
}
function mainTrashBtnShow() {
  document.getElementById("main-trash-btn").style.display = "inherit";
}
function handleDragEnd(e) {
  this.style.opacity = "1";
  this.style.border = 0;

  items.forEach(function (item) {
    item.classList.remove("task-hover");
  });

  document.getElementById("main-trash-btn").style.opacity = "0";
  setTimeout(mainTrashBtnHide, 300);
}

let items = document.querySelectorAll(".task");
items.forEach(function (item) {
  item.addEventListener("dragstart", handleDragStart, false);
  item.addEventListener("dragenter", handleDragEnter, false);
  item.addEventListener("dragover", handleDragOver, false);
  item.addEventListener("dragleave", handleDragLeave, false);
  item.addEventListener("drop", handleDrop, false);
  item.addEventListener("dragend", handleDragEnd, false);
});

const alertPlaceholder = document.body;

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" style="position: absolute;left: 20px;top: 20px;width: fit-content;">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Nice, you triggered this alert message!", "success");
  });
}

function trashAllowDrop(ev) {
  ev.preventDefault();
}

function trashDrop(ev) {
  ev.preventDefault();
  // var data = ev.dataTransfer.getData("text/html");
  // console.dir(dragSrcEl)
  dragSrcEl.remove();
  // ev.target.appendChild(document.getElementById(data));
}
function plusAllowDrop(ev) {
  ev.preventDefault();
}

function plusDrop(ev) {
  ev.preventDefault();
  bubblingFinder(ev);
  // var data = ev.dataTransfer.getData("text/html");
  // console.dir(dragSrcEl)
  // ev.target.appendChild(document.getElementById(data));
}
// });

let menuBtnVar = true;

function menuBtn() {
  if (menuBtnVar) {
    document.querySelector(".left-side").style.width = "223px";
    menuBtnVar = false;
  } else {
    document.querySelector(".left-side").style.width = "53px";
    menuBtnVar = true;
  }
}

// #todo menu script ------------------------------------------------------------------------------------

const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
  v.addEventListener("mouseover", () => {
    const video = v.querySelector("video");
    video.play();
  });

  v.addEventListener("mouseleave", () => {
    const video = v.querySelector("video");
    video.pause();
  });
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

let wsSidebarlet = false;
function wsSidebar() {
  menuBtn();
  if (wsSidebarlet) {
    document.getElementById("ws-sidebar").style.left = "-220px";
    wsSidebarlet = !wsSidebarlet;
  } else {
    document.getElementById("ws-sidebar").style.left = "52px";
    wsSidebarlet = !wsSidebarlet;
    // menuBtn();
  }
}
let bSidebarlet = false;
function bSidebar() {
  if (bSidebarlet) {
    document.getElementById("b-sidebar").style.left = "-220px";
    bSidebarlet = !bSidebarlet;
  } else {
    document.getElementById("b-sidebar").style.left = "52px";
    bSidebarlet = !bSidebarlet;
  }
}

// requests management -------------------------------------

function save(type,...data) {
  if (type == "task") {
    axios
      .post("https://reqres.in/api/register", {
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function get(type,...data) {
  if (type == "task") {
    let userId = 8;
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page: 2,
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        for (let i = 0; i < response.data.data.length; i++) {
          if (response.data.data[i].id == userId) {
            console.log("user email : " + response.data.data[i].email);
            break;
          }
          if (response.data.data[i].id !== userId && i == response.data.data.length - 1) {
            console.log("user not found");
          }
        }
      })
      .catch(function (error) {
        console.log("error : " + error);
      })
      .then(function () {
        // always executed
      });
  }
}
