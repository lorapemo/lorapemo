import { desktopIcon } from '../components/desktopIcon.js'
import { toDoFolder } from './toDoFolder.js'
import { pokeListFolder } from './pokeListFolder.js'

export function reactFolder() {
    const content = `
    ${toDoFolder()}
    ${pokeListFolder()}
    `

    return (
        `
        ${desktopIcon("https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/reactFolder.png", "React", "react_folder_icon", content)}
        `
    )
}