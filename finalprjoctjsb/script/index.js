"use strict"

const google =  document.getElementById('google');
const bing = document.getElementById('bing');

/* pop up */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const uN = document.getElementById('username');
const pW = document.getElementById('password');
const login = document.getElementById('log');

const username = 'moonie';
const password = 'password';

login.addEventListener('click', () => {
  let uName = uN.value.trim();
  let passW = pW.value.trim();

  if (uName === '') {
    message += 'please input your username\n';
  }

  if (uName === username && passW === password) {
    google.disabled = false;
    bing.disabled = false;

    span.onclick();
  }
});

/* search engine */

const sBar = document.getElementById('search-engine');

google.addEventListener('click', () => {
  let goog = sBar.value.trim();

  let searchQuery = 'https://google.com/search?q=' + goog;

  window.location.assign(searchQuery);
});

bing.addEventListener('click', () => {
  let bimg = sBar.value.trim();

  let searchQuery = 'https://google.com/search?q=' + bimg;

  window.location.assign(searchQuery);
});
