// ==UserScript==
// @name         CUPS Print Jobs Sort Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a button to sort CUPS print jobs in reverse order on the printers and jobs pages.
// @author       You
// @require      https://code.jquery.com/jquery-3.7.1.slim.min.js
// @include        *://*:631/printers/*
// @include        *://*:631/jobs*
// @icon         https://cdn-icons-png.flaticon.com/512/10407/10407118.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function sortrows() {
        // Find the "table.list tbody" element and get all its "tr" children
        var $rows = $('table.list tbody tr');

        // Reverse the order of the rows and append them back to the table
        $('table.list tbody').append($rows.get().reverse());
    }

    // Find the "p" element with the specified text
    var $target = $('p:contains("Jobs listed in descending order")');

    // Create a button element and insert it before the target element
    var $button = $('<button>').text($(':contains("Задания")').length == 0 ? 'Sort' : 'Упорядочить');
    $target.before($button);

    // Bind a click event to the button
    $button.on('click', sortrows);
    // remove p
    $target.remove();
    // sort ascending by default
    sortrows();
})();
