import { desktopIcon } from "../components/desktopIcon.js";
import { toDoReadme } from "./toDoReadme.js";
import { wikipedia } from "./wikipedia.js";

export function toDoFolder() {
    const content = `
    ${toDoReadme()}
    ${wikipedia("toDoFolder")}
    `

    return (
        `
        ${desktopIcon("https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/reactFolder.png", "ToDo", "to_do_folder_icon", content)}
        `
    )
}