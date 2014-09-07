// ==UserScript==
// @name        selectable_fanfiction
// @namespace   mihi
// @include     https://www.fanfiction.net/*
// @version     1.0
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==


function makeSelectable() {
    // lifted straight from their "ham2" function...
    var story = $("#storytextp");
    story.css("-webkit-touch-callout", "text");
    story.css("-webkit-user-select", "text");
    story.css("-khtml-user-select", "text");
    story.css("-moz-user-select", "text");
    story.css("-ms-user-select", "text");
    story.css("user-select", "text");
}

// selection gets disabled after a 200 ms timeout, reenable it
// tried to intercept that, but didn't bother to in the end
setTimeout(function() {
	makeSelectable();
}, 500);
