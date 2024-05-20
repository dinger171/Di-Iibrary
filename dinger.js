// function includeJS(jsFilePath) {
//   var js = document.createElement("script");
//   js.type = "text/javascript";
//   js.src = jsFilePath;
//   document.body.appendChild(js);
// }
// // Include another JavaScript file:
// includeJS("js/index.js");

// function style() {
//   // default draggable-container styles
//   var draggableContainers = document.querySelectorAll(".draggable");
//   draggableContainers.forEach(function (container) {
//     container.style.position = "absolute";
//     container.style.backgroundColor = "#D9D9D9";
//     container.style.border = "1px black solid";
//     container.style.borderRadius = "70px";
//     container.style.padding = "1%";
//   });
// }

// // draggable-container
// function dragElement() {
//   // Get all the elements with class 'draggable':
//   var elements = document.querySelectorAll(".draggable");

//   // Make each DIV element draggable:
//   elements.forEach(function (elmnt) {
//     var pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;
//     if (document.getElementById(elmnt.id + "header")) {
//       /* if present, the header is where you move the DIV from:*/
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       /* otherwise, move the DIV from anywhere inside the DIV:*/
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // get the mouse cursor position at startup:
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // call a function whenever the cursor moves:
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // calculate the new cursor position:
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       // set the element's new position:
//       elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//       elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
//     }

//     function closeDragElement() {
//       /* stop moving when mouse button is released:*/
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   });
//   console.log("lalalalalalalalalalalalalalalalal");
// }
// function timer() {
//   let timerElement = document.getElementById("timer");
//   let $hours = new Date().getHours();
//   let $minutes = new Date().getMinutes();
//   let $seconds = new Date().getSeconds();







// function includeJS(jsFilePath) {
//   var js = document.createElement("script");
//   js.type = "text/javascript";
//   js.src = jsFilePath;
//   document.body.appendChild(js);
// }

// // Include another JavaScript file:
// includeJS("js/index.js");

function style() {
  // default draggable-container styles
  var draggableContainers = document.querySelectorAll(".draggable");
  draggableContainers.forEach(function (container) {
    container.style.position = "absolute";
    container.style.backgroundColor = "#D9D9D9";
    container.style.border = "1px black solid";
    container.style.borderRadius = "70px";
    container.style.padding = "1%";
  });
}

// draggable-container
function dragElement() {
  // Get all the elements with class 'draggable':
  var elements = document.querySelectorAll(".draggable");

  // Make each DIV element draggable:
  elements.forEach(function (elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  });
}
export function stopped_timer() {
  let $hours = new Date().getHours();
  let $minutes = new Date().getMinutes();
  let $seconds = new Date().getSeconds();
  return { $hours, $minutes, $seconds };
}

function openweb(web) {
  window.open(web);
}

dragElement();
style();
stopped_timer();
