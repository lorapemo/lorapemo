import { desktopIcon } from "../../../components/desktopIcon.js";
import { IMAGES } from "../../../utilities/constants.js";

export function pokeListReadme() {
    const content = ``

    const title = "Readme"

    return (
        `
        ${desktopIcon({
            img: IMAGES.TEXT_FILE, 
            title: title, 
            dataWindow: "pokelist_readme_icon", 
            content: content})}   
        `
    )
}