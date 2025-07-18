import { desktopIcon } from '../components/desktopIcon.js'
import { toDoFolder } from './reactFolder/toDoFolder.js'
import { pokeListFolder } from './reactFolder/pokeListFolder.js'

export function reactFolder() {
    const content = `
    ${toDoFolder()}
    ${pokeListFolder()}
    `

    return (
        `
        ${desktopIcon({
            img: "https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/reactFolder.png", 
            title: "React", 
            dataWindow: "react_folder_icon", 
            content: content
        })}
        `
    )
}