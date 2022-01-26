function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function(element) {
        return RegExp(text)
            .test(element.textContent);
    });
}

function clickPlanet() {
    var acceptBtn = contains(".artdeco-button__text", "Accept");
    if (acceptBtn.length) {
        acceptBtn.forEach((btn) => {
            btn.click();
        })
    } else {
        alert('No connection accept buttons to click!')
    }

}

clickPlanet();
