import { desktopIcon } from "../../../components/desktopIcon.js"

export function pokeList(parent) {
    const content = `<iframe src="https://blueaxe-test-07-025.onrender.com/"></iframe>`
    const dataWindow = `${parent}-pokelist`

    return (
        `
        ${desktopIcon({
            img: "https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/React.png", 
            title: "PokeList", 
            dataWindow: dataWindow, 
            content: content, 
            isIFrame:true})}
        `
    )
}