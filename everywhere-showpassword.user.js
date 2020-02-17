// ==UserScript==
// @name         show passwords
// @namespace    Everywhere
// @version      0.3
// @description  allows to show passwords in input for any website
// @author       Romain Oddone
// @include      *
// @grant        none.
// @run-at       document-ready
// @updateURL   https://github.com/roddone/my-user-scripts/raw/master/everywhere-showpassword.user.js
// @downloadURL https://github.com/roddone/my-user-scripts/raw/master/everywhere-showpassword.user.js
// ==/UserScript==

(function() {
    'use strict';
    let previousPasswordInputs = null;

    document.body.addEventListener('keydown', function(evt){
        if(evt.key === 'p' && evt.ctrlKey === true && evt.altKey === true){
            evt.preventDefault();
            //previous inputs have been revealed, lets hide them instead
            if(previousPasswordInputs !== null){
                toggleInputsType(previousPasswordInputs);
                previousPasswordInputs = null;
            }
            else{
                let passwordInputs = document.querySelectorAll('input[type=password]');
                toggleInputsType(passwordInputs);
                previousPasswordInputs = passwordInputs;
            }
        }
    });

    function toggleInputsType(inputs){
        for(let input of inputs){
            if(input.type === 'password'){
                input.type = 'text';
            }
            else if(input.type === 'text'){
                input.type = 'password';
            }
        }
    }
})();
