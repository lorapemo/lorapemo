import { desktopIcon } from '../components/desktopIcon.js'

export function wikipedia(parent) {
    const content = `<iframe src="https://wikipedia.com/"></iframe>`

    return (
        `
        ${desktopIcon("https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg", "Wikipedia", `${parent}-wikipedia`, content, true)}
        `
    )
}