import { desktopIcon } from "../../../components/desktopIcon.js";
import { IMAGES } from "../../../utilities/constants.js";

export function toDoReadme() {
    const content = `
    
    `

    return (
        `
        ${desktopIcon({
            img: IMAGES.TEXT_FILE,
            title: "Readme", 
            dataWindow: "to_do_readme_icon", 
            content: content})}
        
        `
    )
}