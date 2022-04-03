// ==UserScript==
// @name         r/place SpaceX Template
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Template for spacex graphic
// @author       /u/fiercedude
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/fiercedude/r-place-spacex-overlay/raw/main/spacex.user.js
// @downloadURL  https://github.com/fiercedude/r-place-spacex-overlay/raw/main/spacex.user.js
// @grant        none
// ==/UserScript==

if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/adamandreasson/rplacespace/main/trans_space_logo_dynamic.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
