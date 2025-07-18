import { desktopIcon } from "../../components/desktopIcon.js";
import { toDoReadme } from "./toDoFolder/toDoReadme.js";
import { wikipedia } from "../wikipedia.js";
import { IMAGES } from "../../utilities/constants.js";

export function toDoFolder() {
    const content = `
    ${toDoReadme()}
    ${wikipedia("toDoFolder")}
    `

    return (
        `
        ${desktopIcon({
            img: IMAGES.REACT_FOLDER,
            title: "ToDo", 
            dataWindow: "to_do_folder_icon", 
            content: content
        })}
        `
    )
}