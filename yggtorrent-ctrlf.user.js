// ==UserScript==
// @name         add keyboard search
// @namespace    YggTorrent
// @version      0.16
// @description  allows to ctrl+f to search on yggtorrent
// @author       Romain Oddone
// @include      /^https?://(www6\.|www5\.|www4\.|www3\.|www2\.|www\.)?yggtorrent\.(qa|wtf|do|lol|ws|se|si|li|nz|re|la|fi)*/
// @grant        none.
// @run-at       document-ready
// @updateURL   https://github.com/roddone/my-user-scripts/raw/master/yggtorrent-ctrlf.user.js
// @downloadURL https://github.com/roddone/my-user-scripts/raw/master/yggtorrent-ctrlf.user.js
// ==/UserScript==

(function() {
    'use strict';
    document.body.addEventListener('keydown', function(evt){
        if(evt.key === 'f' && evt.ctrlKey === true){
            evt.preventDefault();
            document.querySelector('body > header > div > form > div > input[type=text]').focus()
        }
    });
})();
