var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Display = (function () {
    function Display() {
        this.name = '';
    }
    return Display;
})();
var Television = (function (_super) {
    __extends(Television, _super);
    function Television() {
        _super.apply(this, arguments);
    }
    return Television;
})(Display);
var HiFi = (function () {
    function HiFi() {
    }
    return HiFi;
})();
var display = new Display();
var television = new Television();
var hiFi = new HiFi();
var isDisplay;
// true
isDisplay = display instanceof Display;
console.log("Is Display: ", isDisplay);
// true (inherits from Display)
isDisplay = television instanceof Display;
console.log("Is Display: ", isDisplay);
// false
isDisplay = hiFi instanceof Display;
console.log("Is Display: ", isDisplay);
