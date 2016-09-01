// ==UserScript==
// @name        Is TIO down?
// @namespace   BetaDecay
// @description Shows a warning message if TIO.net is down
// @include     *
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var tioDown = false;

function getData() {
  $.getJSON("http://www.whateverorigin.org/get?url=http://isup.me/tryitonline.net", function(data) {
    if (data.contents.indexOf('looks down from here.') != -1) {
      if (tioDown == false) {
        alert("Try it online is down.");
        tioDown = true;
      } 
    } else {
      if (tioDown == true) {
        alert("Try it online is back up.");
        tioDown = false;
      }
    }
  });
}

setInterval(getData, 600000);