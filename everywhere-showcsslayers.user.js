// ==UserScript==
// @name         show css layers
// @namespace    Everywhere
// @version      0.1
// @description  add css layers for css debugging
// @author       Romain Oddone
// @include      *
// @grant        none.
// @run-at       document-ready
// @updateURL   https://github.com/roddone/my-user-scripts/raw/master/everywhere-showcsslayers.user.js
// @downloadURL https://github.com/roddone/my-user-scripts/raw/master/everywhere-showcsslayers.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.body.addEventListener('keydown', function(evt){
        if(evt.key === 'c' && evt.ctrlKey === true && evt.altKey === true){
            evt.preventDefault();
            //previous inputs have been revealed, lets hide them instead
			let style = document.createElement('style');
			style.innerHTML = `
			* { background-color: rgba(255,0,0,.2); }
			* * { background-color: rgba(0,255,0,.2); }
			* * * { background-color: rgba(0,0,255,.2); }
			* * * * { background-color: rgba(255,0,255,.2); }
			* * * * * { background-color: rgba(0,255,255,.2); }
			* * * * * * { background-color: rgba(255,255,0,.2); }
			* * * * * * * { background-color: rgba(255,0,0,.2); }
			* * * * * * * * { background-color: rgba(0,255,0,.2); }
			* * * * * * * * * { background-color: rgba(0,0,255,.2); }`;
			document.head.appendChild(style);
        }
    });
})();
