var ClickCounter = (function () {
    function ClickCounter() {
        var _this = this;
        this.count = 0;
        this.registerClick = function () {
            _this.count++;
            alert(_this.count);
        };
    }
    return ClickCounter;
})();
