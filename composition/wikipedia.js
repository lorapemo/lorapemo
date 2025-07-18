import { desktopIcon } from '../components/desktopIcon.js'
import { IMAGES } from '../utilities/constants.js'

export function wikipedia(parent) {
    const content = `<iframe src="https://wikipedia.com/"></iframe>`
    const title = "Wikipedia"

    return (
        `
        ${desktopIcon({
            img: IMAGES.WIKIPEDIA,
            title: title,
            dataWindow: `${parent}-wikipedia`,
            content: content,
            isIFrame: true,
            maximizedByDefault: true
        })}
        `
    )
}