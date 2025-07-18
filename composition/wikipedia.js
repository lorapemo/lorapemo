import { desktopIcon } from '../components/desktopIcon.js'

export function wikipedia(parent) {
    const content = `<iframe src="https://wikipedia.com/"></iframe>`

    return (
        `
        ${desktopIcon({
            img: "https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg", 
            title: "Wikipedia", 
            dataWindow: `${parent}-wikipedia`, 
            content: content, 
            isIFrame: true})}
        `
    )
}