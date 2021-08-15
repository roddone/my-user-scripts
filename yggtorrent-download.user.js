// ==UserScript==
// @name         allows to download with keyboard action
// @namespace    YggTorrent
// @version      0.5
// @description  allows to ctrl+f to search on yggtorrent
// @author       Romain Oddone
// @include      /^https?://(www4\.|www3\.|www2\.|www\.)?yggtorrent\.(ws|se|si|li|nz)/torrent*/
// @grant        none.
// @run-at       document-ready
// @updateURL   https://github.com/roddone/my-user-scripts/raw/master/yggtorrent-download.user.js
// @downloadURL https://github.com/roddone/my-user-scripts/raw/master/yggtorrent-download.user.js
// ==/UserScript==

(function() {
    'use strict';
    document.body.addEventListener('keydown', function(evt){
        if(evt.key === 'd' && evt.ctrlKey === true && evt.altKey === true){
            evt.preventDefault();
            document.querySelector('a.butt').click();
        }
    });
})();
