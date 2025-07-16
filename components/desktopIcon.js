import { handleWindow } from "../utilities/handleWindow.js"

export function desktopIcon(img, title, dataWindow, content = "Hello World") {
    $(document).on('click', '.desktop-icon', function () {
        handleWindow(title, content)
    });
    return (`
        <div class="desktop-icon" data-window="${dataWindow}" >
            <img src="${img}" alt="Document">
            <span>${title}</span>
        </div>
        `);
}
