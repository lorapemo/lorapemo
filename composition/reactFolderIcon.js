import { desktopIcon } from '../components/desktopIcon.js'

export function reactFolderIcon() {
    const content = `${desktopIcon("https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/React.png", "Poke Api Created For", "blue_axe_icon", `<iframe src="https://wikipedia.com"></iframe>`, true)}
    ${desktopIcon("https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/React.png", "ToDo", "human_experience_icon", `<iframe src="https://wikipedia.com"></iframe>`, true)}`

    return (
        `
        ${desktopIcon("https://raw.githubusercontent.com/lorapemo/lorapemo/refs/heads/dev/public/reactFolder.png", "React", "react_folder_icon", content)}
        `
    )
}