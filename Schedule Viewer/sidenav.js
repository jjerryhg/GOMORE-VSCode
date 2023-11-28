// let list = document.querySelectorAll(".list");
// for (let i = 0; i < list.length; i++) {
//   list[i].onclick = (e) => {
//     let j = 0;
//     while (j < list.length) {
//       list[j++].className = "list";
//     }
//     list[i].className = "list active";
//   };
// }

// list.forEach((elements) => {
//   elements.addEventListener("click", function (event) {
//     let bg = document.querySelector("body");
//     let color = event.target.getAttribute("data-color");
//     console.log(event.target)
//     bg.style.backgroundColor = color;
//   });
// });

//Function to hide table info
var currentId = ""

function toggleTable(mode) {
  if(currentId !== "" && currentId !== mode) document.getElementById(currentId).className = "table-info-hidden";
  if(document.getElementById(mode).className == "table-info")
  {
    document.getElementById(mode).className = "table-info-hidden";
  }
  else
   {
    currentId = mode;
    document.getElementById(mode).className = "table-info";
   }
}
//Table info finish
function showSidenav() {
  var x = document.getElementById("aside-container")
  if (x.style.display === "block") {
    setTimeout(function() {
      x.style.display = "none";
    }, 50);
  } else {
    setTimeout(function() {
    x.style.display = "block";
    }, 50);
}
}

function hideSidenav() {
  var y = document.getElementById("aside-container")
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} //currently not working

// Range Slider
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

  
// var hovering = function(){
//   $("aside").show("slide", { direction: "right" }, 1000);
// };

// var leaving = function(){
//   $("aside").hide("slide", { direction: "left" }, 1000);
// };

// $("#aside-container").hover(hovering, leaving);



// window.addEventListener("click", (event) => {
//   contentDivs.forEach((content, index) => {
//       if (event.target === content) {
//           content.style.display = "none";
//       }
//   });
// });

// MODAL START ---------------------
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// MODAL END -------------------------------------------