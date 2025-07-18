import { desktopIcon } from "../../components/desktopIcon.js";
import { toDoReadme } from "./toDoFolder/toDoReadme.js";
import { wikipedia } from "../wikipedia.js";

export function toDoFolder() {
    const content = `
    ${toDoReadme()}
    ${wikipedia("toDoFolder")}
    `

    return (
        `
        ${desktopIcon({
            img: "https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/reactFolder.png",
            title: "ToDo", 
            dataWindow: "to_do_folder_icon", 
            content: content
        })}
        `
    )
}