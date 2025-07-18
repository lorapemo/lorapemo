import { desktopIcon } from '../components/desktopIcon.js'
import { openWindowOnPageLoad } from '../utilities/openWindowOnPageLoad.js'

export function wikipedia(parent) {
    const content = `<iframe src="https://wikipedia.com/"></iframe>`
    const title = "Wikipedia"

    openWindowOnPageLoad({ title: title, dataWindow: "desktop-wikipedia", content: content, maximizedByDefault: true, isIFrame: true })

    return (
        `
        ${desktopIcon({
            img: "https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg",
            title: title,
            dataWindow: `${parent}-wikipedia`,
            content: content,
            isIFrame: true,
            maximizedByDefault: true
        })}
        `
    )
}