var HandlerFactory = (function () {
    function HandlerFactory() {
    }
    HandlerFactory.prototype.getHandler = function (type) {
        switch (type) {
            case 'Random':
                return new RandomHandler();
            case 'Reversed':
                return new ReversedHandler();
            default:
                return new Handler();
        }
    };
    return HandlerFactory;
})();
var RandomHandler = (function () {
    function RandomHandler() {
    }
    return RandomHandler;
})();
var ReversedHandler = (function () {
    function ReversedHandler() {
    }
    return ReversedHandler;
})();
var Handler = (function () {
    function Handler() {
    }
    return Handler;
})();
