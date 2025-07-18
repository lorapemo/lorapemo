import { desktopIcon } from "../../../components/desktopIcon.js"
import { IMAGES } from "../../../utilities/constants.js"

export function pokeList(parent) {
    const content = `<iframe src="https://blueaxe-test-07-025.onrender.com/"></iframe>`
    const dataWindow = `${parent}-pokelist`

    return (
        `
        ${desktopIcon({
            img: IMAGES.REACT, 
            title: "PokeList", 
            dataWindow: dataWindow, 
            content: content, 
            isIFrame:true,
            maximizedByDefault: true
        })}
        `
    )
}