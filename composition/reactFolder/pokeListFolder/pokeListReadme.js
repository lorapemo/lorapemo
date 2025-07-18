import { desktopIcon } from "../../../components/desktopIcon.js";

export function pokeListReadme() {
    const content = ``

    const title = "Readme"

    return (
        `
        ${desktopIcon({
            img: "https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/textFile.PNG", 
            title: title, 
            dataWindow: "pokelist_readme_icon", 
            content: content})}   
        `
    )
}