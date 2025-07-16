export function handleWindow(title, content, icon = null) {
    windowCounter++;
    const windowId = `window-${windowCounter}`;    

    // Create window HTML
    const windowHtml = `
                <div class="window" id="${windowId}">
                    <div class="window-header">
                        <div class="window-title">${title}</div>
                        <div class="window-controls">
                            <div class="window-control minimize"></div>
                            <div class="window-control maximize"></div>
                            <div class="window-control close"></div>
                        </div>
                    </div>
                    <div class="window-content">${content}</div>
                </div>
            `;

    // Add to desktop
    $('#web-desktop').append(windowHtml);

    // Make draggable
    $(`#${windowId}`).draggable({
        handle: '.window-header',
        containment: '#web-desktop',
        stack: '.window'
    });

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
}
