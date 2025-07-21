import { desktopIcon } from '../components/desktopIcon.js'
import { toDoFolder } from './reactFolder/toDoFolder.js'
import { pokeListFolder } from './reactFolder/pokeListFolder.js'
import { IMAGES } from '../utilities/constants.js'

export function reactFolder() {
    const content = `
    ${toDoFolder()}
    ${pokeListFolder()}
    `

    return (
        `
        ${desktopIcon({
            img: IMAGES.REACT_FOLDER, 
            title: "React", 
            dataWindow: "react_folder_icon", 
            content: content,
            isFolder: true
        })}
        `
    )
}