export function desktopIcon(img, title, dataWindow) {
    return (`
        <div class="desktop-icon" data-window="${dataWindow}">
        <img src="${img}" alt="Document">
        <span>${title}</span>
        </div>
        `);
}
        // <div class="desktop-icon" data-window="window1">
        // <img src="https://cdn-icons-png.flaticon.com/512/2965/2965300.png" alt="Document">
        // <span>Document 1</span>
        // </div>