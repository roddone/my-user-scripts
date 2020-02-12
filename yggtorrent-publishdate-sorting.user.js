// ==UserScript==
// @name         automatic publish date sorting
// @namespace    YggTorrent
// @version      0.2
// @description  Automatically sorts search results by descending publication date
// @author       Romain Oddone
// @include      /^https?://www2\.yggtorrent\.(ws|se)/engine/search*/
// @grant        none.
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Here You can type your custom JavaScript...
    if(!location.search.includes('&order=desc&sort=publish_date')){
        location.href = location.href + '&order=desc&sort=publish_date';
    }
})();
