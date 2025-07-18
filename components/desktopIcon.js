import { handleWindow } from "../utilities/handleWindow.js"

export function desktopIcon({img, title, dataWindow, content = "Hello World", isIFrame=false}) {
    $(document).on('click', `#${dataWindow}`, function () {
        handleWindow(title, content, isIFrame, dataWindow)
    });
    return (`
        <div class="desktop-icon" data-window="${dataWindow}" id="${dataWindow}">
            <img src="${img}" alt="Document">
            <span class="icon-title">${title}</span>
        </div>
        `);
}
