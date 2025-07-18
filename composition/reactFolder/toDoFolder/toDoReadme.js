import { desktopIcon } from "../../../components/desktopIcon.js";

export function toDoReadme() {
    const content = `
    
    `

    return (
        `
        ${desktopIcon({
            img:"https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/textFile.PNG", 
            title: "Readme", 
            dataWindow: "to_do_readme_icon", 
            content: content})}
        
        `
    )
}