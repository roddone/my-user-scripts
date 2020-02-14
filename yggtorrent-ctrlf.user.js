// ==UserScript==
// @name         add keyboard search
// @namespace    YggTorrent
// @version      0.2
// @description  allows to ctrl+f to search on yggtorrent
// @author       Romain Oddone
// @include      /^https?://(www2|www)?\.yggtorrent\.(ws|se)*/
// @grant        none.
// @run-at       document-ready
// @updateURL   https://github.com/roddone/my-user-scripts/raw/master/yggtorrent-ctrlf.user.js
// @downloadURL https://github.com/roddone/my-user-scripts/raw/master/yggtorrent-ctrlf.user.js
// ==/UserScript==

(function() {
    'use strict';
    document.body.onkeydown = function(evt){
        if(evt.key === 'f' && evt.ctrlKey === true){
            evt.preventDefault();
            document.querySelector('body > header > div > form > div > input[type=text]').focus()
        }
    };
})();
