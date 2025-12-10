function getWebSocketAddress() {
    var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    var address = protocol + window.location.host + window.location.pathname + '/ws';

    return address;    
}

function connectWebSocket(callback) {
    callback();
    var address = getWebSocketAddress();
    var socket = new WebSocket(address);

    socket.onmessage = callback;
}

function loadCss(elementId) {
    console.log('Refreshing css');
    fetch(`./styles.css?cacheBust=${new Date().getTime()}`)
    .then(response => response.text())
    .then(css => {
        const codeBlock = document.getElementById(elementId);
        codeBlock.textContent = css;
        Prism.highlightElement(codeBlock); // Apply syntax highlighting
    })
    .catch(error => {
        document.getElementById(elementId).textContent = 'Error loading CSS: ' + error;
    });

}


function reloadPage(msg) {  
    if ((msg?.data === 'reload') || (msg?.data === 'refreshcss')) {
        location.reload();
    }
}
