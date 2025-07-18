import { desktopIcon } from "../../components/desktopIcon.js";
import { pokeListReadme } from "./pokeListFolder/pokeListReadme.js";
import { pokeList } from "./pokeListFolder/pokeList.js"
import { IMAGES } from "../../utilities/constants.js";

export function pokeListFolder(){
    const content = `
        ${pokeListReadme()}
        ${pokeList()}
    `
    
    return (
        `
        ${desktopIcon({
            img: IMAGES.REACT_FOLDER, 
            title: "PokeList", 
            dataWindow: "poke_List_folder_icon", 
            content: content})}
        `
    )
}
