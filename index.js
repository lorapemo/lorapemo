import { readme } from './composition/readme.js';
import { reactFolder } from './composition/reactFolder.js';
document.getElementById("desktop-icons").innerHTML = `
    ${readme()}
    ${reactFolder()}
    `