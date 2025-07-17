import { desktopIcon } from "../components/desktopIcon.js";
import { pokeListReadme } from "./pokeListReadme.js";
import { wikipedia } from "./wikipedia.js";

export function pokeListFolder(){
    const content = `
        ${pokeListReadme()}
        ${wikipedia()}
    `
    
    return (
        `
        ${desktopIcon("https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/reactFolder.png", "PokeList", "poke_List_folder_icon", content)}
        `
    )
}
