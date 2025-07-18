import { desktopIcon } from "../../../components/desktopIcon.js"

export function pokeList(parent) {
    const content = `<iframe src="https://blueaxe-test-07-025.onrender.com/"></iframe>`
    const dataWindow = `${parent}-pokelist`

    $(document).ready(() => {
        const windowId = handleWindow(title, content)

        $(`#${windowId}`).addClass('maximized').css({
            width: 'calc(100% - 20px)',
            height: 'calc(100% - 60px)',
            top: '10px',
            left: '10px'
        });
    })

    return (
        `
        ${desktopIcon("https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/React.png", "PokeList", dataWindow, content, true)}
        `
    )
}