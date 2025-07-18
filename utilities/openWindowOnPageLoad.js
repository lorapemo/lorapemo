import { handleWindow } from "./handleWindow.js"

export function openWindowOnPageLoad({title, content, dataWindow, isIFrame, maximizedByDefault}) {
    $(document).ready(() => {
        handleWindow({ title: title, content: content, isIFrame, dataWindow: dataWindow, maximizedByDefault: maximizedByDefault })
    })
}