<!DOCTYPE html>
<html>
<head>
    <title>Webpage Desktop</title>
    <style>
        /* Desktop styling */
        #web-desktop {
            position: relative;
            width: 100%;
            height: 100vh;
            background: #008080; /* Classic desktop blue */
            overflow: hidden;
            background-image: linear-gradient(45deg, #eee 25%, transparent 25%),
                              linear-gradient(-45deg, #eee 25%, transparent 25%),
                              linear-gradient(45deg, transparent 75%, #eee 75%),
                              linear-gradient(-45deg, transparent 75%, #eee 75%);
            background-size: 20px 20px;
            background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
        
        /* Window styling */
        .window {
            position: absolute;
            width: 500px;
            min-width: 300px;
            min-height: 200px;
            background: white;
            border-radius: 5px;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            resize: both;
        }
        
        .window-header {
            padding: 8px 12px;
            background: #222;
            color: white;
            cursor: move;
            display: flex;
            justify-content: space-between;
            align-items: center;
            user-select: none;
        }
        
        .window-title {
            font-weight: bold;
        }
        
        .window-controls {
            display: flex;
            gap: 8px;
        }
        
        .window-control {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            cursor: pointer;
        }
        
        .close { background: #ff5f56; }
        .minimize { background: #ffbd2e; }
        .maximize { background: #27c93f; }
        
        .window-content {
            flex: 1;
            padding: 15px;
            overflow: auto;
        }
        
        /* Taskbar styling */
        #taskbar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40px;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            padding: 0 10px;
            gap: 10px;
            z-index: 1000;
        }
        
        .taskbar-item {
            color: white;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 3px;
        }
        
        .taskbar-item:hover {
            background: rgba(255,255,255,0.2);
        }
        
        /* Icon styling */
        #desktop-icons {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
            position: absolute;
            z-index: 1;
        }
        
        .desktop-icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 70px;
            cursor: pointer;
            text-align: center;
            color: white;
            text-shadow: 1px 1px 2px black;
        }
        
        .desktop-icon img {
            width: 40px;
            height: 40px;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div id="web-desktop">
        <!-- Desktop icons -->
        <div id="desktop-icons">
            <div class="desktop-icon" data-window="window1">
                <img src="https://cdn-icons-png.flaticon.com/512/2965/2965300.png" alt="Document">
                <span>Document 1</span>
            </div>
            <div class="desktop-icon" data-window="window2">
                <img src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png" alt="Document">
                <span>Document 2</span>
            </div>
        </div>
        
        <!-- Windows will be created here dynamically -->
        
        <!-- Taskbar -->
        <div id="taskbar">
            <div class="taskbar-item" id="start-btn">Start</div>
            <!-- Open windows will appear here -->
        </div>
    </div>

    <!-- jQuery and jQuery UI for drag/drop functionality -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js"></script>
    
    <script>
        // Counter for window IDs
        let windowCounter = 0;
        
        // Create a new window
        function createWindow(title, content, icon = null) {
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
            $(`#${windowId} .close`).click(() => $(`#${windowId}`).remove());
            $(`#${windowId} .minimize`).click(() => $(`#${windowId}`).hide());
            $(`#${windowId} .maximize`).click(function() {
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
        
        // Desktop icon click handlers
        $('.desktop-icon').click(function() {
            const windowType = $(this).data('window');
            let title, content;
            
            if (windowType === 'window1') {
                title = "Document 1";
                content = "<h2>Document 1 Content</h2><p>This is the content of document 1. You can put anything here - text, forms, even iframes with other webpages.</p>";
            } else if (windowType === 'window2') {
                title = "Document 2";
                content = "<h2>Document 2 Content</h2><p>Different content here. You could load this via AJAX from your server.</p>";
            }
            
            createWindow(title, content);
        });
        
        // Start button (could add a start menu)
        $('#start-btn').click(() => {
            alert('Start menu would appear here');
        });
        
        // Example of opening a window on page load
        $(document).ready(() => {
            createWindow(
                "Welcome", 
                "<h2>Welcome to Web Desktop</h2>" +
                "<p>Click the desktop icons to open new windows. You can drag, resize, minimize and close them.</p>" +
                "<p>Try opening multiple windows and arranging them as you like!</p>"
            );
        });
    </script>
</body>
</html>
