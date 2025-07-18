import { desktopIcon } from "../../../components/desktopIcon.js";

export function toDoReadme() {
    const content = `
    
    `

    return (
        `
        ${desktopIcon(
            "https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/textFile.PNG", 
            "Readme", 
            "to_do_readme_icon", 
            content)}
        
        `
    )
}