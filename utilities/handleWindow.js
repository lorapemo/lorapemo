function handleContent(title, windowId, content, isIFrame, isFolder) {
    var basic_window_html = `
                <div class="window" id="${windowId}">
                    <div class="window-header">
                        <div class="window-title">${title}</div>
                        <div class="window-controls">
                            <div class="window-control minimize"></div>
                            <div class="window-control maximize"></div>
                            <div class="window-control close"></div>
                        </div>
                    </div>

                    `
    if (isFolder) {
        content = `
            <div class="folder-window-content">
                ${content}
            </div>
        `
    }
    if (isIFrame) {
        basic_window_html += `
            <div id="${windowId}-content" class="window-iframe flex flex-column">${content}</div>
            </div>
            `
        return basic_window_html
    }
    basic_window_html += `
            <div id="${windowId}-content" class="window-content folder-window-content flex flex-column">${content}</div>
            </div>
            `
    return basic_window_html
}

export function handleWindow({ title, content, isIFrame = false, dataWindow, maximizedByDefault = false, isFolder = false }) {
    try {
        windowCounter++
        const windowId = `${dataWindow}-window-${windowCounter}`;

        // Create window HTML
        const windowHtml = handleContent(title, windowId, content, isIFrame, isFolder)

        // Add to desktop
        $('#web-desktop').append(windowHtml);

        // Make draggable
        $(`#${windowId}`).draggable({
            handle: '.window-header',
            containment: '#web-desktop',
            stack: '.window'
        });

        if (maximizedByDefault) {
            const window = $(`#${windowId}`)
            window.addClass('maximized').css({
                width: 'calc(100% - 20px)',
                height: 'calc(100% - 60px)',
                top: '10px',
                left: '10px'
            });
        }

        $(`#${windowId}`).click( () =>{
            const windows = document.querySelectorAll('.window');
            windows.forEach(window => {
                window.addEventListener('click', () => {

                    let maxZIndex = 0;
                    windows.forEach(w => {
                        const z = parseInt(w.style.zIndex || 0);
                        if (z > maxZIndex) maxZIndex = z;
                    });

                    windows.forEach(otherWindow => {                       
                        otherWindow.style.zIndex = (99).toString();
                    });
                    
                    window.style.zIndex = (101).toString();
                    console.log(window.style.zIndex)
                });
            });
        })


        // Window controls
        $(`#${windowId} .close`).click(() => {
            $(`#${windowId}`).remove()
            if ($(`#taskbar .taskbar-item[data-window="${windowId}"]`).length) {
                $(`#taskbar .taskbar-item[data-window="${windowId}"]`).remove();
            }
        });
        $(`#${windowId} .minimize`).click(() => $(`#${windowId}`).hide());
        $(`#${windowId} .maximize`).click(function () {
            const window = $(this).closest('.window');
            if (window.hasClass('maximized')) {
                window.removeClass('maximized').css({
                    width: '',
                    height: '',
                    top: '',
                    left: ''
                });
            } else {
                window.addClass('maximized').css({
                    width: 'calc(100% - 20px)',
                    height: 'calc(100% - 60px)',
                    top: '10px',
                    left: '10px'
                });
            }
        });

        // Add to taskbar
        const taskbarItem = $(`<div class="taskbar-item window-taskbar-item" data-window="${windowId}">${title}</div>`);
        taskbarItem.click(() => {
            const window = $(`#${windowId}`);
            if (window.is(':visible')) {
                window.hide();
            } else {
                window.show();
            }
        });
        $('#taskbar').append(taskbarItem);

        return windowId;
    } catch (err) {
        console.log("Errors!:" + err)
    }

}
