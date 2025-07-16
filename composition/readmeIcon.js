import { desktopIcon } from '../components/desktopIcon.js'
const  img  = '/public/text-file.png'

export function readmeIcon() {
    const content = `
        <div class="container mt-5">
        <div class="accordion" id="myAccordion">
            <!-- Item 1 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                    <div class="accordion-body">
                        This is the first item's accordion body. It is shown by default.
                    </div>
                </div>
            </div>
            
            <!-- Item 2 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="accordion-body">
                        This is the second item's accordion body. It is hidden by default.
                    </div>
                </div>
            </div>
            
            <!-- Item 3 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="accordion-body">
                        This is the third item's accordion body. It is hidden by default.
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    return (`
        ${desktopIcon(img, "Readme", "window1", content )}
    `);
}