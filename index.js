import { readmeIcon } from './composition/readmeIcon.js';
import { reactFolderIcon } from './composition/reactFolderIcon.js';
document.getElementById("desktop-icons").innerHTML = `
    ${readmeIcon()}
    ${reactFolderIcon()}
    `