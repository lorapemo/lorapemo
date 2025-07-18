import { desktopIcon } from '../components/desktopIcon.js'
import { IMAGES } from '../utilities/constants.js'
import { openWindowOnPageLoad } from '../utilities/openWindowOnPageLoad.js'
export function readme() {
    const content = `
        <div class="container">
        <div class="accordion" id="myAccordion">
            <!-- Item 1 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        Overview
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                    <div class="accordion-body">
                        <p>The objective of this project is to:</p><br>
                        <ol id="overview-accordion" class="accordion-list">    
                            <li>
                                Test the Github Pages capabilities 
                            </li>
                            <li>
                                Test my own capabilities using JS and HTML
                            </li>
                            <li>
                                Create a treelink-like portfolios for the <a href="">demos</a> I've created for companies and other stuff I've done.
                            </li>
                        </ol>    
                    </div>
                </div>
            </div>
            
            <!-- Item 2 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        <span>Why use Github Pages</span>?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="accordion-body">
                        <ol class="accordion-list">    
                            <li>
                                No need for DNS 
                            </li>
                            <li>
                                No need to pay for hosting (for static websites)
                            </li>
                            <li>
                                No need to pay for storage
                            </li>
                        </ol>    
                    </div>
                </div>
            </div>
            
            <!-- Item 3 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        About the demos...
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="accordion-body">
                        <p>You can test them here!</p>
                        <p>Just close this window using the red button on the top-left</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    const title = "Readme"
    const dataWindow= "readme_icon"

    openWindowOnPageLoad({title: title, dataWindow: dataWindow, content: content, maximizedByDefault:true})

    return (`
        ${desktopIcon({
            img: IMAGES.TEXT_FILE, 
            title: title, 
            dataWindow: dataWindow, 
            content: content})}
    `);
}
