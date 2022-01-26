function injectTheScript() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {
            file: "content_script.js"
        });
    });
}

document.getElementById('clickactivity')
    .addEventListener('click', injectTheScript);
var toggle = false
document.getElementById('instructions')
    .addEventListener('click', function() {
        if (toggle) {
            document.getElementById('list')
                .style.display = "none";
        } else {
            document.getElementById('list')
                .style.display = "block";
        }
        toggle = !toggle;
    })
