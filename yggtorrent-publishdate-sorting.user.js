// ==UserScript==
// @name         automatic publish date sorting
// @namespace    YggTorrent
// @version      0.21
// @description  Automatically sorts search results by descending publication date
// @author       Romain Oddone
// @include      /^https?://(www6\.|www5\.|www4\.|www3\.|www2\.|www\.)?yggtorrent\.(cool|qa|wtf|do|lol|ws|se|si|li|nz|re|la|fi|top)/engine/search*/
// @include      /^https?://(www6\.|www5\.|www4\.|www3\.|www2\.|www\.)?ygg\.(re)/engine/search*/
// @grant        none.
// @run-at       document-start
// @updateURL   https://github.com/roddone/my-user-scripts/raw/master/yggtorrent-publishdate-sorting.user.js
// @downloadURL https://github.com/roddone/my-user-scripts/raw/master/yggtorrent-publishdate-sorting.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Here You can type your custom JavaScript...
    if(!location.search.includes('&order=desc&sort=publish_date')){
        location.href = location.href + '&order=desc&sort=publish_date';
    }
})();
