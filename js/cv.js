let skillProgressValue = $.querySelectorAll(".skill-progress");
let skillProgressElem = $.querySelectorAll(".progress-now");
let progressValue = $.querySelectorAll(".progress-value");

// skill progress waypoints
for (var i = 0; i < skillProgressElem.length; i++) {
  let width = skillProgressElem[i].getAttribute("data-value");
  skillProgressElem[i].style.width = 0;
  progressValue[i].innerHTML = 0;
}

var waypoint = new Waypoint({
  element: document.getElementById("skills"),
  handler: function () {
    for (var i = 0; i < skillProgressElem.length; i++) {
      let width = skillProgressElem[i].getAttribute("data-value");
      skillProgressElem[i].style.width = width + "%";
      progressValue[i].innerHTML = width + "%";
    }
  },
  offset: "100%",
});
