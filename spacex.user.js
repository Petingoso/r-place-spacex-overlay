// ==UserScript==
// @name         r/place SpaceX Template
// @namespace    http://tampermonkey.net/
// @version      0.4
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
            i.src = "https://cdn.discordapp.com/attachments/502460438425108490/959650260513333279/trans_spacex_logo_v4.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
