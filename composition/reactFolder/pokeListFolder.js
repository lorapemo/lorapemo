import { desktopIcon } from "../../components/desktopIcon.js";
import { pokeListReadme } from "./pokeListFolder/pokeListReadme.js";
import { pokeList } from "./pokeListFolder/pokeList.js"

export function pokeListFolder(){
    const content = `
        ${pokeListReadme()}
        ${pokeList()}
    `
    
    return (
        `
        ${desktopIcon("https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/reactFolder.png", "PokeList", "poke_List_folder_icon", content)}
        `
    )
}
