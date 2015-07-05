var ClickCounter = (function () {
    function ClickCounter() {
        this.count = 0;
    }
    ClickCounter.prototype.registerClick = function () {
        this.count++;
        alert(this.count);
    };
    return ClickCounter;
})();
var clickCounter = new ClickCounter();
var clickHandler = clickCounter.registerClick.bind(clickCounter);
document.getElementById('target').onclick = clickHandler;
