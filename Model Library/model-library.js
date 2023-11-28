// toogle password
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    };
  }

// toogle side nav to open and close
  function topleftNav() {
    var width = document.getElementById("toggle-topleft-sidenav").style.width;
    if (width === "0px" || width == "") {
      document.getElementById("toggle-topleft-sidenav").style.width = "250px";
      $('.animated-icon').toggleClass('open');
    }
    else {
      document.getElementById("toggle-topleft-sidenav").style.width = "0px";
      $('.animated-icon').toggleClass('open');
    }
  }

  function toprightNav() {
    var width = document.getElementById("toggle-topright-sidenav").style.width;
    if (width === "0px" || width == "") {
      document.getElementById("toggle-topright-sidenav").style.width = "300px";
      $('.topright-nav-closebtn').toggleClass('open');
    }
    else {
      document.getElementById("toggle-topright-sidenav").style.width = "0px";
      $('.topright-nav-closebtn').toggleClass('open');
    }
  }
  

// toogle dropdown button inside sidenav to open
  var currentdropbtn = ""

  function mydropFunction(mode) {
    document.getElementById(mode).classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.topleft-sidebar-dropbtn')) {
      var dropdowns = document.getElementsByClassName(currentdropbtn);
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function myFunction1() {
  var x = document.getElementById("password1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  };
}

function myFunction2() {
  var x = document.getElementById("password2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  };
}

// toggle show and hide user icon
// const btn = document.getElementById('toggle-usermenu-btn');

// toggle-usermenu-btn.addEventListener('click', () => {
//   // 👇️ hide button
//   btn.style.display = 'none';

//   // 👇️ show div
//   const box = document.getElementById('toggle-topright-sidenav');
//   box.style.display = 'block';
// });