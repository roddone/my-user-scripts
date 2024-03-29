// ==UserScript==
// @name         add yggtorrent link
// @namespace    Betaseries
// @version      0.7
// @description  add link to yggtorrent search in betaseries episodes list
// @author       Romain Oddone
// @include      https://www.betaseries.com/membre/seddhaz/episodes
// @grant        none.
// @run-at       document-ready
// @updateURL   https://github.com/roddone/my-user-scripts/raw/master/betaseries-link-to-torrent.user.js
// @downloadURL https://github.com/roddone/my-user-scripts/raw/master/betaseries-link-to-torrent.user.js
// ==/UserScript==

(async function () {
    'use strict';

    await waitForResults();
    // console.log('found !')
    document.querySelectorAll('#episodes_container .episode').forEach(episode_elt => {
        let title = episode_elt.querySelector('.ep').innerText.replace("'", '')
        let episode = episode_elt.querySelector('a:nth-child(2)').innerText
        let child = document.createElement('a');

        child.href = `https://www5.yggtorrent.fi/engine/search?name=${title}+${episode}&do=search`
        child.target = '_blank'
        child.classList.add('btn-dl'); child.classList.add('btn-reset')
        child.style = 'width:unset;'
        child.innerText = 'YggTorrent'
        episode_elt.querySelector('.episode-side').appendChild(child)
    });

    async function waitForResults(){
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                if(!document.querySelector('#episodes_container .episodes')){
                    // console.log('waiting a little more ...')
                    await waitForResults();
                    resolve();
                }
                else{
                    resolve();
                }
            }, 200);
        });
    }

})();
